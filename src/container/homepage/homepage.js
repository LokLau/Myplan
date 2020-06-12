import React, {Component} from 'react';

import main1 from '../../asset/main1.png';
import main2 from '../../asset/main2.png';
import main3 from '../../asset/main3.png';

import styles from './homepage.module.css';
import { NoEmitOnErrorsPlugin } from 'webpack';


class HomePage extends Component {
     state = {
       xPosition: [0,600,1200],
       images: {
           image1: main1,
           image2: main2,
           image3: main3,
       }

     };


     leftButtonHandler = (event) => {
       event.preventDefault();

       const copyXpos = this.state.xPosition.slice();
       const newFirstItem = copyXpos.pop()
       copyXpos.unshift(newFirstItem);
       this.setState({xPosition: copyXpos});
       

       
     } 

     imageStyle = (idx) => {

        let style = null;

        if (idx === 0) {
            style = {
              transition: 'none',
                left: this.state.xPosition[idx], 

            }
            }else {
                style = {
                    transition: '0.5s ease-in-out',
                    left: this.state.xPosition[idx], 
                }
            }
            return style;
        }


    render(){

     const hero = [];
     for (let key in this.state.images){
         hero.push(this.state.images[key]);
     }

        return(
            <div>

                <div className={styles.SlideWrapper}>
                
                <div className={styles.Wrapper}>
                    {hero.map((val,idx)=>{

                          return <img key={idx} 
                                  className={styles.Img}
                                  src={val} 
                                  style={this.imageStyle(idx)}

                                  />
                    })}
                </div>

              </div>
                 <button type='button' onClick={(event)=>this.leftButtonHandler(event)}> &lt; </button>

            </div>

        )
    }
}


export default HomePage;
