import React from "react";

class Services extends React.Component{

    render(){
        return(
            <section id="services">
                <div className="wrapper">
                    <h1>Services</h1>
                    <ul>
                        <li>
                            <img src="https://github.com/iamshaunjp/sass-playlist/blob/master/img/icon-1.png?raw=true" />
                            <a href="#">Recording<br />services</a>
                        </li>
                        <li>
                            <img src="https://github.com/iamshaunjp/sass-playlist/blob/master/img/icon-2.png?raw=true" />
                            <a href="#">Get a printed<br />certificate</a>
                        </li>
                        <li>
                            <img src="https://github.com/iamshaunjp/sass-playlist/blob/master/img/icon-3.png?raw=true" />
                            <a href="#">Lessons via<br />Skype</a>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}


export default Services