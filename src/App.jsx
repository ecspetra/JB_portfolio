import React from 'react'
import './App.scss'
import cat from '../assets/img/dgava.png'

const App = () => {
  return (
    <div className='App'>
      <h1>Minimal React App</h1>
      <img src={cat} alt='cat' />
      <h4>Includes:</h4>
      <ul>
        <li>sass-loader</li>
        <li>file-loader</li>
      </ul>
      <h4>Enjoy!</h4>
      <p>
        Please give me feedback <a href="https://t.me/darkgraycat">Telegram</a>
      </p>
      <p>
        If you have a problem: <a href="https://github.com/darkgraycat/jarb/issues">Issues</a>
      </p>
    </div>
  )
}

export default App