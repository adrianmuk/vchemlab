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
            <Testubecompo colortop='rgb(126, 126, 126)' colormiddle='rgb(126, 126, 126)' colorbottom='red'></Testubecompo>
        </div>
      </Draggable>
      <Rotation>
      <Draggable>
        <div class="draggableclass">
           <Dropper dropcolor='red'></Dropper>
        </div>
      </Draggable>
      </Rotation>
    </div>
  );
}

export default Workspace;
