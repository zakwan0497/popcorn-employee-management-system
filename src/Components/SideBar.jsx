import { Link } from 'react-router-dom'
import './SideBar.css'

const SideBar = () => {
  return (
    <aside className='sideBar'>
        <ul className='sidebar-links'>
            <li><Link href='/profile'>Profile</Link></li>
            <li><Link href='/contacts'>Contacts</Link></li>
            <li><Link href='/settings'>Settings</Link></li>
            <li><Link href='/check-out'>Check Out</Link></li>
        </ul>
    </aside>
  )
}

export default SideBar