import React, { useEffect, useState } from 'react'
import './Main.css'
import Error from './Error'
import Loading from './Loading'
import { Link } from 'react-router-dom'
import { client } from '../client'

const Main = () => {

	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [post, setPost] = useState(null)
	const [scroll, setScroll] = useState(false)


	//get data from contentful
	useEffect(() => {
		setIsLoading(true)
	 	setIsError(false)

		client.getEntries()

			.then(res => {
				console.log(res.items)
				setPost(res.items)
				setIsLoading(false)
			})
			.catch((err) => {
				console.log(err)
				setIsLoading(false)
				setIsError(true)
			})
	}, [])


	//handling scroll to top 
	const testScrollTop = () => {
		if(!scroll && window.pageYOffset > 400){
			setScroll(true)
		} else if (scroll && window.pageYOffset <= 400){
			setScroll(false)
		}
	}

	const scrollTop = () => {
		window.scrollTo({top: 0, behavior: 'smooth'})
	}
	window.addEventListener('scroll', testScrollTop)

	

	//handling error and loading
	if (isLoading) {
		return <Loading />
	} else if (isError) {
		return <Error />
	} else {
		return (
			<div className='card-wrapper'>
				{/* {post && post.map((short) => (
					<div key={short.sys.id}>
						<p>{short.fields.title}</p>
					</div>
				))} */}
				{/* {post && post.map((article) => (
					<Blog article={article} key={article.sys.id} />
				))} */}
				{post && post.map((article, index) => {
					return (
						<div key={index} className='card'>
							<h3 className='card-title'>{article.fields.title}</h3>
							<img  src={article.fields.featureImg.fields.file.url} alt="Preview" className='card-img'/>
							<Link key={article.sys.id} to={`/blog/${article.sys.id}`}>
							<button className='card-btn'>show more</button>
							</Link>
						</div>
					)
				})}
				{/* {post && post.map((article) => {
					return (
						<div className='article' key={article.sys.id}>
							<h2 className='article-title'>{article.fields.title}</h2>
							<img id='article-img' src={article.fields.featureImg.fields.file.url} alt="Featured Image" />
						</div>
					)
				})} */}
				<button onClick={scrollTop} style={{height: 40, width:20, display: scroll ? 'flex' : 'none'}} >scroll</button>
			</div>	
		)
	}
}

export default Main
