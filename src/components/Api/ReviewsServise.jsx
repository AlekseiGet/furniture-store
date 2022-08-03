import axios from 'axios';
import React from 'react';

export default class ReviewsServise {
    static async fetchPosts() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        return response;
    }
} 