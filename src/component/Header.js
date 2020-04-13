import React from "react";
import Nav from "./Nav";
import LeadBanner from "./LeadBanner";

class Header extends React.Component{

    render(){
        return(
            <header>
                <Nav/>
                <LeadBanner/>
            </header>
        )
    }
}


export default Header