import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './styles/style.module.scss';
import Image from 'next/image';
import Logo from '../public/logo/favicon.png';
import Link from 'next/link';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

export default function Header() {
  const [state, setState] = React.useState({
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 240 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={styles.headerHomeTitle}>ReflexEd</div>
      <List>
        <div className={styles.headerHomeIcon}>
          <Link href={'/'} className={styles.headerHomelink}>HOME</Link>
        </div>
        <div className="">
          <Link href={'/profile'} className={styles.headerUserlink}>USER PROFILE</Link>
        </div>
        <div className="">
          <Link href={'/excersise'} className={styles.headerExerciseLink}>EXCERCISE</Link>
        </div>
        <div className="">
          <Link href={'/quiz'} className={styles.headerQuizLick}>QUIZ</Link>
        </div>
        <div className="">
          <Link href={'/recommended'} className={styles.headerQuizLick}>RECOMMENDED</Link>
        </div>
        <div className="">
          <Link href={'/feedback'} className={styles.headerHelp}>Feedback form</Link>
        </div>
        
      </List>
    </Box>
  );

  return (
    <>
      <div className={styles.headerBlockNav}>
        <Link href='/' className={styles.header}>
          <h1 className={styles.headerTitle}>ReflexEd</h1>
          <Image src={Logo} alt={Logo} className={styles.headerLogoImg} />
        </Link>
        <nav>
          <div>
            {[ 'right'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <MenuIcon />
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
