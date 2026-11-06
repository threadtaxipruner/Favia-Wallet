import type { WalletApi } from "../shared/api";

declare global {
  interface Window {
    favia: WalletApi;
  }
}

export {};
