import React, { useEffect, useState } from 'react'
import './Main.css'
import Error from './Error'
import Loading from './Loading'
import { Link, useHistory } from 'react-router-dom'
import { client } from '../client'

const Main = () => {

	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [post, setPost] = useState(null)
	const [scroll, setScroll] = useState(false)
	const history = useHistory()


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
			<main>
			<div className='card-wrapper'>
			<div className='card-header'>
				<img className='header-img' src="https://www.pixartprinting.co.uk/blog/wp-content/uploads/2020/02/digital_nomad.png" alt="HEader Image" />
			</div>
			
				{post && post.map((article) => {
					return (
						<div key={article.sys.id} className='card'>	
							<img src={article.fields.middleimage.fields.file.url} />
						<div className='div-title'>
							<p className='card-title'><strong>{article.fields.title}</strong></p>
							<p className='card-intro'>{article.fields.introduction.slice(0, 200)} ...</p>
							<button onClick={() => history.push(`/blog/${article.sys.id}`)}>
							Show More ...
							</button>
						</div>
						
					</div>
					)	
				})}
				{/* {post && post.map((short) => (
					<div key={short.sys.id}>
						<p>{short.fields.title}</p>
					</div>
				))} */}
				{/* {post && post.map((article) => (
					<Blog article={article} key={article.sys.id} />
				))} */}
				{/* {post && post.map((article, index) => {
					return (
						<div key={index} className='card'>
							<h3 className='card-title'>{article.fields.title}</h3>
							<img  src={article.fields.featureImg.fields.file.url} alt="Preview" className='card-img'/>
							<Link key={article.sys.id} to={`/blog/${article.sys.id}`}>
							<button className='card-btn'>show more</button>
							</Link>
						</div>
					)
				})} */}
				{/* {post && post.map((article) => {
					return (
						<div className='article' key={article.sys.id}>
							<h2 className='article-title'>{article.fields.title}</h2>
							<img id='article-img' src={article.fields.featureImg.fields.file.url} alt="Featured Image" />
						</div>
					)
				})} */}
				<button id='scroll-btn' onClick={scrollTop} style={{display: scroll ? 'flex' : 'none'}} >&#8593;</button>
			</div>	
		</main>
		)
	}
}

export default Main
