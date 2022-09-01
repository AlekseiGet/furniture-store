import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useFetching } from '../Hooks/useFetching';
import ReviewsServise from './Api/ReviewsServise';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NewReviews from './NewReviews';
import upsImage from "../img/ups.jpg"
import { getComentCount } from '../utils/comentsPage';
import { useMemo } from 'react';
import { useRef } from 'react';

const Reviews = () => { 
    const [coment, setComent ] = useState([]);
    const [totalComent, setTotalComent] = useState(0);
    const [limit, setLimit] = useState(4);
    const [page, setPage] = useState(1);
    const [modal, setModal] = useState(false);

    let pagesArray = [];
  for (let i = 0; i < totalComent; i++) {
    pagesArray.push(i + 1) 
  }

    async function fetchPosts(coment, setComent) {
        const response = await ReviewsServise.getComent(limit, page) 
      setComent(response.data);
      const totalComents = (response.headers['x-total-count']) ; 
      setTotalComent(getComentCount(totalComents, limit) )
     }

    useEffect(() => {
       fetchPosts(coment, setComent);
       
    }, [page])

  const createComent = (newComent) => {
    setComent([...coment, newComent]);
  }
  let [visibl, setVisibl] = useState("reviews_conteiner content");
  const opacity = useRef();
  const observer = useRef();

  useEffect(() => {
    var callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
        setVisibl("reviews_conteiner content start");

      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(opacity.current)
  })



    return (     
        <div ref={opacity} className='requesites'>
            <h2>Отзывы наших клиентов</h2>   
                     {coment.length < 1
                        ? <h2> Загрузка</h2> 
                        : <div  className={visibl} >
                          {coment.map( e => 
                          <div key={e.id} className="reviews_item">
                           <div className="reviews_item_image">
                                      <img src={upsImage} alt="ups" />
                           </div>
                            <div className="reviews_item_text">
                               <div className="reviews_item_span">
                                <span className='reviews_name'> {e.name}</span>
                                <span className='reviews_text'>{e.body}</span>
                              </div>
                            </div>
                          </div>
                    )}
                        </div>
                    }   
        <NewReviews page={page} setPage={setPage} totalComent={totalComent} create={createComent} /> 
        </div>
    );
};

export default Reviews;