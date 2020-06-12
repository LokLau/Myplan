import React, { Component } from 'react';

import styles from './App.module.css';
import Layout from './component/layout/layout';
import Homepage from './container/homepage/homepage';

class App extends Component{

render(){

  return(
    <div className={styles.App} >
       <Layout>
         <Homepage />
       </Layout>
       
    </div> 
  )
}

}
export default App;

/*
<Layout>
    <Route path='/home'   component={Home} />
    <Route path='/contactus'  component={ConactUs}  />
</Layout>

*/