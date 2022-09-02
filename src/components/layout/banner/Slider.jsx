import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Slider.module.css';




class Slider extends React.Component {

   
   
    render() {
       
        return (
            <div>
                <div className={classes.container} >
                    <div className={classes.row}>
                        <div className={classes.col}>                         
                            <Carousel>
                                {this.props.baner.map(der => 
                                    <Carousel.Item key={der.id}>
                                        <div className={classes.carousel_item} >
                                          <img className={classes.carousel_image}
                                                src={der.image}
                                            alt="логотип" />
                                          <Carousel.Caption>
                                            <div className={classes.carousel_box}>
                                                <h3 className={classes.carousel_title}>{der.title } </h3>
                                                <p className={classes.carousel_text}>{der.text} </p>                                            
                                            </div>
                                        </Carousel.Caption>
                                    </div>
                                </Carousel.Item>
                                  ) }
                                 
                                
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Slider;