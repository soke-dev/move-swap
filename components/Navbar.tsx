import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "10px",
            padding: "15px",
            backgroundColor: "yellow",  // Yellow background
            borderRadius: "8px"
        }}>
            <h1 style={{ color: "black", fontSize: "24px", margin: "0" }}>Move Swap</h1> {/* Blue text */}
            <ConnectWallet/>
        </div>
    )
}
