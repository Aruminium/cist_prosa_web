import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"

const Header = () => {
	return (
		<AppBar>
			<Toolbar>Header</Toolbar>
		</AppBar>
	)
}

export default Header;