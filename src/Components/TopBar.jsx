import { Link } from 'react-router-dom'
import './TopBar.css'

const TopBar = () => {
  return (
    <header className='topBar'>
        <nav className='top-nav'>
            <ul className='nav-links'>
                <li><Link href='/'>Company Logo</Link></li>
                <li><Link href='/'>Date / Time</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default TopBar