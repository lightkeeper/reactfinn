import React, { useEffect, useState } from 'react'
import { getQuote } from '../utils/connections'
import useDebounce from '../utils/use-debounce'


const Header = ({ title }) => {
  const [query, setQuery] = useState('gme')
  const debouncedQuery = useDebounce(query, 2000)
  const [quote, setQuote] = useState({
    "c": '-',
    "h": '-',
    "l": '-',
    "o": '-',
    "pc": '-',
    "t": '-'
  })
  
  const handleSearch = (event) => {
    const ticker = event.target.value
    setQuery(ticker)
  }

  useEffect(() => {
    const get = async () => {
      //const quote = await getQuote(debouncedQuery)
      setQuote(quote)
    }
    get()
  }, [debouncedQuery])


  return <div style={styles.container}>
    <label style={styles.searchLabel} htmlFor = 'ticker'>Search Ticker</label>
    <input type='text' id='ticker' name='ticker' value={query} onChange={handleSearch}></input>
    {/* loading indicator */}
    <span style={styles.item}>
      <span style={styles.label}>Price</span>
      <span style={styles.price}>{quote.c}</span>
    </span>
    <span style={styles.item}>
    <span style={styles.label}>High</span>
    <span style={styles.price}>{quote.h}</span>
    </span>
    <span style={styles.item}>
    <span style={styles.label}>Low</span>
    <span style={styles.price}>{quote.l}</span>
    </span>

  </div>
}

export default Header

const styles = {
  container: {
    color: '#333',
    padding: 10
  },
  searchLabel:{
    marginRight: 10
  },
  item: {
    margin: '1px 10px'
  },
  label: {
    marginRight: 5,
    fontWeight: 'bold'
  },
  price: {
    color: '#666'
  }
}