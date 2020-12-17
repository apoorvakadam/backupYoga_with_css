import React from "react";
import * as posenet from "@tensorflow-models/posenet";
import Pose from "../../lib/posenetWrapper";
import StyledPoseSelector from "../poseSelector";
import StyledChecklist from "../checklist";
import StyledPoseDotter from "../poseDotter";

class PoseWrapper extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      activePose: 'Chair Pose',
      pose: null,
      allDetails:{}
    };
    this.setResult = this.setResult.bind(this);
    this.getChosenPose = this.getChosenPose.bind(this);
  }

  componentDidMount() {
    POSES.forEach(element => {

      if(element.id === this.state.activePose){
        this.setState({
          allDetails:element
        })

      }
      
    });
    this.runPosenet();
  }

  setResult(wrappedPose) {
    var activePose = this.state.activePose;
    this.setState(function(state) {
      return {
        pose: wrappedPose
      };
    });
    switch (activePose) {
      case "Chair Pose":
        this.setState({ result: wrappedPose.isChairPose() });
        break;
      case "Warrior Two":
        this.setState({ result: wrappedPose.isWarrior2() });
        break;
      case "Goddess":
        this.setState({ result: wrappedPose.isGoddess() });
        break;
      case "Tree Pose":
        this.setState({ result: wrappedPose.isTreePose() });
        break;
      case "Mountain Pose":
        this.setState({ result: wrappedPose.isMountainPose() });
        break;
      default:
    }
  }

  getChosenPose(chosenPose) {
    this.setState(
      {
        activePose: chosenPose
      },
      () => {}
    );
  }

  runPosenet() {
    var setResult = this.setResult;
    setInterval(function() {
      let imageElement = document.getElementsByTagName("video")[0];
      let imageScaleFactor = 0.5;
      let outputStride = 32;
      //let arch='ResNet50';
      let flipHorizontal = true;
      if(imageElement.readyState===4)
      {
        posenet
        .load()
        .then(function(net) {
          return net.estimateSinglePose(
            imageElement,
            imageScaleFactor,
            flipHorizontal,
            outputStride,
         //  arch
          );
        })
        .then(function(pose) {
          var wrappedPose = new Pose(pose);
        
          setResult(wrappedPose);
        });
      }
     
    }, 500);
  }

  render() {
    // console.log("pWp" + this.state.pose);
    // console.log("pWr" + this.state.result);
    return (
      <React.Fragment>
        <StyledPoseSelector getChosenPose={this.getChosenPose} activePose={this.state.pose} element={this.state.allDetails} />
        <StyledChecklist result={this.state.result} activePose={this.state.activePose}/>
        <StyledPoseDotter result={this.state.result} pose={this.state.pose} />
      </React.Fragment>
    );
  }
}

const POSES = [
  {
    id: "Chair Pose",
    pose: "Chair Pose",
    details: "Chair Pose clearly works the muscles of the arms and legs, but it also stimulates the diaphragm and heart",
    src: "chair_pose.png"
  },
  {
    id: "Warrior Two",
    pose: "Warrior Two",
    details: "Warrior II strengthens the legs, opens the hips and chest. The pose develops concentration, balance and groundedness. This pose improves circulation and respiration and energizes the entire body",
    src: "warrior_two.png"
  },
  {
    id: "Goddess",
    pose: "Goddess",
    details: "Goddess pose to help you harness the forces of the Universe while stretching and toning your core. This pose helps each of us connect to our inherent inner goddess, finding a common space with this powerful feminine energy.",
    src: "goddess.png"
  },
  {
    id: "Tree Pose",
    pose: "Tree Pose",
    details: "Tree pose increases balance, focus, memory and concentration and strengthens the ankles and knees.",
    src: "tree_pose.png"
  },
  {
    id: "Mountain Pose",
    pose: "Mountain",
    details: "The foundation of all standing poses, Mountain Pose makes a great a starting position, resting pose, or tool to improve posture.",
    src: "mountain_pose.png"
  }
];

export default PoseWrapper;

//
