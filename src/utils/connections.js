const API_KEY = 'c0cqqs748v6rlbal10hg'

const ROUTES = {
  QUOTE: (ticker, key) => `https://finnhub.io/api/v1/quote?symbol=${ticker?.toUpperCase()}&token=${key}`,
  PROFILE: (ticker, key) => `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker?.toUpperCase()}&token=${key}`,
  PEERS: (ticker, key) => `https://finnhub.io/api/v1/stock/peers?symbol=${ticker?.toUpperCase()}&token=${key}`,
  NEWS: (ticker, key) => `https://finnhub.io/api/v1/company-news?symbol=${ticker?.toUpperCase()}&token=${key}`,
}

const getRoute = async (route) => {
  const response = await fetch(route)
  const json = await response.json()
  return json
}

const getQuote = async (ticker) => getRoute(ROUTES.QUOTE(ticker, API_KEY))
const getProfile = async (ticker) => getRoute(ROUTES.PROFILE(ticker, API_KEY))
const getNews = async (ticker) => getRoute(ROUTES.NEWS(ticker, API_KEY))
const getPeers = function noop() {}

export { ROUTES, getQuote, getProfile, getNews, getPeers }

