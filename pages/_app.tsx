import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Chain } from "@thirdweb-dev/chains";

// Define the Movement Labs (MEVM) chain (Chain ID: 30732)
const MEVM: Chain = {
  chainId: 30732,
  name: "Movement Labs",
  shortName: "ML", 
  chain: "string",// Add a short name for the chain
  slug: "movement-labs", // Add a slug for the chain
  nativeCurrency: {
    name: "Move",
    symbol: "MOVE",
    decimals: 18,
  },
  rpc: ["https://30732.rpc.thirdweb.com"],
  testnet: true, // Keep this if you want it to be identified as a testnet
};

const activeChain = MEVM;


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
    >
      <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
