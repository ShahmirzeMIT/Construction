import { AppBar, Box, Button,IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar, Typography } from "@mui/material"
import styles from "../index.css";
import { Fragment, useState } from "react";
function PageConatiner({children}){
	const menu=["Home","Axtaris","Haqqimizda","Elaqe"];
	const [state, setState] =useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	   });
	   const toggleDrawer = (anchor, open) => (event) => {
		if (
		  event &&
		  event.type === 'keydown' &&
		  (event.key === 'Tab' || event.key === 'Shift')
		) {
		  return;
		}
	 
		setState({ ...state, [anchor]: open });
	   };
	const list = (anchor) => (
		<Box
		  sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
		  role="presentation"
		  onClick={toggleDrawer(anchor, false)}
		  onKeyDown={toggleDrawer(anchor, false)}
		>
		  <List>
		    {menu.map((text, index) => (
			 <ListItem key={text} disablePadding>
			   <ListItemButton>
				<ListItemIcon>
				#
				</ListItemIcon>
				<ListItemText primary={text} />
			   </ListItemButton>
			 </ListItem>
		    ))}
		  </List>
		 
		</Box>
	   );
	return(
		<>
			<header >
				<Box sx={{ flexGrow: 1 }}>
					<AppBar position="static" className="brown" >
					<Toolbar>
						<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						>
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						News
						</Typography>
						{
							menu.map((item,i)=>{
								return(
									i==0 ?
								<Button  key={i}>
									<Link href="/" underline="none" className="c-white">{item}</Link>
								</Button>	
								:
								<Button  key={i}>
									<Link href={"/"+item} underline="none" className="c-white">{item}</Link>
								</Button>	
								)
								
							})
						}
						<div>
					{['right'].map((anchor) => (
					<Fragment key={anchor}>
						<div onClick={toggleDrawer(anchor, true)}>
							{/* <AiOutlineMenu/> */} sss
							</div>
						<SwipeableDrawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
						onOpen={toggleDrawer(anchor, true)}
						>
						{list(anchor)}
						</SwipeableDrawer>
					</Fragment>
					))}
				</div>
					</Toolbar>
					
					</AppBar>
					
				</Box>
				
			</header>
			<main>{children}</main>
			<footer></footer>
		</>
		
	)

}
export default PageConatiner