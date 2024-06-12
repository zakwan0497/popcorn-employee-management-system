import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CheckIn from './Components/CheckIn'
import Home from './Components/Home'
import Calendar from './Components/Calendar'
import Deck from './Components/Deck'
import LeaveManagement from './Components/LeaveManagement'
import CheckOut from './Components/CheckOut'
import Profile from './Components/Profile'
import Contact from './Components/Contact'
import Settings from './Components/Settings'
import MainLayout from './Components/MainLayout'

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<CheckIn />} />
          <Route path='home' element={<Home />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='deck' element={<Deck />} />
          <Route path='leave-management' element={<LeaveManagement />} />
          <Route path='check-out' element={<CheckOut />} />
          <Route path='profile' element={<Profile />} />
          <Route path='contact' element={<Contact />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </Router>
     
  )
}

export default App
