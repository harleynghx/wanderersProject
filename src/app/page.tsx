"use client";
import { Typography, Box, AppBar, Toolbar, IconButton, Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import '@fontsource/krona-one';

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        fontFamily: 'helvetica neue',  
      }}
    >
      
      <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Link href="/" passHref>
            <IconButton edge="start" color="inherit" aria-label="home">
              <Image src="/logo.png" alt="Your Logo" width={130} height={1}/>
            </IconButton>
          </Link>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'white'}}>
            
          </Typography>
          <Button color="inherit" sx={{ color: 'white' }}>my</Button>
          <Button color="inherit" sx={{ color: 'white' }}>About</Button>
          <Button color="inherit" sx={{ color: 'white' }}>Contact</Button>
        </Toolbar>
      </AppBar>

      <Typography
        variant="h1"
        sx={{
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: '6rem',
          fontFamily: 'Helvetica Neue',
          transform: 'scaleX(2)',
          marginBottom: '2rem',
        }}
      >
        WANDERERS
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: 'white',
          position: 'absolute',
          bottom: '20px',
          fontSize: '0.875rem',
        }}
      >
        WANDERING AROUND THE BUSH
      </Typography>
    </Box>
  );
};

export default Home;