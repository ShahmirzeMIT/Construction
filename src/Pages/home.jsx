
import { Fade } from "react-awesome-reveal";
import PageConatiner from "../Route/pageContainer";
import { Box, Grid } from "@mui/material";
import styles from "../index.css";

function Home(){
	return(
		<PageConatiner>
			<Box  sx={{ height: "91vh"}}>
				<Fade  damping={2} className="backInLeft" >
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
				</Fade>
			</Box>
			
		</PageConatiner>

	)

}

export default Home