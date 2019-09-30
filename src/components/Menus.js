import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
//import MenuItem from '@material-ui/core/MenuItem';

export default class Menus extends Component {

  render() {
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" href="/" >
          Home
      </Button>
        <Button aria-controls="simple-menu" aria-haspopup="true" href='/Allexplained/' variant='text'>
          View All
      </Button>


        <Menu
          id="simple-menu"

          keepMounted


        >

        </Menu>
      </div>
    )
  }
}
