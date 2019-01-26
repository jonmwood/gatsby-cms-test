import React from 'react'
import { Link } from 'gatsby'
import logo from '../../static/img/rand-logo.png'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa';
import { media } from '../utilities'

const StyledNavbar = styled.nav`
  box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.05);
  position: sticky;
  top: 1px;
  width: 100vw;
  z-index: 1000;
  background-color: #fdfdfd;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 95%;
  margin: 0 auto;

  ${media.desktop`
    max-width: 90%;
  `}

`
const NavLogo = styled.div`
  .image {
    margin: 1rem;
  }
`

const NavMenu = styled.div`
  display: none;

  ${media.desktop`
    display: grid;
    grid-template-columns: 4fr 2fr;
    justify-items: center;
    align-items: center;
    flex: flex-end;    
  `}
  
  

  
`

const NavLinks = styled.div`
`

const NavLink = styled(Link)`
  color: goldenrod;
  margin: 0 1.25rem;
`;


const SearchFieldContainer = styled.div`
  position: relative;
`

const SearchField = styled.input`
  font-size: 18px;
  border-radius: 5px;
  height: 2rem;
  font-family: 'Nunito Sans';
  position: relative;
  padding-left: 2rem;
  border-style: none;
  border: 1px solid #ddd;
`

const Navbar = () => (
  <StyledNavbar className="">
    <Container>
      <NavLogo className="">
        <Link to="/" className="">
          <figure className="image">
            <img src={logo} alt="Rand Cho" style={{ width: '120px' }} />
          </figure>
        </Link>
      </NavLogo>
      <NavMenu>
        <NavLinks>
          <NavLink className="" to="/sermons">
            Sermons
          </NavLink>
          <NavLink className="" to="/bible-studies">
            Bible Studies
          </NavLink>
          <NavLink className="" to="/q&a">
            Pastoral Q&A
          </NavLink>
          <NavLink className="" to="/contact/examples">
            Tools
          </NavLink>
        </NavLinks>
        <SearchFieldContainer>
          <FaSearch style={{ position: 'absolute', top: '0.6rem', left: '0.6rem', zIndex: '5', color: '#bbb' }} />
          <SearchField type="text" placeholder="Search" />
        </SearchFieldContainer>
      </NavMenu>
    </Container>
  </StyledNavbar>
)
export default Navbar
