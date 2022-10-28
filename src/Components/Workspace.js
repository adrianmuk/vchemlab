import '../App.css';
import Testubecompo from './Testubecompo';
import Draggable from 'react-draggable';

function Workspace() {
  return (
    <div className="workspaceclass">
      <Draggable bounds={{left: -500, top: -250, right: 100, bottom: 200}}>
        <div class="draggableclass">
            <Testubecompo colortop='rgb(126, 126, 126)' colormiddle='rgb(126, 126, 126)' colorbottom='rgb(126, 126, 126)'></Testubecompo>
        </div>
      </Draggable>
    </div>
  );
}

export default Workspace;
