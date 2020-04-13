import React from "react";

class Nav extends React.Component{

    render(){
        return(
            <nav id="main-nav">
                <div className="wrapper">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Lessons</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
           </nav>
        )
    }
}


export default Nav