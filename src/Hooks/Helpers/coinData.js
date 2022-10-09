const coinData = (data) => ({
    coinIcon: data.image.small,
    coinName: data.name,
    coingeckoRank: data.coingecko_rank,
    coinSymbol: data.symbol,
    coinLongS: data.sentiment_votes_up_percentage,
    coinShortS: data.sentiment_votes_down_percentage,
    coinPrice: data.market_data.current_price.usd,
    coinVolume: data.market_data.total_volume.usd,
    coinPriceChange24: data.market_data.price_change_percentage_24h,
});

export default coinData;