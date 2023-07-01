import React from 'react'
import './navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyIcon from '@mui/icons-material/Key';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const menu=["Home","Master","Registration","OPD","Emergency","DayCare","IPD","Procedure","LAB","OT","Misc. Bill","Billing","Reports","SMS","Documents","Estiments","Utility","Accounts"]
  return (
    <div>
<div className="navbar_main">
    <div className="nav_top">
        <div className="nav_logo">
            <div className="logo">
            <span className="text_pu">पू</span>
            <span className="text_na">र्णां</span>
            <span className="text_k">क.</span>
            <div className="hms">HMS</div>
             </div>
        </div>
        <div className="text_hospital">Main Hospital</div>
        <div className="icons">
            <div className="icon_section">
            <div className="notification_icon"><NotificationsIcon/>
            <div className="bubble"><span>4</span> </div>
            </div>
            <div className="home_icon"><HomeIcon/></div>
            <div className="key_icon"><KeyIcon/></div></div>
            <div className="admin_text">Admin(Administrator)</div>
            <div className="notification_icon"><LogoutIcon/></div>
        </div>
    </div>
    <div className="nav_bottom">
        <div className="left_bar_icon"><MenuIcon/></div>
        <div className="menu">
            {
                menu.map((item)=>
                {
                    return(
                        <div className="menu_item">{item}</div>
                    )
                })
            }
        </div>
        <div className="right_bar_icon"><MenuIcon/></div>
    </div>
</div>

    </div>
  )
}

export default Navbar