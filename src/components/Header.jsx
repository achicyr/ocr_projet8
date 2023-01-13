import { useContext, useState } from 'react'
import { AuthContext } from '../utils/auth'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SectionStyled = styled.section`
`
const SectionLogoStyled = styled.section`
    display: flex;
    align-items:center;
    >img{height:5em;}
    >hgroup{
        text-align:center;
        >h1{font-size:2.5em;margin:0;}
        >h2{font-size:1.5em;margin:.5em 0 0;}
    }
`
const menuStyled = styled.menu`
    display:flex;
`




export default function Header() {
    let { setToken, token, user} = useContext(AuthContext)
	let [Content, setContent] = useState()
	
    // let paramURL = useParams().paramURL || 1
	// , [hook,setHook] = useState()
	// , { setToken, token } = useContext(AuthContext)
    // useEffect(() => {
	// }, [])
	
	return <header id="header">
        <SectionLogoStyled id="header__logo">
            <Link to="/">
                <img src="/img/logo/logo_icon.png" alt="" />
                {/* <img src={process.env.PUBLIC_URL +"/logo912.png"} alt="" /> */}
                <span>In Love We Trust</span>
                
            </Link>
        </SectionLogoStyled>
        <hgroup className="header__mainMenu">
            <h1>Spread Charity Around You</h1>
            <h2>Love Who Needs You</h2>
        </hgroup>

        <SectionStyled id="header__logins">
            {!token && <>
                <Link to="/login" path="login" title="Login">👤</Link>
                <Link to="/signup" path="signup" title="Signup">➕</Link>
            </>}
            {token && user.role=="2" &&
                <Link to="/menu/new">+</Link>
            }
            {token &&
                <Link to="/logout" path="logout">Logout</Link>
            }
        </SectionStyled>
	</header>
}
