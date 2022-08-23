
import React from 'react';
import { useState } from 'react';
import MyButton from '../../ui/button/MyButton';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Banner.module.css';
import { FurnityreBodyIcon } from '../../../context/context';
import stock from "../../../img/stock.png";

const mebel = FurnityreBodyIcon._currentValue[0].image;


class Banner extends React.Component {
    
    render() {
        return (
            <div>
                <div className={classes.container} >
                    <div className={classes.row}>
                        <div className={classes.col}>
                            
                            <Carousel>

                                <Carousel.Item>
                                    <div className={classes.carousel_item}>
                                       
                                    <Carousel.Caption>
                                            <div className={classes.carousel_box}>
                                                <h3 className={classes.carousel_title}>К школе готов ?!</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                      
                                                <MyButton>Узнать больше</MyButton>
                                        </div>
                                    </Carousel.Caption>
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div className={classes.carousel_item}>
                                        <img className={classes.carousel_image}               
                                           src={stock}
                                           alt="stock" />
                                    <Carousel.Caption>
                                            <div className={classes.carousel_box}>
                                                <h3 className={classes.carousel_title}>У нас СКИДКИ Акция!!!</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <MyButton>Узнать больше</MyButton>
                                        </div>
                                    </Carousel.Caption>
                                  </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div className={classes.carousel_item}>
                                   
                                    <Carousel.Caption>
                                       <div className={classes.carousel_box}>
                                                <h3 className={classes.carousel_title}>Только лучшее для вас !!!</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                                <MyButton>Узнать больше</MyButton>
                                     </div>
                                    </Carousel.Caption>
                                   </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div className={classes.carousel_item}>

                                        <Carousel.Caption>
                                            <div className={classes.carousel_box}>
                                                
                                                <span className={classes.carousel_span}> <span className={classes.carousel_big}> 0</span> % <br/>первый взнос</span>
                                                <span className={classes.carousel_span}> <span className={classes.carousel_big}>- 0</span> % <br/>переплата </span>
                                                <span className={classes.carousel_span}> <span className={classes.carousel_big}>- 24</span><br/>месяца </span>
                                                <span className={classes.carousel_big}>на всё !</span>  
                                                 
                                                <br /> <MyButton>Узнать больше</MyButton>
                                                                                 
                                            </div>
                                              
                                        </Carousel.Caption>
                                    </div>
                                </Carousel.Item>


                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Banner;