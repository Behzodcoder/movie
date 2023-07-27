import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/home/home'
import CardsInner from './components/cards_inner/cards_inner'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='card_inner/:id' element={<CardsInner/>}/>
      </Routes>
    </>
  )
}

export default App
