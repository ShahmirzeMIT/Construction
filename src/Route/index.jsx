import { Route, Routes } from "react-router-dom";
import Home from "../Pages/home";
import Haqqimizda from "../Pages/haqqimizda";
import Axtaris from "../Pages/axtaris";
import Elaqe from "../Pages/elaqe";
import NotFound from "../Pages/notfound";
import GetCats from "../Pages/cats";
import Joke from "../Features/joke";

function Routing(){
	return(
		<Routes>
			<Route path="/"  element={<Home/>}/>
			<Route path="/haqqimizda"  element={<Haqqimizda/>}/>
			<Route path="/axtaris"  element={<Axtaris/>}/>
			<Route path="/elaqe"  element={<Elaqe/>}/>
			<Route path="/cats"  element={<GetCats/>}/>
			<Route path="/joke"  element={<Joke/>}/>
			<Route path="*"  element={<NotFound/>}/>

		</Routes>
	)
}

export default Routing