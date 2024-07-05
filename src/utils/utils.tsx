
export const formatBalance = (rawBalance: string) => {
    const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);
    return balance;
};

export const formatChainAsNum = (chainIdHex: string) => {
    const chainIdNum = parseInt(chainIdHex);
    return chainIdNum;
};

export const formatAddress = (addr: string) => {
    return `${addr.substring(0, 4)+'...'+addr.substring(addr.length-3,addr.length)}`;
};

export const Topics = [
    {
        name: "Yield Farming",
        icon: "star.png"
    },
    {
        name: "LaunchPads",
        icon: "star.png"
    },
    {
        name: "DEX",
        icon: "star.png"
    },
    {
        name: "AMM",
        icon: "star.png"
    },
    {
        name: "RWA",
        icon: "star.png"
    },
    {
        name: "AI",
        icon: "star.png"
    },
    {
        name: "NFT Marketplace",
        icon: "star.png"
    },
    {
        name: "Derivatives",
        icon: "star.png"
    }
];

export const Protocols = [
    {
        name: "Uniswap",
        image: "Uniswap.png",
        description: "Algoritmic, autonomous interest rate protocol",
    },
    {
        name: "Aave",
        image: "Aave.png",
        description: "Algoritmic, autonomous interest rate protocol",
    },
    {
        name: "Curve",
        image: "Curve.png",
        description: "Algoritmic, autonomous interest rate protocol",
    },
    {
        name: "Lido Finance",
        image: "Lido.png",
        description: "Algoritmic, autonomous interest rate protocol",
    },
    {
        name: "Compound Finance",
        image: "Compound.png",
        description: "Algoritmic, autonomous interest rate protocol",
    },
    {
        name: "EigenLayer",
        image: "Eigen.png",
        description: "Algoritmic, autonomous interest rate protocol",
    }

];