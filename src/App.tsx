import { Route, Routes } from 'react-router-dom'
import AuthMiddleware from './auth/AuthMiddlewareComponent'
import PostInfo from './components/organisms/Post/PostInfo'
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import MainFeed from './components/pages/MainFeed'
import AppWrapper from './components/templates/AppWrapper'

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
                path="/post/:id"
                element={
                    <AppWrapper>
                        <PostInfo />
                    </AppWrapper>
                }
            />

            <Route
                path="/"
                element={
                    <AuthMiddleware>
                        <AppWrapper>
                            <MainFeed />
                        </AppWrapper>
                    </AuthMiddleware>
                }
            />
        </Routes>
    )
}

export default App
