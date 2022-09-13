import React, { useContext } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { EntranceContext } from '../context/context';
import MyButton from '../components/ui/button/MyButton';
import MyInput from '../components/ui/input/MyInput';
import classes from './Entrance.module.css';

const Entrance = () => {
    const { isAuth, setIsAuth } = useContext(EntranceContext);
    const buttonLogin =  event => {
        event.preventDefault();
        setIsAuth(true); 
        localStorage.setItem('auth', "true");  
        alert("Добро пожаловать") 
    }
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        alert("Досвидания");
    }

    return (
        <div>
            <Header /> 
            <div className={classes.entrance_conteiner}>    
              <div className="content">
                    <div className={classes.entrance_box}>             
                         <h1>Вход</h1>
                         <h2>Логин</h2>
                         <form onSubmit={buttonLogin}>
                            <MyInput type="text" placeholder="Введите имя" />
                            <MyInput type="current-password" placeholder="Введите пароль" />
                            <div className={classes.entrance_button_enter} >
                               <MyButton >Войти</MyButton>  
                            </div>                                             
                         </form>
                        <div className={classes.entrance_button_exit}>
                            <MyButton onClick={logout} >Выйти</MyButton>
                        </div>
                        
                    </div>      
                </div> 
             <Footer /> 
            </div>
                      
        </div>
    );
};

export default Entrance;