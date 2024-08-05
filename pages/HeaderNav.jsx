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

export default function () {
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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="">Title</div>
      <List>
        x
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
