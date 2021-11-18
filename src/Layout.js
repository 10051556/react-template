import { Outlet, NavLink } from "react-router-dom";
// using import syntax
import * as React from "react";



export default function Layout() {
    return (
        <div>


            <h1> Acqra ReactJS Template</h1>




            <NavLink to="/" >Home </NavLink>
            <NavLink to="about"  >About </NavLink>
            <NavLink to="enquiry "  >Enquiry </NavLink>



            <Outlet />
        </div>

    );
}