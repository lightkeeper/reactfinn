import { useState, useEffect } from 'react'

// only modifies hook's state if sufficient time (delay) has elapsed
// since the last changed value; used primarily for search boxes attached
// to network requests or expensive inline filtering
const useDebounce = (value, delay) => {
  const [state, setState] = useState(value)
  useEffect(() => {
    const fn = setTimeout(() => {
      setState(value)
    }, delay)

    return () => clearTimeout(fn)
  }, [value])

  return state
}

export default useDebounce
