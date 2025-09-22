"use client";

export interface AssetToLoad {
  url: string;
  type: "image" | "font" | "video" | "audio";
}

export class AssetPreloader {
  private assets: AssetToLoad[];
  private loadedCount: number = 0;
  private onProgress?: (progress: number) => void;
  private onComplete?: () => void;

  constructor(
    assets: AssetToLoad[],
    onProgress?: (progress: number) => void,
    onComplete?: () => void
  ) {
    this.assets = assets;
    this.onProgress = onProgress;
    this.onComplete = onComplete;
  }

  async loadAssets(): Promise<void> {
    if (this.assets.length === 0) {
      this.onComplete?.();
      return;
    }

    const promises = this.assets.map((asset) => this.loadAsset(asset));
    await Promise.allSettled(promises);
    this.onComplete?.();
  }

  private loadAsset(asset: AssetToLoad): Promise<void> {
    return new Promise((resolve) => {
      switch (asset.type) {
        case "image":
          this.loadImage(asset.url, resolve);
          break;
        case "font":
          this.loadFont(asset.url, resolve);
          break;
        case "video":
          this.loadVideo(asset.url, resolve);
          break;
        case "audio":
          this.loadAudio(asset.url, resolve);
          break;
        default:
          resolve();
      }
    });
  }

  private loadImage(url: string, resolve: () => void): void {
    const img = new Image();
    img.onload = () => {
      this.updateProgress();
      resolve();
    };
    img.onerror = () => {
      console.warn(`Failed to load image: ${url}`);
      this.updateProgress(); // Still update progress even on error
      resolve(); // Don't reject to prevent blocking other assets
    };
    img.src = url;
  }

  private loadFont(url: string, resolve: () => void): void {
    // Skip font loading on server side
    if (typeof window === "undefined") {
      this.updateProgress();
      resolve();
      return;
    }

    // For font loading, we'll use CSS Font Loading API if available
    if ("fonts" in document && document.fonts) {
      const fontFace = new FontFace("preload-font", `url(${url})`);
      fontFace
        .load()
        .then(() => {
          document.fonts.add(fontFace);
          this.updateProgress();
          resolve();
        })
        .catch((error) => {
          console.warn(`Failed to load font: ${url}`, error);
          this.updateProgress();
          resolve();
        });
    } else {
      // Fallback for older browsers
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "font";
      link.type = "font/woff2";
      link.crossOrigin = "anonymous";
      link.href = url;
      link.onload = () => {
        this.updateProgress();
        resolve();
      };
      link.onerror = () => {
        console.warn(`Failed to load font: ${url}`);
        this.updateProgress();
        resolve();
      };
      document.head.appendChild(link);
    }
  }

  private loadVideo(url: string, resolve: () => void): void {
    const video = document.createElement("video");
    video.oncanplaythrough = () => {
      this.updateProgress();
      resolve();
    };
    video.onerror = () => {
      console.warn(`Failed to load video: ${url}`);
      this.updateProgress();
      resolve();
    };
    video.src = url;
    video.preload = "metadata";
  }

  private loadAudio(url: string, resolve: () => void): void {
    const audio = new Audio();
    audio.oncanplaythrough = () => {
      this.updateProgress();
      resolve();
    };
    audio.onerror = () => {
      console.warn(`Failed to load audio: ${url}`);
      this.updateProgress();
      resolve();
    };
    audio.src = url;
    audio.preload = "metadata";
  }

  private updateProgress(): void {
    this.loadedCount++;
    const progress = (this.loadedCount / this.assets.length) * 100;
    this.onProgress?.(progress);
  }
}

// Helper function to get common assets from your app
export const getPortfolioAssets = (): AssetToLoad[] => {
  return [
    // Add your actual assets here
    // Example:
    // { url: '/images/hero-bg.jpg', type: 'image' },
    // { url: '/images/project-1.jpg', type: 'image' },
    // { url: '/fonts/custom-font.woff2', type: 'font' },
  ];
};
