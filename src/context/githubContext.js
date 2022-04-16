import { useState, createContext } from 'react'

const GithubContext = createContext()

export const GithubContextProvider = ({ children }) => {
  const fetchData = () => {
    setData([])
    setLoading(true)
    fetch(
      `https://api.github.com/search/repositories?q=language:${search}&sort=${sortBy}&order=${orderBy}&page=${page}&per_page=6`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.items)
      })
      .then(() => {
        setLoading(false)
      })
  }

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('javascript')
  const [sortBy, setSortBy] = useState('star')
  const [orderBy, setOrderBy] = useState('asc')

  const nextPage = () => {
    setPage((prevState) => prevState + 1)
    fetchData()
  }

  const previousPage = () => {
    setPage((prevState) => prevState - 1)
    fetchData()
  }

  const SearchLang = (e) => {
    setSearch(e)
  }

  const SetSort = (e) => {
    setSortBy(e)
  }

  const SetOrder = (e) => {
    setOrderBy(e)
  }

  return (
    <GithubContext.Provider
      value={{
        fetchData,
        loading,
        page,
        search,
        nextPage,
        previousPage,
        SearchLang,
        data,
        sortBy,
        SetSort,
        SetOrder,
        orderBy,
      }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
