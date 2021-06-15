import React from 'react'
import './About.css'


const About = () => {
	return (
		<div className='aboutpage'>
			<h1>About</h1>
			<div className='team'>
			{/* Minja*/}  
			<div className='staff'>
			<h2>Minja</h2>
				<image></image>
				<p>Position: </p>
			</div>
			{/* Zina*/}
			<div className='staff'>
			<h2>Zina</h2>
				<image></image>
				<p>Position: Content</p>
			</div>
			{/* Jonas*/}
			<div className='staff'>
				<h2>Jonas</h2>
				<image></image>
				<p>Position: Content and Coffeemake</p>
			</div>
			</div>
		</div>
	)
}

export default About
