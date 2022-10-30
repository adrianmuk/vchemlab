import '../App.css';
import Testubecompo from './Testubecompo';
import Dropper from './Dropper';
import Draggable from 'react-draggable';
import Rotation from 'react-rotation';

function Workspace() {
  return (
    <div className="workspaceclass">
      <Draggable>
        <div class="draggableclass">
            <Testubecompo colortop='yellow' colormiddle='rgb(126, 126, 126)' colorbottom='rgb(126, 126, 126)'></Testubecompo>
        </div>
      </Draggable>
      <Rotation>
      <Draggable>
        <div class="draggableclass">
           <Dropper dropcolor='yellow'></Dropper>
        </div>
      </Draggable>
      </Rotation>
    </div>
  );
}

export default Workspace;
