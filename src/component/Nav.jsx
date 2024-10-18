import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import { BsCart2} from 'react-icons/bs'
import { HiOutlineBars3 } from 'react-icons/hi2'
import {
  Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText
} from "@mui/material"
import { Home, Info,CommentRounded,PhoneRounded,ShoppingCartRounded } from '@mui/icons-material'




const Nav = () => {
 const [ openMenu, setOpenMenu]= useState(false)
  const menuOption = [
    {
      text: 'Home',
      icon: <Home />
    },
    {
      text: 'About',
      icon: <Info />
    },
    {
      text: 'Testimonials',
      icon: <CommentRounded />
    },
    {
      text: 'Contact',
      icon: <PhoneRounded />
    },
    {
      text: 'Cart',
      icon: <ShoppingCartRounded />
    }
  ];



return (
  <nav>
    <div className='nav-logo-container'>
      <img  src={Logo} alt='logo'/>
    </div>
    <div className='navbar-links-container'>
      <a href=''>Home</a>
      <a href=''>About</a>
      <a href=''>Testimonials</a>
      <a href=''>Contact</a>
      <a href=''>
        <BsCart2 className='navbar-cart-icon' />
      </a>
      <button className='primary-button'> Book Now</button>
    </div>
    <div className='navbar-menu-container'>
      <HiOutlineBars3 onClick={ ()=> setOpenMenu(true)}/>
    </div>
    <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
      anchor='right'>
      <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}>
        <List>
          {menuOption.map((items) => (
            <ListItem key={items.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{items.icon}</ListItemIcon>
                <ListItemText primary={items.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  </nav>
  )
}

export default Nav