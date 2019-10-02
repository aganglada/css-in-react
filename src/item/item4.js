import React from 'react'
import styled from '@emotion/styled'

const Li = styled.li`
  border: 1px solid;
  padding: 10px;
  margin: 5px;
`

function Item({ children }) {
  return <Li>{children}</Li>
}

export default Item