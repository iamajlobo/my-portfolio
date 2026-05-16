import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";


const Container = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Container;