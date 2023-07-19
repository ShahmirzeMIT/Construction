import { useEffect, useReducer } from "react"
import PageConatiner from "../Route/pageContainer"
import axios from "axios"

const reducer=(state,action)=>{
	switch(action.type){
		case "GetData":
			return action.payload
		case "RemoveData":
			return state.filter((cat)=>cat.breed!==action.payload)
		case "FindData":
			return state.filter((cat)=>cat.country.startsWith(action.payload))	
		default :
			return state;			
	}
}


function GetCats(){
	const [state,dispatch]=useReducer(reducer,[])

	useEffect(()=>{
		axios.get("https://catfact.ninja/breeds").then(({data})=>{
			dispatch({type:"GetData",payload:data.data})
		})
	},[])
	useEffect(()=>{
		if(state.length==0){
			axios.get("https://catfact.ninja/breeds").then(({data})=>{
			dispatch({type:"GetData",payload:data.data})
		})
		}
		
	},[state])

	return(
		<PageConatiner>
			<div style={{textAlign:"center"}}>
				<input
				onChange={({target})=>{
					dispatch({type:"FindData",payload:target.value})
				}}
				type="text" style={{height:40,width:300,margin:"15px auto	",outline:"none"}} />
			</div>
			
			{
				state.map(({breed,country,origin,coat,pattern})=>{
					return(
						<div key={breed} 
						onClick={()=>{
							dispatch({type:"RemoveData",payload:breed})
						}}
						style={{margin:"0 auto",padding:10, width:300,boxShadow:"1px 5px 5px black",textAlign:"center"}}>
							<h1>{breed}</h1>
							<h2>{country}</h2>
							<p>{origin}</p>
							<p>{coat}</p>
							<p>{pattern}</p>
						</div>
						
					)
				}
				)
			}
		</PageConatiner>
	)
}

export default GetCats