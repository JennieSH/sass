import React from "react";

class LeadBanner extends React.Component{

    render(){
        return(
            <div className="lead-banner">
                <img src="https://images.unsplash.com/photo-1585764728562-af075ce0f527?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" />
                <div className="banner-content">
                    <div className="wrapper">
                        <span className="title">Code Your Future</span>
                    </div>
                </div>
          </div>
        )
    }
}


export default LeadBanner