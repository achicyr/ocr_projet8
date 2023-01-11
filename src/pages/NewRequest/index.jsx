import { useContext, useParams, useState } from 'react'
import { AuthContext } from '../../utils/auth'
import { Link, Navigate, useNavigate } from "react-router-dom"
import styled from 'styled-components'

import Forms2 from '../../components/_/Forms2'


const FormStyled = styled.form`
`



export default function NewRequest({method = "POST"}) {

    const [goSignin, setGoSignin] = useState(false)
    , pathBack = "" /*"/"+useParams()?.back || "/"*/
    , navigate = useNavigate()
    , {token, datas, setToken, user, setUser} = useContext(AuthContext)
    let doError = false

    /*
    console.log(path)
    if(token)navigate('/')
    if(path=="logout"){
        setToken(false)
        navigate("/")
    }

    console.log(user);
    */
    
	const handleSubmit = e => { 
		alert('ok submitted')
	}
	return <>
		{/* {Contents} */}
		<form id="mainForm_left">
            {/* fieldset>label+input[id="" name=""] */}
            <fieldset>
                <label htmlFor=""></label>
                <input type="text" id="" name="" />
            </fieldset>
            <fieldset>
                <label htmlFor=""></label>
                <textarea name="" id=""></textarea>
            </fieldset>
            <button>Publish Request!</button>
		</form>
		<section id="mainSection_right">
			<div id="map_gmap"></div>
			<form onSubmit={handleSubmit}>
				<input placeholder="Entrer nom lieu, ou coordonnées de géolocalisation" />
				<button>🔍</button>
			</form>
		</section>
	</>
}
