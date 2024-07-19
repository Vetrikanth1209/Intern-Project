import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const nav = useNavigate()
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#3f51b5', height: '10vh', borderRadius: '20px' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        LMS Page
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <List sx={{ width: 250 }}>
                    <ListItem button onClick={toggleDrawer}>
                        <Button sx={{ width: '100%', justifyContent: 'flex-start' }} onClick={()=>{nav('/form')}}>
                            <ListItemText primary="Form" />
                        </Button>
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={toggleDrawer}>
                        <Button sx={{ width: '100%', justifyContent: 'flex-start' }} onClick={()=>{nav('/table')}}>
                            <ListItemText primary="Table" />
                        </Button>
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={toggleDrawer}>
                        <Button sx={{ width: '100%', justifyContent: 'flex-start' }} onClick={()=>{nav('/filter_by_resource_name')}}>
                            <ListItemText primary="Filter Resource" />
                        </Button>
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={toggleDrawer}>
                        <Button sx={{ width: '100%', justifyContent: 'flex-start' }} onClick={()=>{nav('/filter_by_course')}}>
                            <ListItemText primary="Filter Course" />
                        </Button>
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={toggleDrawer}>
                        <Button sx={{ width: '100%', justifyContent: 'flex-start' }} onClick={()=>{nav('/filter_by_date')}}>
                            <ListItemText primary="Filter Resource BY Date" />
                        </Button>
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={toggleDrawer}>
                        <Button sx={{ width: '100%', justifyContent: 'flex-start' }} onClick={()=>{
                            sessionStorage.removeItem('logged')
                            nav('/')
                        }}>
                            <ListItemText primary="Log Out" />
                        </Button>
                    </ListItem>
                    <Divider />
                </List>
            </Drawer>
        </>
    );
};

export default Nav;
