import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";
import Services from "./component/Services";
import LessonBanner from "./component/LessonBanner";
import Project from "./component/Project";
import "./scss/style.scss";

class App extends React.Component{

  render(){
    return(
      <>
        <Header/>
        <Services/>
        <LessonBanner/>
        <Project/>
      </>
    )      
  }
}

ReactDOM.render(<App/>, document.querySelector("#root"));