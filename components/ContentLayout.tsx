import React, { ReactNode } from 'react'

type ContentLayoutProps = {
  children: ReactNode
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-auto text-white pt-10 px-4 sm:px-6 flex">
      { children }
    </div>
  )
}

export default ContentLayout