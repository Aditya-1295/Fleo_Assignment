import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { GithubContextProvider } from './context/githubContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <GithubContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GithubContextProvider>
)
