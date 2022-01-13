import styled from 'styled-components/native'

const Spacer = styled.View`
  margin-vertical: ${({ marginVertical }) =>
    marginVertical ? marginVertical : 0}px;
  margin-horizontal: ${({ marginHorizontal }) =>
    marginHorizontal ? marginHorizontal : 0}px;
`

export default Spacer
