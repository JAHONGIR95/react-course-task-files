import {useState} from 'react'; 

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  color: {
    color: 'red',
  },
}));


const TopBar = () => {
  const classes = useStyles();
  const [appBarState, setAppBarState] = useState(false);
  
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <MenuIcon onClick={ () => setAppBarState(!appBarState)}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Today
          </Typography>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={appBarState} onClose={ ()=> setAppBarState(!appBarState) }>
          <h1 class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button">salom</h1>
      </Drawer>
    </>
  );
};

export default TopBar;
