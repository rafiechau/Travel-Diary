import { Route, Routes } from 'react-router-dom'
import './styles/styles.module.scss'
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'
import ProfilePage from './pages/ProfilePage'
import AddPostPage from './pages/AddPostPage'
import DetailPage from './pages/DetailPage'
import BookmarkPage from './pages/BookmarkPage'
import HomeNoLoginPage from './pages/HomeNoLogin'

function App() {

  return (
    <>
     <Routes>
      <Route  path='/' element={<HomeNoLoginPage />}/>
      <Route  path='/home' element={<HomePage />}/>
      <Route  path='/login' element={<LoginPage />}/>
      <Route  path='/register' element={<RegisterPage />}/>
      <Route  path='/profile' element={<ProfilePage />}/>
      <Route  path='/addpost' element={<AddPostPage />}/>
      <Route  path='/detail/:id' element={<DetailPage />}/>
      <Route  path='/bookmarks' element={<BookmarkPage />}/>
     </Routes>
    </>
  )
}

export default App
