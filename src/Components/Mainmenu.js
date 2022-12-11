import React from 'react';
import '../App.css';
import { useNavigate} from "react-router-dom";

function Mainmenu (){
  const navigate = useNavigate()
  return (
         <div>
         <div class="button_mainmenu">
              <button class='menubtn' onClick={()=> navigate('Simulator')}>
                <img class="quotes" src="assets/images/expeicon.svg" alt="alternative" />
              </button>
                
              <button class='menubtn' onClick={()=> navigate('Simulator')}>
                <img class="quotes" src="assets/images/molviewicon.svg" alt="alternative" />
              </button>
             
              <button class='menubtn' onClick={()=> navigate('Simulator')}>
                <img class="quotes" src="assets/images/libraryicon.svg" alt="alternative" />
              </button>
          
              <button class='menubtn' onClick={()=> navigate('Simulator')}>
                <img class="quotes" src="assets/images/elearningicon.svg" alt="alternative" />
              </button>
             
            
              <button class='menubtn' onClick={()=> navigate('Simulator')}>
                <img class="quotes" src="assets/images/balanceequaicon.svg" alt="alternative" />
              </button>
             
              <button class='menubtn' onClick={()=> navigate('Simulator')}>
                <img class="quotes" src="assets/images/calcicon.svg" alt="alternative" />
              </button>
            
         </div>
         </div>         
          
    
  );
  }
export default Mainmenu;
