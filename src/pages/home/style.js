import styled from 'styled-components'

const StyledMain = styled.div`
  height: ${window.screen.height}px;
  width: 100%;
`

const StyledNav = styled(StyledMain)`
  height: 100%;
  width: 10%;
  background: rgb(92,135,236);
  float: left;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`

const StyledSection = styled(StyledMain)`
  height: 100%;
  width: 90%;
  background: rgb(245,246,250);
  float: left;
  border-radius: 20px;
  position: relative;
  left: -2%;
`
const StyledPlayer = styled(StyledSection)`
  height: 100%;
  width: 80%;
  border: 1px solid red;
`

export { StyledMain, StyledNav, StyledSection, StyledPlayer }