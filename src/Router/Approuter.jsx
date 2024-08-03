import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import Home from "../components/Home/Home";

export default function Approuter () {

    return(
       <BrowserRouter>
        <Routes>
            <Route element={<Main/>}>
            <Route path="/" element={<Home/>}/>


            </Route>
        </Routes>
        </BrowserRouter>
        
    
    )
}