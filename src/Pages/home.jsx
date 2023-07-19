
import { Fade } from "react-awesome-reveal";
import PageConatiner from "../Route/pageContainer";
import { Box, Button, CardContent, Grid, Paper, Stack, Typography } from "@mui/material";
import styles from "../index.css";
import { useEffect, useReducer } from "react";
import axios from "axios";

function Home(){
	return(
		<PageConatiner>
			<Box  sx={{ height: "91vh"}}>
			{/* <Stack
						direction={{ xs: 'column',  sm: 'row' }}
						
						flexWrap={"wrap"}
						justifyContent={'center'}
						>
					{
						data.map((item,i)=>		
<							CardContent sx={{width:200,height:200,textAlign:"center",boxShadow:"1px 5px 5px black",margin:"12px"}} >
							<Typography variant="h5" component="div">
								{item.name}
							</Typography>
							<Typography color="text.secondary">
								Gender:{item.gender}
							</Typography>
							<Typography variant="body2" >
								Height:{item.height}
							<br />
								Mass: {item.mass}
							</Typography>
							<Button onClick={()=>{
								dispatch({type:"Remove Data",payload:i})
							}}>X</Button>
						</CardContent>
						)
					}
					</Stack> */}
				{/* <Fade  damping={2} className="backInLeft" >
							<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{textAlign:"center",paddingTop:"20px" , }} >
							<Grid item xs={12} sm={5}>
								<div>
									<img src="./assets/image/baku.jpg" alt="" />
								</div>
							</Grid>
							<Grid item xs={12} sm={5}>
								2
							</Grid>
						</Grid>
				</Fade> */}
			</Box>
			
		</PageConatiner>

	)

}

export default Home