import { useContext, useParams, useState } from 'react'
import axios from "axios"
import { AuthContext } from '../../utils/auth'
import { Link, Navigate, useNavigate } from "react-router-dom"
import styled from 'styled-components'


const FormStyled = styled.form`
    display: grid;
    grid-template: "titre1 titre2" "input1 input2" "  btn btn  ";
    padding: 2em;
    gap: 1em;
    >input,>button{padding:.5em;}
    >label{margin-bottom: -.75em;}
    >label:nth-of-type(1){grid-area:titre1}
    >label:nth-of-type(2){grid-area:titre2}
    >input:nth-of-type(1){grid-area:input1}
    >input:nth-of-type(2){grid-area:input2}
    // >button{grid-area:btn}
`



export default function LogSignIn({path}) {

    const [goSignin, setGoSignin] = useState(false)
    , pathBack = "" /*"/"+useParams()?.back || "/"*/
    , navigate = useNavigate()
    , {token, setToken, user, setUser} = useContext(AuthContext)
    let doError = false

    console.log(path)
    if(token)navigate('/')
    if(path=="logout"){
        setToken(false)
        navigate("/")
    }
    
    const handleSubmit = (e) => { 
        e.preventDefault()

        const tchat = {}
        Array.from(new FormData(document.forms[0])).forEach(item=>{
            tchat[item[0]]=item[1]
        })

        axios.post("http://localhost:3000/api/v1/tchats", {
            tchat
        })
        .then(res=>{
            console.log(res)
            // alert('response.......')
        })
        .catch(error=>{
            console.log("erreur fetch infructueux.. '(")
            // alert('error')
        })

        /*
        fetch("http://localhost:8080/users", {
            method: "POST"
            , headers:{"Content-type":"application/json"}
            , body: JSON.stringify(a)
        })
            .then(res=>{
                // if(!res.ok && path == "login")doError=true
                // if(res.ok && path == "signup"){
                //     setGoSignin(false)
                //     // navigate("/")
                // }
                return res.json()
            })
            .then(res=>{
                console.log(res)
                // if(doError){setGoSignin(res.message)}
                // if(res.token){
                //     setToken(res.token)
                //     setUser({
                //         id: path=="login"?res.userId:res._doc._id
                //         , role: path=="login"?res.role:res._doc.role
                //         , liked: path == "login"?res.liked:res._doc.liked
                //     })
                //     console.log(user);
                //     navigate('/')
                //     // navigate('/menu/1')

                // }
            })
            .catch(error=>{
                console.log("erreur fetch infructueux.. '(")
            })
        */
    }
    console.log(user);
    return <>
        <FormStyled id="login_form" onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="volontier_id">First name</label>
                <input type="number" id="volontier_id" name="volontier_id" required />
            </fieldset>
            <fieldset>
                <label htmlFor="requester_id">First name</label>
                <input type="number" id="requester_id" name="requester_id" required />
            </fieldset>
            <fieldset>
                <label htmlFor="contents">First name</label>
                <input id="contents" name="contents" required />
            </fieldset>
            {/* <fieldset>
                <label htmlFor="lastname">Last name</label>
                <input id="lastname" name="lastname" required />
            </fieldset>
            <fieldset>
                <label htmlFor="phone_number">Phone Number</label>
                <input type="number" id="phone_number" name="phone_number" required />
            </fieldset>
            <fieldset>
                <label htmlFor="img_profil">Image de profil</label>
                <input type="file" id="img_profil" name="img_profil" />
            </fieldset>
            <fieldset>
                <label htmlFor="username">Username</label>
                <input id="username" name="username" required />
            </fieldset>
            <fieldset>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Mot de passe</label>
                <input type="password" id="password" name="password" required />
            </fieldset>
            <fieldset>
                <label htmlFor="password_confirmation">Confirmer mot de passe</label>
                <input type="password" id="password_confirmation" name="password_confirmation" required />
            </fieldset> */}
            <button>{path}</button>
            
            { path == "login" && goSignin && <><p>{goSignin}</p><Link to={'/signup'+pathBack}>S'enregistrer ?</Link></>}
        </FormStyled>
        <aside id="login_aside">
            <img src="/img/login_aside_1" alt="" />
        </aside>
    </>
}
