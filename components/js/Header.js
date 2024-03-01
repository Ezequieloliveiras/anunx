import Link from 'next/link'
import { useState } from 'react'
import { AccountCircle } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import { signOut, useSession } from "next-auth/react"

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

import UseInfo from '../UserInfo'

export default function ButtonAppBar() {
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)
  const { data: session } = useSession()
  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <Box
      sx={{
        flexGrow: 1
      }}>
      <AppBar
        position="static"
        elevation={3}
        sx={{
          backgroundColor: 'black',
          marginBottom: '50px'
        }}>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1
              }}>
              Anunx
            </Typography>
            <Link href={session ? '/dashboard/publish' : '/login'} >
              <Button
                color="primary"
                variant='outlined'>
                Anunciar e Vender
              </Button>
            </Link>
            {
              session
                ? (
                  <IconButton
                    onClick={(e) => setAnchorUserMenu(e.currentTarget)}
                    color='primary'
                    sx={{
                      marginLeft: '10px'
                    }}>
                    {
                      session.user.image

                        ? <Avatar src={session.user.image} />
                        : <AccountCircle />
                    }
                    <Typography
                      variant='h6'
                      color='primary'
                      className='userName'
                    >
                      <UseInfo />
                    </Typography>
                  </IconButton>

                ) : null
            }
            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
            >
              <Link href='/'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}>
                <MenuItem>Página Inicial</MenuItem>
              </Link>
              <Link href='/dashboard'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}>
                <MenuItem>Meus anúncios</MenuItem>
              </Link>
              <Link href='/dashboard/publish'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>
              <Divider className='divider' />
              <MenuItem onClick={() => signOut()}>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}