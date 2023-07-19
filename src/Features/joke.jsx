import { useEffect, useReducer, useState } from "react"
import PageConatiner from "../Route/pageContainer"
import axios from "axios"
import {GrUpdate} from 'react-icons/gr'
import {BiShowAlt} from "react-icons/bi"
import { Button } from "@mui/material"
const isVisible=false 
const reducer=(state,action)=>{
	switch(action.type){
		case "GetJoke":
			return action.payload
		case "Visible":
			return {...state,isVisible:true}
		default :
			return state;			
	}
}

function Joke(){
	const [state,dispatch]=useReducer(reducer,[])
	useEffect(()=>{
		axios.get("https://official-joke-api.appspot.com/random_joke").then(({data})=>{
			dispatch({type:"GetJoke",payload:data})
		})
	},[])
	const Update=()=>{
		axios.get("https://official-joke-api.appspot.com/random_joke").then(({data})=>{
			dispatch({type:"GetJoke",payload:data})
		}) 
	}
	return(
		<PageConatiner>
			{ 
					<div style={{textAlign:"center",width:500,height:300,boxShadow:"1px 6px 6px black",margin:"10px auto"}}>
						<Button sx={{float:"right"}} onClick={()=>{Update()}} ><GrUpdate/></Button>
						<h1 >{state.setup}</h1>
						<Button sx={{float:"right"}} onClick={()=>{dispatch({type:"Visible"})}}><BiShowAlt/></Button>
						{state.isVisible ? <h1 >{state.punchline}</h1>:"" }
						
					</div>
			}		
		</PageConatiner>
	)

}

export default Joke