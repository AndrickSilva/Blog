import './App.css'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import ViewMore from './components/ViewMore'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="Blog" element={<ViewMore />} />
        <Route exact path="Contact" element={<Contact />} />
        <Route exact path="Login" element={<Login />} />
        <Route exact path="Signup" element={<Signup />} />
        {/* <Route exact path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>

    </div>
  )
}

export default App
