import { useContext } from 'react'
import Card from './component/Card'
import GithubContext from './context/githubContext'
import Header from './component/Header'

const App = () => {
  const {
    SearchLang,
    fetchData,
    loading,
    SetSort,
    data,
    SetOrder,
    search,
    nextPage,
    previousPage,
  } = useContext(GithubContext)

  return (
    <>
    <Header/>
      <div className='form-control m-2  '>
        <div className='input-group input-accent '>
          <input
            type='text'
            placeholder='Search…'
            className='input input-bordered w-48'
            onChange={(e) => {
              SearchLang(e.target.value)
            }}
            value={search}
          />
          <button
            className='btn btn-secondary btn-square w-24  '
            disabled={search.length === 0}
            onClick={fetchData}>
            Search
          </button>
        </div>
      </div>

      {data && (
        <select
          defaultValue={'star'}
          className='select select-secondary w-full max-w-xs mx-3'
          onChange={(e) => {
            SetSort(e.target.value)
          }}>
          <option value='name'>Name</option>
          <option value='star'>Star</option>
        </select>
      )}
      {data && (
        <select
          defaultValue={'asc'}
          className='select select-secondary w-full max-w-xs'
          onChange={(e) => {
            SetOrder(e.target.value)
          }}>
          <option value='asc'>Ascending</option>
          <option value='desc'>Descending</option>
        </select>
      )}
      <button className='btn mx-3' onClick={fetchData}>
        Apply
      </button>
      {!loading && data && <Card />}

      {!loading && data && (
        <button className='btn' onClick={nextPage}>
          Next Page
        </button>
      )}

      {!loading && data && (
        <button className='btn' onClick={nextPage}>
          Previous Page
        </button>
      )}
    </>
  )
}

export default App
