import { Outlet, NavLink } from "react-router-dom";
// using import syntax
import { Header, UnderlineNav } from '@primer/components';
import * as React from "react";



export default function Layout() {
    return (
        <div>
            <Header>
                <Header.Item>

                </Header.Item>
                <Header.Item full>Acqra ReactJS Template </Header.Item>

            </Header>
            <UnderlineNav  >

                <UnderlineNav.Link as={NavLink} to="/" >Home</UnderlineNav.Link>
                <UnderlineNav.Link as={NavLink} to="about"  >Support</UnderlineNav.Link>
                <UnderlineNav.Link as={NavLink} to="enquiry "  >Enquiry</UnderlineNav.Link>
                <UnderlineNav.Link as={NavLink} to="Playground"  >Playground</UnderlineNav.Link>
                <UnderlineNav.Link as={NavLink} to="Editor"  >Editor</UnderlineNav.Link>
            </UnderlineNav>


            <Outlet />
        </div>

    );
}