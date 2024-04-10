import React from 'react'

interface Props {
  title: string
}

const PageTitle = ({ title }: Props) => {
  return (
    <h2 className="text-xl md:text-2xl lg:text-3xl">{title}</h2>
  )
}

export default PageTitle