import React from 'react';
import "./Sidebar.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

function Sidebar() {
  return (
    <div className="sidebar">

      {/*sidebarLeft*/}
      <div className='sidebarLeft'>
        <div className='serberIcon'>
          <img src='./favicon.ico' alt='' />
        </div>
        <div className='serberIcoSn'>
          <img src='./favicon.ico' alt='' />
        </div>
      </div>

      {/*sidebarRight*/}
      <div className='sidebarRight'>
        <div className='sidebarTop'>
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        <div className='sidebarChannels'>
          <div className='sidebarChannelsHeader'>
            <div className='sidebarHeader'>
              <ExpandMoreIcon />
                <h4>プログラミングチャネル</h4>
            </div>
            <AddIcon className='sidebarAddIcon' />
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
