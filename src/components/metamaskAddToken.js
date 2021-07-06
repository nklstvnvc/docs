window.onload=function(){
    const addTokenToWalletEl = document.getElementById("add-token-to-wallet");

    addTokenToWalletEl.addEventListener("click", async (e) => {
        e.preventDefault();
        if (!window.ethereum) {
            return;
        }

        const tokenAddress = "0x44e2deC86B9F0e0266E9AA66e10323A2bd69CF9A";
        const tokenSymbol = "ATTR";
        const tokenDecimals = 18;
        const tokenImage =
            "https://attrace.com/images/etherscan/logo_purple_circle_256x256.png";

        try {
            const wasAdded = await window.ethereum.request({
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20",
                    options: {
                        address: tokenAddress,
                        symbol: tokenSymbol,
                        decimals: tokenDecimals,
                        image: tokenImage,
                    },
                },
            });

            if (wasAdded) {
                localStorage.setItem("addedTokenToWallet", true);
                checkAddTokenToWallet();
            }
        } catch (error) {
            console.log(error);
        }
    });
};

