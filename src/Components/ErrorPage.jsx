import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

	let err = useRouteError()
	console.log(err,"errooooooooooooooooor")
	
  return (
	<div className='error-page-cont'>
		<h3>404 not found</h3>
		<h1>Oops! Page not found</h1>
		<p>The page you are looking for does not exist, Click the below button to go to the home page</p>
		<button>Go to home page</button>
	  
	</div>
  )
}

export default ErrorPage
