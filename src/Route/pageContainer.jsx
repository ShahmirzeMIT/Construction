import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import styles from "../index.css";

function PageConatiner({children}){
	return(
		<>
			<header>
				<Box sx={{ flexGrow: 1 }}>
					<AppBar position="static">
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
						<Button >
						<Link href="/" underline="none" className="c-white">Home</Link>
						</Button>
						<Button >
						<Link href="/axtaris" underline="none" className="c-white">Axtaris</Link>
						</Button>
						<Button >
						<Link href="/haqqimizda" underline="none" className="c-white">Haqqimizda</Link>
						</Button>
						<Button color="inherit">
						<Link href="/elaqe" underline="none" className="c-white">Elaqe</Link></Button>
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