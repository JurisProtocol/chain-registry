module.exports = {
    chainID: 'kichain-2',
    lcd: 'https://api-mainnet.blockchain.ki',
    gasAdjustment: 1.75,
    gasPrices: {uxki: 0.03},
    prefix: 'ki',
    coinType: '118',
    baseAsset: 'uxki',
    name: 'Ki',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/Kichain.svg',
    gitRepo: 'https://github.com/KiFoundation/ki-tools.git',
    explorer: {
        address: 'https://www.mintscan.io/ki-chain/account/{}',
        tx: 'https://www.mintscan.io/ki-chain/txs/{}',
        validator: 'https://www.mintscan.io/ki-chain/validators/{}',
        block: 'https://www.mintscan.io/ki-chain/blocks/id/{}',
    },
    tokens: [
        {
            token: 'uxki',
            symbol: 'XKI',
            name: 'Ki',
            icon: process.env.CF_PAGES_URL + '/img/coins/Kichain.svg',
            decimals: 6,
            coinGeckoID: 'ki',
        },
    ],
}
