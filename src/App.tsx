import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Projects from './Pages/Projectspage/projects'
import Home from './Pages/HomePage/home'
import Contact from './Pages/ContacrPage/contact'
import { Route, Routes } from 'react-router-dom'
import type { RootState } from './State/store'
import { useSelector } from 'react-redux'
import Admin from './Pages/admin/admin'


function App() {

  const theme = useSelector((state:RootState)=>state.theme)
  return (
    <section className={`scroll-smooth ${theme.Light ? theme.light : theme.dark} min-h-dvh relative`}>
      <Header />
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/projects' element = {<Projects />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/admin' element = {<Admin />} />
      </Routes>
      <Footer />
    </section>
  )

}

export default App
