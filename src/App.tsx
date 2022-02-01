import { Route, Routes } from 'react-router-dom'
import AuthMiddleware from './auth/AuthMiddlewareComponent'
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import MainFeed from './components/pages/MainFeed'

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
                path="/"
                element={
                    <AuthMiddleware>
                        <MainFeed />
                    </AuthMiddleware>
                }
            />
        </Routes>
    )
}

export default App
