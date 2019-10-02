import React from 'react'

function Item({ children }) {
  return <li style={{
    border: '1px solid',
    padding: '10px',
    margin: '5px',
  }}>{children}</li>
}

export default Item