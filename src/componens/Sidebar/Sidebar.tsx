import React from 'react';
import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">

      {/*sidebarLeft*/}
      <div className='sidebarLeft'>
        <div className='serberIcon'>
          <img src='./favicon.ico' alt='' />
        </div>
        <div className='serberIcon'>
          <img src='./favicon.ico' alt='' />
        </div>


      </div>

      {/*sidebarRight*/}
      <div className='sidebarRight'>

      </div>
    </div>
  );
}

export default Sidebar