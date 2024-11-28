import React from 'react'
import { FaCoffee, FaBeer } from 'react-icons/fa'

const IconExample = () => {
  return (
    <div style={{textAlign: 'center', marginTop: '20px'}}>
        <h2>Cheers! <FaBeer style={{color: 'orange', fontSize: '24px'}}/></h2>
        <h2>Need Coffee? <FaCoffee style={{ color: 'brown', fontSize: '24px' }} /></h2>
    </div>
  )
}

export default IconExample
