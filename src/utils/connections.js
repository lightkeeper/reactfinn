const API_KEY = 'c0cqqs748v6rlbal10hg'

const ROUTES = {
  QUOTE: (ticker, key) => `https://finnhub.io/api/v1/quote?symbol=${ticker?.toUpperCase()}&token=${key}`
}

const getQuote = async (ticker) => {
  // typical response {"c":135.615,"h":136.31,"l":134.96,"o":135.73,"pc":134.14,"t":1612224000}
  const response = await fetch(ROUTES.QUOTE(ticker, API_KEY))
  const json = await response.json()
  return json
}

export { ROUTES, getQuote }

