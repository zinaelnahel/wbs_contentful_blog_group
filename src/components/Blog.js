import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./Blog.css";
import Loading from "./Loading";
import Error from "./Error";
import { client } from "../client";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
	const [scroll, setScroll] = useState(false)


  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    client
      .getEntry(id)

      .then((res) => {
        console.log(res.fields);
        setBlog(res.fields);
        setIsLoading(false);
      })

      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

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

  return (
    <div>
      {/* handling errors and loading */}
      {isLoading && <Loading />}
      {isError && <Error />}
      {console.log(blog)}
      {blog && (

        <div className="container-blogPost">
          <h2 className="blogPostTitle">{blog.title} </h2>
          <br />
          <img
            className="img-blog"
            src={blog.headimage.fields.file.url}
            alt="Article"
          />
          <br />
          <p className="paragraph">{blog.introduction}</p>
          <br />
          <img
            className="img-blog1"
            src={blog.middleimage.fields.file.url}
            alt="Article"
          />
          <br />
          <p className="paragraph">{blog.mainarticle}</p>
          <br />
          <img
            className="img-blog2"
            src={blog.bottomimage.fields.file.url}
            alt="Article"
          />
          <br />
          <p className="paragraph">{blog.conslusion}</p>
        </div>
      )}
      <button id='scroll-btn' onClick={scrollTop} style={{display: scroll ? 'flex' : 'none'}} >&#8593;</button>

    </div>
  );
};

export default Blog;
