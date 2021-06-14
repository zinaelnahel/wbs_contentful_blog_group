import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import './Blog.css'
import Loading from './Loading'
import Error from './Error'
import { client } from '../client'

const Blog = () => {

	const { id } = useParams()
	const [blog, setBlog] = useState()
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		setIsError(false)

		client.getEntry(id)

		.then(res => {
			console.log(res.fields)
			setBlog(res.fields)
			setIsLoading(false)
		})

		.catch(err => {
			console.log(err)
			setIsLoading(false)
			setIsError(true)
		})
	}, [])


	return (
		<div>
			{/* handling errors and loading */}
			{isLoading && <Loading />}
			{isError && <Error />}
			{console.log(blog)}
			{/* {blog && (
				<div>
					<h1>{blog.title}</h1>
					<img className='img' src={blog.headimage.fields.file.url} alt="Article" />
					<p>{blog.mainarticle}</p>
				</div>
			)} */}



		</div>

	)
}

export default Blog
