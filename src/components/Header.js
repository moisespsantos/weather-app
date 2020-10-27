import React, { Component } from 'react';

import {
     Navbar,
} from "react-bootstrap";

function Header() {
     return (
          <div>
               <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Temperature</Navbar.Brand>
               </Navbar>
          </div>
     );
}

export default Header;



