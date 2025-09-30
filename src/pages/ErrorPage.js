import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-black">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Page Not Found</p>
      <p className="mb-6">The page you are looking for does not exist.</p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-orange text-white rounded hover:bg-rock transition"
      >
        Go to Home
      </Link>
    </div>
  )
}

export default ErrorPage