'use client'

import React from 'react'

export default function Preloader() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        fill="#e91e63"
        viewBox="0 0 207 170"
        className="animate-bounce animate-infinite animate-ease-in"
      >
        <path d="M206.6 0v.6c0 17-7.4 33.5-27 33.5h-63c-3 0-4.3 4-1.8 5.7a72.4 72.4 0 0 1 25.5 31 70.1 70.1 0 0 1 5.4 27.5 70.2 70.2 0 0 1-45 66.1A73.4 73.4 0 0 1 21.4 149 69 69 0 0 1 0 98.3a70 70 0 0 1 45-66 72.2 72.2 0 0 1 19.3-5v26.3c0 3.1-1.9 6-4.8 7.3a33.2 33.2 0 0 0-12.2 8.8 41.6 41.6 0 0 0-10 28.6c0 11.7 3.3 21.3 10 28.8a32.7 32.7 0 0 0 25.6 11.3c10.3 0 18.8-3.8 25.6-11.4a41.5 41.5 0 0 0 10-28.7c0-11.4-3.4-20.9-10.2-28.5a34 34 0 0 0-12-8.8 7.8 7.8 0 0 1-4.7-7.2V21.5C81.6 8.9 86.4 0 102.7 0h103.9Z" />
      </svg>

      <span className="!text-secondary text-lg font-semibold">Vteřinku vydržte...</span>
    </div>
  )
}
