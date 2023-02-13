import '../App.css';
import Searchbarbar from './Searchbarbar';

import {
  ProSidebarProvider,
  //ProSidebar,
  Menu, 
  MenuItem, 
  SubMenu,
  //SidebarHeader,
  //sidebarContext,
  //SidebarFooter,
} from 'react-pro-sidebar';
import {FaGem, FaHeart} from 'react-icons/fa';



export default function Sidenav() {
  return(
    <div class='sidebarsidebar'>
      <ProSidebarProvider>     
        <sidebarContext>
          <Menu>
            <SubMenu label="Apparatus">
            
                <MenuItem><Searchbarbar></Searchbarbar></MenuItem>
                <MenuItem icon={<FaGem />}>Test Tube</MenuItem>
                <MenuItem icon={<FaHeart />}>Beaker</MenuItem>
                <MenuItem>Spatulla</MenuItem>
            </SubMenu>
            <SubMenu label="Chemicals">
                <MenuItem><Searchbarbar></Searchbarbar></MenuItem>
                <MenuItem>Hydrochloric Acid</MenuItem>
                <MenuItem>Sodium Hydroxide</MenuItem>
                <MenuItem>Sulphuric Acid</MenuItem>
            </SubMenu>
            <SubMenu label="Tools">
                <MenuItem><Searchbarbar></Searchbarbar></MenuItem>
                <MenuItem>Weighing Scale</MenuItem>
                <MenuItem>Bunsen Burner</MenuItem>
                <MenuItem>Table</MenuItem>
            </SubMenu>
          </Menu>
        </sidebarContext>
      </ProSidebarProvider>

    </div>
  )
}

