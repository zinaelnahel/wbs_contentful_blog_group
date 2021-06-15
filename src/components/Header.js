import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'


const Header = () => {
	return (
		<header>
			<nav>
				<img src="https://i.pinimg.com/originals/7b/96/4a/7b964aafc67907ddc2f10ce26e271f99.jpg" alt="Logo" />
				<div className='nav-links'>
					<NavLink exact to='/'>
						Home
					</NavLink>
					<NavLink to='/about'>
						About
					</NavLink>
				</div>	
			</nav>
		</header>
	)
}

export default Header
