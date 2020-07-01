import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {withRouter } from 'react-router-dom';
import First from './notes';
import Second from './attachment';
import Third from './stage history';
import Competitors from './competitors';
import Open_activities from './open activities';
import Closed_activities from './closed activities';
import Contact_roles from './contact roles';
import emails from './emails';
import Emails from './emails';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const selectComponent = ()=>{
      if(props.match.path==='/first'){
          return <First/>

      } else if (props.match.path==='/second'){
          return <Second />
      }else if (props.match.path==='/third')
      {
        return <Third />
      }
      else if (props.match.path==='/competitors')
      {
        return <Competitors />
      }
      else if (props.match.path==='/open activities')
      {
        return <Open_activities />
      }
      else if (props.match.path==='/closed activities')
      {
        return <Closed_activities />
      }
      else if (props.match.path==='/contact roles')
      {
        return <Contact_roles />
      }
      else if (props.match.path==='/emails')
      {
        return <Emails />
      }
  
  }
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
      <ListItem button onClick={()=>props.history.push('/first')}>
            <ListItemText primary="Notes" />
          </ListItem>
          <ListItem button onClick={()=>props.history.push('/second')}>
            <ListItemText primary="Attachments" />
          </ListItem>
          <ListItem button onClick={()=>props.history.push('/third')}>
            <ListItemText primary="Stage History" />
          </ListItem>
          <ListItem button onClick={()=>props.history.push('/competitors')}>
            <ListItemText primary="Competitors" />
          </ListItem>
          <ListItem button onClick={()=>props.history.push('/open activities')}>
            <ListItemText primary="Open Activities" />
          </ListItem>
          <ListItem button onClick={()=>props.history.push('/closed activities')}>
            <ListItemText primary="Closed Activities " />
          </ListItem>
          <ListItem button onClick={()=>props.history.push('/contact roles')}>
            <ListItemText primary="Contact Roles" />
          </ListItem>
          <ListItem button onClick={()=>props.history.push('/emails')}>
            <ListItemText primary="Emails " />
          </ListItem>
         

      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
           
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {
            selectComponent()
        }
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default withRouter(ResponsiveDrawer);