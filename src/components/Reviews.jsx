import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useFetching } from '../Hooks/useFetching';
import ReviewsServise from './Api/ReviewsServise';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import siluet from "../img/siluet.png"
import NewReviews from './NewReviews';
import upsImage from "../img/ups.jpg"

const Reviews = () => { 
    const [coment, setComent ] = useState([]);
   

    async function fetchPosts(coment, setComent) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");   
        setComent(response.data);       
     }
    useEffect(() => {
       fetchPosts(coment, setComent);
       
    }, [])
    
    return (     
        <div className='requesites'>
            <h2>Отзывы наших клиентов</h2>   
                     {coment.length < 1
                        ? <h2> Загрузка</h2> 
                        : <div className="reviews_conteiner content" >
                          {coment.map( e => 
                          <div key={e.id} className="reviews_item">
                           <div className="reviews_item_image">
                                      <img src={upsImage} alt="ups" />
                           </div>
                            <div className="reviews_item_text">
                              <div className="reviews_item_foto">
                               <img src={siluet} alt="ups" />
                              </div>
                               <div className="reviews_item_span">
                                <span className='reviews_name'> {e.name}</span>
                                <span className='reviews_name'> {e.phone} </span>
                                <span>{e.company.catchPhrase}</span>
                              </div>
                            </div>
                          </div>
                    )}
                        </div>
                    }   
                <NewReviews/> 
        </div>
    );
};

export default Reviews;