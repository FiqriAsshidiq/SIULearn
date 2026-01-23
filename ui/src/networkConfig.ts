import { createNetworkConfig } from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";

export const { networkConfig, useNetworkVariable } = createNetworkConfig({
  testnet: {
    url: getFullnodeUrl("testnet"),
    variables: {
      packageId: "0x4623e0e7d633ac74f650888a8d5ab3d14b8e31119c4f6d0cdaa4e81829c97851"
    },
  },
});