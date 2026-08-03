import { useState ,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { set } from 'mongoose'

function App() {
  const [length, setLength] = useState(0)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)
  const passwordgen=useCallback(()=>{
    let pass="";
    let star="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed){
      star+="0123456789";
    }
    if(characterAllowed){
      star+="!@#$%^&*()_+";
    }
    for(let i=1;i<length;i++){
      let index=Math.floor(Math.random()*star.length);
      pass+=star[index];
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed])
  useEffect(()=>{
    passwordgen();
  },[length,numberAllowed,characterAllowed,passwordgen])
   const copyToClipboard=()=>{
    passwordRef.current.select();
    document.execCommand('copy');
   }

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4">
    <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8">

      <h1 className="text-4xl font-bold text-center text-white mb-8">
         Password Generator
      </h1>

      
      <div className="flex gap-3 mb-8">
        <input
          type="text"
          value={password}
          readOnly
          ref={passwordRef}
          className="flex-1 bg-slate-800 text-orange-400 text-lg px-4 py-3 rounded-xl outline-none border border-slate-600"
          placeholder="Password"
        />

        <button
          onClick={copyToClipboard}
          className="bg-orange-500 hover:bg-orange-600 cursor-pointer transition duration-300 px-6 rounded-xl font-semibold text-white"
        >
          Copy
        </button>
      </div>

      
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <label className="text-white font-medium">
            Password Length
          </label>

          <span className="text-orange-400 font-bold">
            {length}
          </span>
        </div>

        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full cursor-pointer accent-orange-500"
        />
      </div>

    
      <div className="grid sm:grid-cols-2 gap-5">

        <label className="flex items-center justify-between bg-slate-800 p-4 rounded-xl cursor-pointer">
          <span className="text-white font-medium">
            Include Numbers
          </span>

          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="w-5 h-5 accent-orange-500"
          />
        </label>

        <label className="flex items-center justify-between bg-slate-800 p-4 rounded-xl cursor-pointer">
          <span className="text-white font-medium">
            Special Characters
          </span>

          <input
            type="checkbox"
            checked={characterAllowed}
            onChange={() => setCharacterAllowed((prev) => !prev)}
            className="w-5 h-5 accent-orange-500"
          />
        </label>

      </div>

      

    </div>
  </div>
)
}

export default App
