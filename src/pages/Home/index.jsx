
import {useEffect, useState, useContext} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { AuthContext } from '../../utils/auth'
import PagesComponents from '../../components/pagesComponents.js'
import Gmap from '../../components/_/Gmap.jsx'
import MapLeaflet from '../../components/_/MapLeaflet.jsx'
import UnfullfilledRequests from '../../components/_/UnfullfilledRequests.jsx'
// import Gmapp from '../../components/_/Gmapp.jsx'

function Home() {
	/*
	let [Contents, setContents] = useState([])
	, {token, datas, user, setUser, setDatas} = useContext(AuthContext)
    , navigate = useNavigate()
	, generateOutput = (contents) => {
		let { template, models } = contents || {}
		, contents_tmp = []
		console.log(contents)

		if(models){
			contents_tmp.push(
				models.map((model,i) => {
					let Ok = PagesComponents[model] 
					console.log(Ok);
					
					return <Ok key={model+"_"+i} datas={datas.modelsDatas[model]} />
				})
			)
			
		}
		// contents_tmp.push(<Template data={template} bem="template" />)
		// setContents(contents_tmp = <span>okok span</span>)
		setContents(contents_tmp)
	}
	
	
    useEffect(() => {
		console.log(token)
        console.log("1,2, teste, test, 1,2, test")
	    // if(token==false)navigate('/login')
		// else generateOutput(datas.home)
		generateOutput(datas.home)
	}, [datas, token])
	*/


	const handleSubmit = e => { 
		alert('ok submitted')
	}
	return <>
		{/* {Contents} */}
		<section id="mainSection_left">
			<UnfullfilledRequests />
			<hr />
			<article id="mapMark_details">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore recusandae voluptas fugit necessitatibus. Fugiat optio omnis corporis est, rem deserunt maiores distinctio blanditiis nihil. Sapiente amet numquam autem deleniti ipsam.
				Accusamus quidem nulla ipsa itaque eos libero voluptates, corporis soluta id aperiam consequuntur illum quae reprehenderit ducimus rerum totam, provident adipisci dolorem quas, beatae distinctio? Possimus asperiores recusandae excepturi odit?
				Ipsa accusamus asperiores quibusdam, laudantium adipisci, atque qui totam repudiandae eos, debitis soluta nam minima. Ex cumque sint consequuntur, labore cupiditate sunt quam facilis, provident quasi quis culpa exercitationem iusto.
			</article>
		</section>
		<section id="mainSection_right">
			<Gmap />
			{/* <MapLeaflet /> */}
			{/* <form onSubmit={handleSubmit}>
				<input placeholder="Entrer nom lieu, ou coordonnées de géolocalisation" />
				<button>🔍</button>
			</form> */}
		</section>
	</>
}
export default Home


