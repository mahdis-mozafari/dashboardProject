import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Project from './pages/Projects'
import Header from './component/Header'

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/projects' element={<Project/>}/>

    </Routes>
    </BrowserRouter>
 
  )
}

export default App
