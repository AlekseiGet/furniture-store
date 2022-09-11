import axios from 'axios';
import React from 'react';

export default class ReviewsServise {
    static async getComent(limit = 1 , page = 1) {
            const response = await axios.get("https://jsonplaceholder.typicode.com/comments", {
                params:{
                    _limit: limit,
                    _page: page
                }
            } );
            return response;      
    }

    static async getComentById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response;
    }



} 