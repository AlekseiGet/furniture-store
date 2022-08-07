import React from 'react';
import { useState } from 'react';
import MyModal from './MyModal/MyModal';
import MyButton from './ui/button/MyButton';
import MyInput from './ui/input/MyInput';

const NewReviews = ({ page, setPage, totalComent, create }) => {
    const [forInput, setForInput] = useState({ nameInput: '', messegInput: "" })
    const [modal, setModal] = useState(false);

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            name: forInput.nameInput,
            body: forInput.messegInput
        }
        create(newPost);
        setModal(false)
        setForInput({ nameInput: '', messegInput: "" });
}

    function increment() {
        if (page > 1) {
           setPage(page - 1);
         
        }   
    }
    function decrement() {
        if (page <= totalComent) {
            setPage(page + 1);
            
        }    
    }
    return (
        <div className='new_reviews' >
            <MyButton onClick={increment}>ещё</MyButton>
           <MyButton onClick={() => setModal(true)}>Оставить отзыв</MyButton>
            <MyButton onClick={decrement}>ещё</MyButton>  
            <MyModal visibel={modal} setVisibel={setModal}>
                <MyInput
                    type="text"
                    placeholder="Ваше имя"
                    value={forInput.nameInput}
                    onChange={e => setForInput({ ...forInput, nameInput: e.target.value })}//функция изменяющая значение инпута
                />
                <MyInput
                    type="text"
                    placeholder="Ваш отзыв"
                    value={forInput.messegInput}
                    onChange={e => setForInput({ ...forInput, messegInput: e.target.value })}//функция изменяющая значение инпута

                />
                <MyButton onClick={addNewPost}>Отправить отзыв</MyButton>
            </MyModal>
        </div>
    );
};

export default NewReviews;