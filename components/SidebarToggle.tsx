import React from 'react'

const SidebarToggle = () => {
  return (
    <div className="sticky top-0 inset-x-0 z-20 border-y px-4 sm:px-6 md:px-8 xl:hidden bg-gray-800 border-gray-700">
      <div className="w-full flex items-center justify-between py-4">
        <button type="button" className="text-gray-500 hover" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
          <span className="sr-only">Toggle Navigation</span>
          <svg className="w-5 h-5" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SidebarToggle