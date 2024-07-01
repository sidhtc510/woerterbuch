import React from 'react'

export default function LoaderUI() {
  return (
    <div className="flex justify-center items-center h-screen z-50">
        <div role="status">
          <svg className="inline w-8 h-8 text-indigo-600 animate-spin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(50 50)">
                <circle cx="0" cy="0" r="40" stroke="currentColor" strokeWidth="10" fill="none"/>
                <circle cx="40" cy="0" r="10" fill="currentColor"/>
            </g>
          </svg>
            <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
