import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cards from './pages/Cards'
import Poem from './pages/Poem'

function App() {
    return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/poem" element={<Poem />} />
			<Route path="/cards" element={<Cards />} />
		</Routes>
    )
}

export default App
