"use client"

import Link from 'next/link'
import { useState } from 'react'
import { AccountCircle } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  Avatar,
  Divider,
  Menu,
} from '@mui/material'

export default function ButtonAppBar() {
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)
  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <Box
      sx={{
        flexGrow: 1
      }}>
      <AppBar position="static" elevation={3}
        sx={{
          backgroundColor: 'black',
          marginBottom: '50px'
        }}>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Anunx
            </Typography>
            <Link href='/pages/user/publish' >
              <Button color="primary" variant='outlined'>
                Anunciar e Vender
              </Button>
            </Link>
            <IconButton color='primary' onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
              {
                true === false
                  ? <Avatar src='' />
                  : <AccountCircle />
              }
              <Typography variant='subtitle' color='primary' className='userName'>
                Ezequiel Oliveira
              </Typography>
            </IconButton>
            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <Link href='/pages/user/dashboard'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}>
                <MenuItem>Meus anúncios</MenuItem>
              </Link>
              <Link href='/pages/user/publish'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>
              <Divider className='divider' />
              <MenuItem>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}