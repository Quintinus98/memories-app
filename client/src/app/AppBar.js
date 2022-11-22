import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import memories from '../assets/memories.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
	<Box sx={{ flexGrow: 1 }}>
	  <AppBar position="static" color="inherit" sx={{ p: 1}}>
			<Toolbar variant="dense">
				<IconButton size="large" edge="start" color="inherit" aria-label="menu">
					<Link to={'/'} style={{textDecoration: 'none'}}>
						<MenuIcon />
					</Link>
				</IconButton>
				<Box className='appBar'>
					<Typography  className="heading" variant="h4">Memories</Typography>
					<img src={memories} className="image" alt="Memories" height={60} />
				</Box>
			</Toolbar>
	  </AppBar>
	</Box>
  );
}

