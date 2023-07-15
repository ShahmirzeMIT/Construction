import { Alert, Link, Stack } from "@mui/material"


function NotFound(){
	return(
		<Stack sx={{ width: '100%' }} spacing={2}>
 			 <Alert severity="error">Bu Sehife Tapilmadi Ana Sehifeye Qayidin -->
			   <Link href="/" underline="none" >Geri Qayit</Link></Alert>
  		</Stack>
	)
}
export default NotFound