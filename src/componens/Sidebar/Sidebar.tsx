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
          <h3>discord</h3>
          <ExpandMoreIcon />
          <div className='sidebarChannels'>
            <div className='sidebarChannelHeader'>
              <div className='sidebarHeader'>
                <ExpandMoreIcon />
                  <h4>プログラミングチャネル</h4>
              </div>
              <AddIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
