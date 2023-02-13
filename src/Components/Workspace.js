import '../App.css';
import Testubecompo from './Testubecompo';
import Dropper from './Dropper';
import Draggable from 'react-draggable';
import Rotation from 'react-rotation';
import React, { useState } from 'react';
// import InputFieldOne from './InputFieldOne';
// import InputFieldTwo from './InputFieldTwo';
// import InputFieldThree from './InputFieldThree';
import styled from 'styled-components';
import InstructNotebookTile from './InstructNotebookTile';






const StyledInput = styled.input`
  display: block;
  margin: 20px 0px;
  border: 1px solid lightblue;
`;


// Creating a custom hook
function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange,
  };
}





function Workspace() {

  const cationInput = useInput('');
  const anionInput = useInput('');

  const [bottomColor, setBottomColorProp] = useState('#00000000');
  const [middleColor, setMiddleColorProp] = useState('#00000000');
  const [topColor, setTopColorProp] = useState('#00000000');

  
  //<InstructNotebookTile logText={logText} setLogText={setLogText} />
  const [logText, setLogText] = useState();
  const [ finalColor, setFinalColor] = useState()


  //DILUTE SODIUM HYDROXIDE
  const handleClick = () => {
    if (cationInput.value === 'Ammonium' && anionInput.value === 'Dilute Sodium Hydroxide') {
      setBottomColorProp('#00000000');
      setLogText('No observable change');
    } else if (cationInput.value === 'Zinc' && anionInput.value === 'Dilute Sodium Hydroxide') {
      setBottomColorProp('white');
      setLogText('White precipitate');
    } else if (cationInput.value === 'Lead' && anionInput.value === 'Dilute Sodium Hydroxide') {
      setBottomColorProp('white');
      setLogText('White precipitate');
    } else if (cationInput.value === 'Aluminium' && anionInput.value === 'Dilute Sodium Hydroxide') {
      setBottomColorProp('white');
      setLogText('White precipitate');
    } else if (cationInput.value === 'Copper' && anionInput.value === 'Dilute Sodium Hydroxide') {
      setBottomColorProp('blue');
      setLogText('Blue precipitate');
    } else if (cationInput.value === 'Iron (II)' && anionInput.value === 'Dilute Sodium Hydroxide') {
      setBottomColorProp('#66780a');
      setLogText('Dirty green precipitate');
    } else if (cationInput.value === 'Iron (III)' && anionInput.value === 'Dilute Sodium Hydroxide') {
      setBottomColorProp('brown');
      setLogText('Brown precipitate');

  //
    } else if (cationInput.value === 'sodium' && anionInput.value === 'Dilute Sodium Hydroxide') {
      setBottomColorProp('blue');

    } else if (cationInput.value === 'sodium' && anionInput.value === 'Dilute Sodium Hydroxide') {
      
    }
  }



  return (
    <div className='workspaceandtile'>

          <div className="workspaceclass">


            <div className='inputdesign' >
            <table>
                <tr>
                  <td><StyledInput {...cationInput} placeholder="Enter Chemical A"/></td>
                  <td><StyledInput {...anionInput} placeholder="Enter Chemical B"/></td>
                  <td><button className='reactbut' onClick={handleClick}>React</button></td>
                </tr>
              </table>              
            </div>



              <Draggable position={{x: 0, y:-30}}>
                <div class="draggableclass">
                    <Testubecompo colortop={topColor} colormiddle={middleColor} colorbottom={bottomColor}></Testubecompo>
                </div>
              </Draggable>

              {/* <Rotation>
              <Draggable>
                <div class="draggableclass">
                  <Dropper dropcolor='red'></Dropper>
                </div>
              </Draggable>
              </Rotation> */}
          </div>


          <div>
            <InstructNotebookTile logText={logText}/>
          </div>
          </div>

  );
}

export default Workspace;
