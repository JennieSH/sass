import React from "react";

class LessonBanner extends React.Component{

    render(){
        return(
            <div className="lessons-banner">
                <img src="https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" />
                <div className="banner-content">
                    <div className="wrapper">
                        <span className="title">Our Lessons</span>
                        <span className="sub-title">Are Easy</span>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default LessonBanner