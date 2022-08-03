import { useState } from 'react';
//загрузка крутилки
//обработчик ошибок
// fetchPosts
export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const fetching = async (...args) => {
        console.log("work");
        try {
            console.log(...args);
            setIsLoading(true);
            await callback(...args);
        } catch (e) {
            console.log("catch");
            setError(e.message);//Два отработчика ошибок не работают!!!
        } finally {
            console.log("finally");
            setIsLoading(false);
        }
    }
    
    return [fetching, isLoading, error ]
}
