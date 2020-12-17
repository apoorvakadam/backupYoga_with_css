import React from "react";
import styled from "styled-components";

class PoseDetails extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
       
        <div className="row">
          <div className="col-md-6">
            <br/><br/>
          <h4>{this.props.poseInfo.activePose}</h4>
          <br/>
          <p>{this.props.poseInfo.details}</p>


          </div>
          <div className="col-md-6">
          <img alt="yoga-pose" src={this.props.poseInfo.src} />

          </div>

        </div>
      </div>
    );
  }
}

const StyledPoseDetails = styled(PoseDetails)`
  flex: 1;
  align-items: center;
  padding: 0;
  margin-top:90px;
  height: 600px;

  p {
    color: black;
    font-weight: bold;
    text-align:left;
    padding-left:8px;
    padding-right:8px;
  }

  .row {
    background:beige;
    border-radius:10px;
  }

  img {
    width: 100%;
  }

  h4 {
    color: black;
    font-weight: bold;
  }

`
;

export default StyledPoseDetails;
