import React, { useContext } from 'react';
import Header from '../components/layout/Header';
import { EntranceContext } from '../context/context';
import ReviewsServise from '../components/Api/ReviewsServise';
import Footer from '../components/layout/Footer';
import { useState } from 'react';
import { getComentCount } from '../utils/comentsPage';
import upsImage from "../img/ups.jpg";
import { useEffect } from 'react';
import NewReviews from '../components/NewReviews';
import classes from "./Reviews.module.css"

const Reviews = () => {
    const [comSee, setComSee] = useState([classes.reviews_item, classes.reviews_item_see].join(' '))
    const [com, setCom] = useState([]); 
    const [coment, setComent] = useState([]);
    const [totalComent, setTotalComent] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const { reviewsSee, setReviewsSee } = useContext(EntranceContext);
    
    async function fetchPosts(coment, setComent) {
        const response = await ReviewsServise.getComent(limit, page)
        setComent(response.data);
        const totalComents = (response.headers['x-total-count']);
        setTotalComent(getComentCount(totalComents, limit));
     
    }
   
    useEffect(() => {
        fetchPosts(coment, setComent);
    }, [page])
   
    const createComent = (newComent) => {
        setComent([...coment, newComent]);
    }
    
    async function fetchPost(com, setCom) {
              const response = await ReviewsServise.getComentById(reviewsSee)
              setCom(response.data);
              console.log(response.data);  
          }

    useEffect(()=>{
      if (reviewsSee) {
          fetchPost(com, setCom);  
    }
    },[])
    
   

    return (
        <div>
            <Header />
            <div className={classes.content}>
                <div className="content">
                 <NewReviews page={page} setPage={setPage} totalComent={totalComent} create={createComent} /> 
                  {coment.length < 1
                      ? <h2> Загрузка</h2>
                      : <div >
                         { reviewsSee
                                ? <div onClick={() => setComSee(classes.reviews_item) } className={comSee} >
                                    <div className={classes.reviews_item_image}>
                                        <img src={upsImage} alt="ups" />
                                    </div>
                                    <div className={classes.reviews_item_text}>
                                        <div className={classes.reviews_item_span}>
                                            <span className={classes.reviews_name}> <b>Имя:</b> {com.id} </span>
                                            <span className={classes.reviews_email}> <b>Email:</b> {com.title} </span>
                                            <span className={classes.reviews_text}> <b>Отзыв:</b> {com.body} </span>
                                        </div>
                                    </div>
                                </div>
                            : <span></span>
                         }
                        {coment.map(e =>               
                            <div  key={e.email} className={classes.reviews_item} >
                                  <div className={classes.reviews_item_image}>
                                           <img src={upsImage} alt="ups" />
                                        </div>
                                         <div className={classes.reviews_item_text}>
                                            <div className={classes.reviews_item_span}>
                                        <span className={classes.reviews_name}> <b>Имя:</b> {e.name}</span>
                                        <span className={classes.reviews_email}> <b>Email:</b> {e.email}</span>
                                               <span className={classes.reviews_text}> <b>Отзыв:</b> {e.body}</span>
                                           </div>
                                       </div>
                                  </div>
                        )}
                      </div>
                  }  
                    <NewReviews page={page} setPage={setPage} totalComent={totalComent} create={createComent} />        
             <Footer />    
            </div> 
           </div>
        </div>
    );
};

export default Reviews;