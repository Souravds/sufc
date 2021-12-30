import { Link } from "react-router-dom"
import styled from "styled-components"

export const Header = () => {

  return(
  <Container>
    <Logo>
      <LogoImage src={process.env.PUBLIC_URL + '/sufc.png'}/>
      <LogoTitle>SUFC</LogoTitle> 
    </Logo>

    <Menu>
      <MenuItem>
        <Link to="/">Home</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/store">Store</Link> 
      </MenuItem>
      <MenuItem>
        <Link to="/contact">Contact Us</Link>
      </MenuItem>
      {/* <MenuItem>
        <Link>{ user ? "Logout" : "Login" }</Link>
      </MenuItem> */}
    </Menu>
  </Container>
  )
  }

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  padding: 5px 0;
  position: sticky;
  top: 0;
  background-color: rgb(30,32,33);
`
const Logo = styled.h2`
  display: flex;
  align-items: center;
  font-weight: 800;
  margin-left: 35px;
  flex: 1;
`

const Menu = styled.div`
  font-weight: 800;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
`

const MenuItem =styled.div`
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover{
    transform: scale(1.2);
  }
`

const LogoImage = styled.img`
  object-fit: cover;
  width: 40px;
`

const LogoTitle = styled.div`
  font-weight: 800;
`