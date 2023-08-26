import { Route, Routes } from "react-router-dom"
import Product from './../pages/product';
import Landing from './../pages/Landing';
import Notfound from "../Component/Notfound";
export const MainRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Product/>}/>
            <Route path="/landing" element={<Landing/>}/>
            <Route path="*" element={<Notfound/>}/>
        </Routes>
    )
}