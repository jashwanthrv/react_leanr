import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
    <div
  className="w-full h-screen flex justify-center items-center duration-200"
  style={{ backgroundColor: color }}
>
  <div className="flex gap-4 px-4 py-2 bg-white rounded-lg shadow-lg">
    <button
      className="color-button w-20 h-14 bg-red-500 text-black rounded-xl flex items-center justify-center"
      onClick={() => setColor("red")}
    >
      Red
    </button>

    <button
      className="color-button w-20 h-14 bg-green-500 text-black rounded-xl flex items-center justify-center"
      onClick={() => setColor("green")}
    >
      Green
    </button>

    <button
      className="color-button w-20 h-14 bg-blue-500 text-black rounded-xl flex items-center justify-center"
      onClick={() => setColor("blue")}
    >
      Blue
    </button>
  </div>
</div>
  
    </>
  )
}

export default App
