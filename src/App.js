import React, { Component } from "react";
import "./App.css";
import PoseWrapper from "./components/poseWrapper";
import StyledWebcamFeed from "./components/webcamFeed";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       pose:'Chair Pose'
    }
  }
  
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <br/><br/><br/><br/><br/>
          <div className="container" style={{background:"black",height:"550px",borderRadius:"8px"}}>
            <br/>
          <StyledWebcamFeed pose={this.state.pose}/>
          <PoseWrapper pose={this.state.pose}/>
          <br/> <br/>

          </div>
          
        </React.Fragment>
      </div>
    );
  }
}

export default App;
