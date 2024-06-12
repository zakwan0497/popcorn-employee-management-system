import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'
import SideBar from './SideBar'
import './MainLayout.css'

const MainLayout = () => {
  return (
    <div>
      <TopBar />
      <SideBar />
      <main className='content'>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout