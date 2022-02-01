import { Route, Routes } from 'react-router-dom'
import Login from './components/pages/Login'
import MainFeed from './components/pages/MainFeed'

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<MainFeed />} />
        </Routes>
    )
}

export default App
