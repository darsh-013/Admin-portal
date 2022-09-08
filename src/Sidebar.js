import React, {useState} from "react";
import {Link} from 'react-router-dom'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import ImageIcon from '@mui/icons-material/Image';
import GifIcon from '@mui/icons-material/Gif';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MovieIcon from '@mui/icons-material/Movie';
import SportsIcon from '@mui/icons-material/Sports';
import ScienceIcon from '@mui/icons-material/Science';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
// import {FiArrowLeftCircle, FiArrowRightCircle} from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
import "./App.css";

const Header = () => {
    // const [menuCollapse, setMenuCollapse] = useState(false)
    // const menuIconClick = () => {
    //     menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    // };

    return (
        <div className="position-relative" >
            <div id="header">
                <ProSidebar >
                    <SidebarHeader>
                        <div >
                            <h5 className="mx-4">Logo</h5>
                        </div>
                        {/*<div className="closemenu" onClick={menuIconClick}>*/}
                        {/*    {menuCollapse ? (*/}
                        {/*        <FiArrowRightCircle/>*/}
                        {/*    ) : (*/}
                        {/*        <FiArrowLeftCircle/>*/}
                        {/*    )}*/}
                        {/*</div>*/}
                    </SidebarHeader>
                    {/*<SidebarHeader>*/}
                    {/*    <div className="logotext my-2">*/}
                    {/*        <p style={{color:"white"}}>Memes Type</p>*/}
                    {/*    </div>*/}
                    {/*</SidebarHeader>*/}
                    <SidebarContent>
                        <Menu >
                            <MenuItem className="sidebar-item color">
                                <ImageIcon className="color mx-2 "/><br/>
                                <Link to="/images" style={{color: 'white'}}>Images</Link>
                            </MenuItem>
                            <MenuItem className="sidebar-item">
                                <GifIcon className="color mx-2"/><br/>
                                <Link to="/gifs" style={{color: 'white'}}>GIFs</Link>
                            </MenuItem>
                            <MenuItem className="sidebar-item">
                                <OndemandVideoIcon className="color mx-2"/><br/>
                                <Link to="/videos" style={{color: 'white'}}>Videos</Link>
                            </MenuItem>
                            <MenuItem className="sidebar-item">
                                <SportsMartialArtsIcon className="color mx-2"/><br/>
                                <Link to="/" style={{color: 'white'}}>Anime</Link>
                            </MenuItem>
                            <MenuItem className="sidebar-item">
                                <MovieIcon className="color mx-2"/><br/>
                                <Link to="/" style={{color: 'white'}}>Movies</Link>
                            </MenuItem>
                            <MenuItem className="sidebar-item">
                                <SportsIcon className="color mx-2"/><br/>
                                <Link to="/" style={{color: 'white'}}>Sports</Link>
                            </MenuItem>
                            <MenuItem className="sidebar-item">
                                <PeopleOutlineIcon className="color mx-2"/><br/>
                                <Link to="/" style={{color: 'white'}}>Politics</Link>
                            </MenuItem>
                            <MenuItem className="sidebar-item">
                                <ScienceIcon className="color mx-2"/><br/>
                                <Link to="/" style={{color: 'white'}}>Tech</Link>
                            </MenuItem>

                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">

                            <MenuItem className="sidebar-item">
                                <LogoutIcon className="color mx-2"/><br/>
                                <Link to="/">Log out</Link></MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </div>
    );
};

export default Header;

