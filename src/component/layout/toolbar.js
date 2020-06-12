import React from 'react';

import classes from './toolbar.module.css';

const toolbar = () => {

    return (
       <div className={classes.Toolbar}>
           <ul>
              <li>Home</li>
              <li>Products</li>
              <li>Contact Us</li>
           </ul>
       </div>
    );

};


export default toolbar;
