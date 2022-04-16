import { useContext } from 'react'
import GithubContext from '../context/githubContext'
import '../card.css'

const Card = () => {
  const { data } = useContext(GithubContext)

  return (
    <div className='grid grid-rows-3 grid-flow-col gap-4 w-96 auto-cols-max m-3'>
      {data.map((item) => (
        <div
          key={item.id}
          className='card w-96 bg-primary text-primary-content'>
          <div className='card-body'>
            <h2 className='card-title'>{item.name}</h2>
            <p>{item.description}</p>
            <h1>Owner Name : {item.owner.login}</h1>
            <h1>Star Count : {item.stargazers_count}</h1>
            <h1>Forks Count : {item.forks}</h1>
            <h1>Language : {item.language}</h1>
            <div className='card-actions justify-end'>
              <button className='btn'>
                <a href={item.html_url} target='_blank' alt='repo'>
                  REPO
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
