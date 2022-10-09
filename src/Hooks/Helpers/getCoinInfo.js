const getCoinInfo = data => [
    {
        name: 'image',
        value: data.image,
    },
    {
        name: 'coin',
        value: data.name,
    },
    {
        name: 'coingecko rank',
        value: data.coingecko_rank,
    },
    {
        name: 'symbol',
        value: data.symbol,
    },
    {
        name: 'long sentiment',
        value: data.sentiment_votes_up_percentage,
        unit: '%',
    },
    {
        name: 'short sentiment',
        value: data.sentiment_votes_down_percentage,
        unit: '%',
    },
    {
        name: 'price',
        value: data.market_data.current_price.usd,
        unit: '$',
    },
    {
        name: 'volume',
        value: data.market_data.total_volume.usd,
        unit: '$',
    },
    {
        name: 'price change percentage 24hs',
        value: data.market_data.price_change_percentage_24hs,
        unit: '%',
    },
];

export default getCoinInfo