import React from 'react'

const PortfolioCat = ({ params }: { params: { cat: string } }) => {
  return (
    <div>PortfolioCat for {params.cat}</div>
  )
}

export default PortfolioCat