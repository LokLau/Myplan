import React from 'react';

import Toolbar from './toolbar';

const layout = (props) => {

    return (
        <React.Fragment>
            <Toolbar />
            
             <main>
                {props.children}
             </main>


        </React.Fragment>

    );


};


export default layout;
