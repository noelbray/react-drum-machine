// This code is raw, unrefactored. I was testing out and trying many things to get it to work the way I wanted it to and to solve the Free Code Camp "Build A Drum Machine" challenge. I like experimenting. I hope you have a great day. 

// Retest 
// and restest the power button to see if Something is wrong with my power button switching audioData 
// the audioDataSwitch seems to be working fine now after adding audio: .... to this.setState within the handler function
// Next step, make power button disengage the audio switch button

// It's working except for the z button because of it's name/id, but even when I solve that, I don't know if it is the best, proper way of doing it. 

// const playButton = document.getElementById("attribution");
// const audioElement = document.getElementById("audio-test");
// audioElement.playBackRate = 100;
// playButton.addEventListener(
//   "click",
//   () => {
//     audioElement.play();
//   }
// )
let notExtensible; // can't set object properties to it, such as notExtensible.color = "blue"
let switchCoverStyle;
// let powerButtonStyle;
// let lineStyle;
// let arcStyle;
// let switchCoverStyle = {};
// switchCoverStyle.backgroundColor = "red";
const DRUMKEYS = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const AUDIOCLIPS = [
  { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
   name: "Heater-1",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    name: "Heater-2"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    name: "Heart-3"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    name: "Heater-4"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    name: "Clap"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    name: "Open-HH"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    name: "Kick-n'-Hat"
    // name: "Kick-n-Hat"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    name: "Kick"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    name: "Closed-HH"
  }
];
const AUDIOCLIPS2 = [
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    name: "Chord-1"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    name: "Chord-2"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    name: "Chord-3"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    name: "Shaker"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    name: "Open-HH"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    name: "Closed-HH"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    name: "Punchy-Kick"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    name: "Side-Stick"
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    name: "Snare"
  },
]

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioData: AUDIOCLIPS,
      display: "Display",
      volume: 0.4,
      power: "On",
      savedURLs: []
    }
     
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleKeyPress = this.handleKeyPress.bind(this);
    // this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleVolumeClick = this.handleVolumeClick.bind(this);
    this.handleVolumeMouseUp = this.handleVolumeMouseUp.bind(this);
    this.handleVolumeKeyUp = this.handleVolumeKeyUp.bind(this);
    this.audioDataSwitch = this.audioDataSwitch.bind(this);
    this.powerSwitch = this.powerSwitch.bind(this);
    this.handleSwitchMouseOut = this.handleSwitchMouseOut.bind(this);
  }
  
   
  componentDidMount() {
    DRUMKEYS.forEach(
      (currentValue, index) => {
    window.addEventListener(
          "keypress",
          e => {
            if(e.key === currentValue || e.key === currentValue.toLowerCase()) {
              // const buttonId = document.querySelector("#" + currentValue.name);
              // I created a class for each button that matched the drum letter it is associated with so that when the audio data is switched the keys will still be able to be controled with the keyboard keys
              const buttonId = document.querySelector("." + currentValue)
              buttonId.click();
              // buttonId.style.boxShadow = "none";
              buttonId.classList.toggle("remove-shadow");
            }  
          }
        )
    window.addEventListener(
          "keyup",
          e => {
            if(e.key === currentValue || e.key === currentValue.toLowerCase()) {
              const buttonId = document.querySelector("." + currentValue);
              // buttonId.style.boxShadow = "2px 2px 3px 1px black";
              // buttonId.removeAttribute("style");
              buttonId.classList.toggle("remove-shadow");
            }
          }
        );
      }
    );
  }
  componentWillUnMount() {
    DRUMKEYS.forEach(
      (currentValue, index) => {
        window.removeEventListener(
          "keypress",
          e => {
            if(e.key === currentValue || e.key === currentValue.toLowerCase()) {
              const buttonId = document.querySelector("." + currentValue);
              buttonId.click();
              // buttonId.style.boxShadow = "none";
              buttonId.classList.toggle("remove-shadow");
            }  
          }
        )
        window.removeEventListener(
          "keyup",
          e => {
            if(e.key === currentValue || e.key === currentValue.toLowerCase()) {
              const buttonId = document.querySelector("#" + currentValue);
              // buttonId.style.boxShadow = "2px 2px 3px 1px black";
              buttonId.classList.toggle("remove-shadow");
            }
          }
        );
      }
    )
  }
  // componentDidMount() {
  //   window.addEventListener(
  //   "keypress", 
  //   this.handleKeyPress
  //   );
  // }
  // componentWillUnmout() {
  //   window.removeEventListener(
  //   "keypress", 
  //   this.hadleKeyPress
  //   );
  // }
   
  handleClick(e) {
    // (this.state.power === "Off") && (e.target.style.backgroundColor = "red")
    // if (this.state.power === "Off") e.target.style.backgroundColor = "red";
    // (this.state.power === "Off") && return;
    if (this.state.power === "Off") return;
    
    // document.querySelectorAll(".clip").forEach(a=> a.volume = this.state.volume);
    
    e.target.firstElementChild.currentTime = 0;
    e.target.firstElementChild.play();
    this.setState({
      display: e.target.id.replace(/-/g, " ")
      // display: this.state.volume
    });
    
  }
  // handleMouseDown(e) {
  //  this.setState({volume: e.target.volume});
  // }
  
  handleChange(e) {
    // e.preventDefault();
    if(this.state.power === "Off") return;
    
    const audioClips = document.querySelectorAll(".clip");
    const display = document.querySelector("#display");
    this.setState({
      volume: e.target.value,
      display: e.target.value
    });
    // audio.volume = this.state.volume;
    audioClips.forEach(audio => {audio.volume = this.state.volume});
    // if (e.button === "0") display.innerText = this.state.volume;
    // this.handleMouseDown(e);
    // this.state.volume === e.target.value ? 
    //   display.innerText = this.state.display : display.innerText = this.state.volume;

  }

  // handleMouseDown(e) {
  //   this.setState({display: this.state.volume})
  // }
  
  handleVolumeKeyUp(e) {
    if (this.state.power === "Off") return;
    
    if (
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "ArrowDown"||
      e.key === "ArrowUp"
    ) {
    if (this.state.display === this.state.volume) this.setState({display: "Display"});
    }
  }
  
  handleVolumeMouseUp(e) {
    if (this.state.power === "Off") return;
    
   if (this.state.display === this.state.volume) this.setState({display: "Display"});

  }
  
  handleVolumeClick(e) {
    if (this.state.power === "Off") return;
    
    const audioElements = document.querySelectorAll(".clip");
    const display = document.getElementById("display");
    this.setState({
      volume: e.target.value,
      display: e.target.value
    });
    audioElements.forEach(audio => {audio.volume = this.state.volume});
  }
  
  audioDataSwitch(e) {
    if(this.state.power === "Off") return;

    const switchCover = document.getElementById("switchCover");
 
// document.querySelectorAll(".clip").forEach(audio => audio.volume = this.state.volume);    
    
    // switchCoverStyle.backgroundColor = "green";
    // switchCover.style.right !== "50%" ? 
    //   switchCoverStyle = {right: "50%"} :
    //   switchCoverStyle = {right: "0"}
    if(switchCover.style.right !== "50%") {
      switchCoverStyle = {right: "50%"};
      this.setState({
        display: "Smooth Piano Audio Set",
        // display: this.state.volume,
        audioData: AUDIOCLIPS2,
        // volume: this.state.volume
        // this seems to be working fine now
      });
    } 
    else {
      switchCoverStyle = {right: "0"};
      this.setState({
        display: "Heater Audio Set",
        // display: this.state.volume,
        audioData: AUDIOCLIPS,
        // volume: this.state.volume
        // this seems to be working fine now
      });
    }
    
    // this.setState(
    //   (this.state.display !== "Smooth Piano Audio") ? {display: "Smooth Piano Audio"} : {display: "Heater Audio Set"}
    // );
    // left off here The above code doesn't take into account when the this.state.display changes based on volume or drumpad. I think I have to incoroporate (&& switchCover.style.right === 0) in some way. 
    // I remove this just after adding it to the above code that is live, not commented out
    // this.state.audioData === AUDIOCLIPS ?
    //   this.setState({audioData: AUDIOCLIPS2}) : 
    //   this.setState({audioData: AUDIOCLIPS});

    // switchCover.classList.toggle("slide");
  }
  
  handleSwitchMouseOut () {
  //  // I added this because, for some reason, whenever the audio switch is clicked, it would update audioData but it wouldn't keep the previous volume that was set before the switch was clicked, 
 document.querySelectorAll(".clip").forEach(audioclip => {audioclip.volume = this.state.volume});
  }

  // Test to make sure that nothing works if the power button is clicked.
  powerSwitch(e) {
    this.state.power === "On" ? 
      this.setState({power: "Off", display: "Power Is Off"}) : 
    this.setState({power: "On", display: "Power Is On"});

//     const switchCoverPosition = document.querySelector("#switchCover").style.right;
//     const originalAudioData = (switchCoverPosition !== "50%" || switchCoverPosition === null) ? AUDIOCLIPS : AUDIOCLIPS2;
    
//     if (this.state.power === "On") {
//       this.setState({power: "Off"});
//       const savedURLs = [];
//       const audioDataNoURLs = [...this.state.audioData]
//       .map(arrVal => {
//         savedURLs.push(arrVal.src);
//         arrVal.src = "#";
//         return arrVal
//       });
//       this.setState({savedURLs: savedURLs});
//       this.setState({audioData: audioDataNoURLs})
//     } 
//     else {
//       this.setState({power: "On"});
//       const restoreURLs = this.state.audioData.map(
//       (element, index) => {
//         element.src = this.state.savedURLs[index];
//         // element.src = originalAudioData[index].src;
//         return element;
//       });
//       this.setState({audioData: restoreURLs})
//       // this.setState({audioData: AUDIOCLIPS})
//     }
//     _________________________________
    // e.target.style.backgroundColor = "rgb(0,0,0,0)";
    // this.setState({display: String(e.bubbles)})
    
    // if (e.target.style.backgroundColor !== "transparent") {
    //   e.target.style.backgroundColor = "transparent";
    //   // e.target.style.borderColor = "#EFEFEF"
    //   // e.target.firstElementChild.style.borderColor = "#EFEFEF";
    //   // e.target.lastElementChild.style.borderColor = "#EFEFEF";
    // }
    // else {
    //   e.target.style.backgroundColor = "rgb(245, 0, 0)";
    // }
  }
  
//   handleKeyPress(e) {
//     // This is another way I could do it but it's also going to take a lot of code.
//     switch (e.key) {
//       case "q": case "Q": {
//         const drumButton = document.querySelector('.Q');
//         drumButton.click();
//         drumButton.style.boxShadow = "none";
//         break;
//       }
//       case "w": case "W": {
//         const drumButton = document.querySelector(".W");
//         drumButton.click();
//         break;
//       }
        
//     }
    // for (let i = 0; i < DRUMKEYS.length; i++) {
    //   if(e.key === DRUMKEYS[i] || e.key === DRUMKEYS[i].toLowerCase()) {
    //     const drumButton = document.querySelector("." + DRUMKEYS[i]);
    //     drumButton.style.yellow;
    //   }
    // }
  // }
    
   // handleKeyPres(e) {
    // const html = querySelector("html");
    // if(e.key === "q"){e.target.click()}
//     switch(e.key) {
//       case "q": case "Q":
        
//     }
    // const audioElement = e.target.firstElementChild;
    // if(e.key === audioElement.id || e.key === audioElement.id.toLowerCase()) {
      // e.target.style.backgroundColor = "green";
      // e.target.boxShadow === "2px 2px 3px 1px black"
      // e.target.style.boxShadow = "3px 3px 0px 3px green";
      // e.target.click();
    // }
  // }
  
  render () {
    return (
      <div id="drum-machine">
        <Power 
          powerSwitch={this.powerSwitch}
          power={this.state.power}
          />
        <DrumKeyDisplay 
          audioData={this.state.audioData}
          click={this.handleClick}
          handleKeyPress={this.handleKeyPress}
            />
        <Controls 
          audioDataSwitch={this.audioDataSwitch}
          display={this.state.display}
          volume={this.state.volume}
          // handleMouseDown={this.handleMouseDown}
          handleVolumeClick={this.handleVolumeClick}
          handleChange={this.handleChange}
          handleKeyPress={this.handleKeyPress}
          handleVolumeMouseUp={this.handleVolumeMouseUp}
          handleVolumeKeyUp={this.handleVolumeKeyUp}
          handleVolumeClick={this.handleVolumeClick}
          handleSwitchMouseOut={this.handleSwitchMouseOut}
          />
      </div>
    );
  }
}

const DrumKeyDisplay = (props) => {
  return (
    <div id="drum-pad-display">
      {DRUMKEYS.map(
        (drumkey, index) => {
          return (
            <button 
              // id={AUDIOCLIPS[index].name}
              // key={AUDIOCLIPS[index].name}
              id={props.audioData[index].name}
              key={props.audioData[index].name}
              className={`drum-pad ${drumkey}` }
              type="button"
              onClick={props.click}
              // onKeyPress={props.onkeypress}
              // onKeyPress={props.handleKeyPress(drumkey)}
              onKeyPress={props.handleKeyPress}
              >
              {drumkey}
              <audio 
                id={drumkey}
                class="clip"
                // src={AUDIOCLIPS[index].src}
                src={props.audioData[index].src}
                ></audio>
              </button>
          );
        }
      )}
    </div>
  );
}

function Controls (props) {
    
  return (
    <div class="controls">
      <div id="audioSwitch">
        <button 
        id="audioDataSwitch"
        // onClick={props.audioDataSwitch}
        // onMouseOut={props.handleSwitchMouseOut}
          // placing audioDataSwitch and handleSwitchOut in onMouseDown and onMouseUp seems to have solved the problem of getting the volume to update after the audio data is switched
          onMouseDown={props.audioDataSwitch}
          onMouseUp={props.handleSwitchMouseOut}
        >
          <span class="audioSet">Heater</span>
          <span class="audioSet">Smooth Piano</span>
          <span 
            id="switchCover"
            style={switchCoverStyle}
            >Switch Audio</span>
        </button>
      </div>
      <input
        id="volume" 
        type="range"
        min="0"
        max="1"
        step="0.01"
        title={props.volume}
        value={props.volume}
        // onMouseDown={props.handleMouseDown}
        onClick={props.handleVolumeClick}
        // onClick was added because, for some reason when I clicked the volume element, despite the range change, it wasn't updating the volume for all the audio elements like when I grab and drag the range inc/dec ??
        // onMouseDown={props.handleVolumeClick}
        onChange={props.handleChange}
        onMouseOut={props.handleVolumeMouseUp}
        // OnMouseOut was: 
        // onMouseUp={props.handleVolumeMouseUp}
        onKeyUp={props.handleVolumeKeyUp}
        />
      <p id="display">{ props.display}</p>
    </div>
  );
}



function Power (props) {
  // I think it may be better to declare the style variables within the function Component that is using them.
  let powerButtonStyle, lineStyle, arcStyle;
// in order to add properties the variable must be initialized as an object, {}, 
  // then you can add properties:  powerButtonStyle.backgroundColor = "green";
  
  if (props.power === "Off") {
    powerButtonStyle = {
      backgroundColor: "transparent",
      borderColor: "#EFEFEF"
    };
    lineStyle = {backgroundColor: "#EFEFEF"};
    arcStyle = {
      borderLeftColor: "#EFEFEF",
      borderRightColor: "#EFEFEF",
      borderBottomColor: "#EFEFEF"
    };
  }

  return (
    <button 
      id="power-button"
      style={powerButtonStyle}
      onClick={props.powerSwitch}
     >
      <div 
        style={lineStyle}
        id="line"></div>
      <div 
        style={arcStyle}
        id="arc"></div>
    </button>
    
  );
}



ReactDOM.render(
  <DrumMachine />,
  document.getElementById("reactApp")
);



// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

// const drumPads = document.querySelectorAll(".drum-pad");
// for (let i = 0, i < drumPads.length, i++) {
//   drumPads[i].addEventListener(
//     "click",
//     () => {
//       drumPads[i].style.backgroundColor = "blue";
//     }
//   );  
// }


// Back Up Code for keyboard keypress and keyboard keyUp to be put in componentDidMount and componentDidUpdate:
// DRUMKEYS.forEach(
//       (currentValue, index) => {
//         const keyPressListener = window.addEventListener(
//           "keypress",
//           e => {
//             if(e.key === currentValue || e.key === currentValue.toLowerCase()) {
//               // const buttonId = document.querySelector("#" + currentValue.name);
//               // I created a class for each button that matched the drum letter it is associated with so that when the audio data is switched the keys will still be able to be controled with the keyboard keys
//               const buttonId = document.querySelector("." + currentValue)
//               buttonId.click();
//               buttonId.style.boxShadow = "none";
//             }  
//           }
//         )
//   window.addEventListener(
//           "keyup",
//           e => {
//             if(e.key === currentValue || e.key === currentValue.toLowerCase()) {
//               const buttonId = document.querySelector("." + currentValue);
//               buttonId.style.boxShadow = "2px 2px 3px 1px black";
//             }
//           }
//         );
//       }
//     );
