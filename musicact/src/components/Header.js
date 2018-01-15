import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';


const Header = () => {
  return (
    <div style={ {display:"flex",justifyContent:"center"} }>
      <Link to="/directory">Directory</Link>
      <Link to="/directory/1234">profile</Link>
    </div>
  );
};

export default Header;
