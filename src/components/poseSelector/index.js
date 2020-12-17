import React from "react";
import styled from "styled-components";
import StyledPoseDetails from "../poseDetails";
import {AiFillCloseCircle,AiFillEye} from 'react-icons/ai'


class PoseSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePose: this.props.activePose,
      details: null,
      src: null,
      displayAccordion: false,
      className: undefined
    };
    this.displayAccordion = this.displayAccordion.bind(this);
  }

  
  handleChoice(id, details, src) {
    this.setState({
      activePose: id,
      details: details,
      src: src,
    },
    () => {
      console.log("lol")
    });
    this.props.getChosenPose(id);
    console.log(this.props.element,this.state)
  }

  displayAccordion() {
    this.setState(prevState => ({
      displayAccordion: !prevState.displayAccordion
    }));

    this.setState({
      activePose: this.props.element.id,
      details: this.props.element.details,
      src: this.props.element.src,
    },
    () => {
      console.log("lol")
    });
    this.props.getChosenPose(this.props.element.id);
    console.log(this.props.element,this.state)
    

  
  }

  render() {
    const {activePose} = this.state;
    const poseInfo = this.state;
    let accordion = null;

    if (this.state.displayAccordion) {
      accordion = (
        <div className={this.props.className}>
        <ul className="accordion">
          {/* {POSES.map(({ id, pose, details, src }) => ( */}
                <li className={this.state.activePose === this.props.activePose ? "active" : "false" } key={this.props.element.id} 
               >
                 <div className="container">
                 <div className="pose-title">
                   <StyledPoseDetails poseInfo={poseInfo}/>

                 </div>

                 </div>
                
                 </li>              
               
                

           
          {/* ))} */}
          </ul>

        </div>
      )
    }
    return (
      <div className={this.props.className} id="poseSelector">
        <div className="icon" onClick={this.displayAccordion}>{this.state.displayAccordion ? <AiFillCloseCircle/> : <AiFillEye/>}
       
        </div>
        {accordion} 
      </div>
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

const StyledPoseSelector = styled(PoseSelector)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato';
     -webkit-font-smoothing: antialiased;
  	-moz-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
  	text-rendering: optimizelegibility;
  }

  ul {
    display: flex;
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style-type: none;
  }

  li {
    flex: 1;
    display: flex;
    align-items: stretch;
    padding: 20px;
    background: white;
    cursor: pointer;
    transition: all .5s ease;

   
    &.active {
      flex: 5;
      background: #FF8F4F;
      cursor: default;

      h2 {
        color: #A33265;
      }
    }

    .pose-title {
      flex: 1;
      display: flex;
      align-items: center;
      width: 100%;
      margin: 0;
      padding: 0;
      text-align: center;
      color:black;

      h2 {
        margin: 0;
        white-space: nowrap;
      }
    }
  }

  .icon {
    padding: 50px;
    font-size: 60px;
    z-index: 3;
    position: absolute;
    color: black;
    text-align:right;
    margin-left:84%;
    margin-top:55px;
    margin-bottom:50px;
    font-size:40px;
    color:grey;
    cursor:pointer;

  }

  
`;
export default StyledPoseSelector;
