import './App.css'
import Home from './pages/home' 
import Formulaire from './pages/Formulaire'
import { HashRouter,Route,Routes } from 'react-router-dom'



export default function App() {
  return (
    <>
    <HashRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Formulaire" element={<Formulaire />}/>
    </Routes>
    </HashRouter>
    </>
  )
}

