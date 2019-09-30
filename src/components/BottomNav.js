import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//import RestoreIcon from '@material-ui/icons/Restore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
//import FavoriteIcon from '@material-ui/icons/Favorite';
import EmailIcon from '@material-ui/icons/Email';
//import LocationOnIcon from '@material-ui/icons/LocationOn';
import PublicIcon from '@material-ui/icons/Public';
import Mailto from "react-protected-mailto";
//import Linkify from 'react-linkify';
const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  function sendEmail(){
return <Mailto
email="edgar_desabille@yahoo.com"
headers={
  ({ subject: "Question from the website" },
    { cc: "edgar_desabille@yahoo.com" })
}
/>
  }

 



  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="My profile" icon={<AccountCircleIcon/>} href='/MyProfile/' />
      <BottomNavigationAction label="E-mail me" icon={<EmailIcon />} onClick={sendEmail()}/>
      <BottomNavigationAction label='e-commerce' icon={< PublicIcon />} href="emdwoodcarvingandfurniture.netlify.com/." />
    </BottomNavigation>
  );
}