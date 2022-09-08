import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import meme from './memes.jfif';
import "./App.css";

const drawerWidth = 240;
const navItems = ['Today', 'Latest', 'Social','Quotes','Contact Us'];


export default function Navbar(props) {
    const { window } = props;
    // let navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Funny-Memes
            </Typography>
            <Divider />
            <List sx={{color: "black"}}>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText secondary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className="position-relative">
            <AppBar sx={{ bgcolor: "black"}}>
                <Toolbar className="justify-content-center">
                    <Toolbar  >
                        <Button key="Funny-Memes" sx={{ color: 'white'}}
                        >
                            <strong>Funny-Memes</strong>
                            {/*<img src={meme} alt="meme" />*/}
                        </Button>
                    </Toolbar>

                    <Box sx={{ display: "flex", flexDirection:"row", gap:"10px" }}>

                        <Button key="The Team" sx={{color:"white", textTransform: 'none', display: { xs: 'none', sm: 'block' }}}
                        >
                            <strong>Today</strong>
                        </Button>
                        <Button key="latest" sx={{ color: 'white', textTransform: 'none', display: { xs: 'none', sm: 'block' }}}
                        >
                            <strong>Latest</strong>
                        </Button>
                        <Button key="Quotes" sx={{ color: 'white', textTransform: 'none', display: { xs: 'none', sm: 'block' }}}
                        >
                            <strong>Quotes</strong>
                        </Button>
                        <Button key="social" sx={{ color: 'white', textTransform: 'none', display: { xs: 'none', sm: 'block' }}}
                        >
                            <strong>Social</strong>
                        </Button>
                        <Button key="contact" sx={{ color: 'white', textTransform: 'none', display: { xs: 'none', sm: 'block' }}}
                        >
                            <strong>Contact Us</strong>
                        </Button>

                        <Divider sx={{borderLeft: "2px solid white", margin:'5px'}}/>
                        <Button sx={{ color: 'white', textTransform: 'none', display: { xs: 'none', sm: 'block' }}}><strong>Login</strong></Button>
                    </Box>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 0 }}>
                <Toolbar />

            </Box>
        </Box>
    );
}
