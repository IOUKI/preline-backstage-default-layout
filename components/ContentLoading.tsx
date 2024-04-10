import React from 'react'

const ContentLoading = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 z-50 flex justify-center items-center">
      <span className="animate-spin inline-block w-16 h-16 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </span>
    </div>
  )
}

export default ContentLoading