import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import classes from "./Stocks.module.css";
import stocks1 from "../img/stocks/stocks1.jpg";
import stocks2 from "../img/stocks/stocks2.jpg";
import stocks3 from "../img/stocks/stocks3.jpg";
import stocks4 from "../img/stocks/stocks4.jpg";
import stocks5 from "../img/stocks/stocks5.jpg";
import stocks6 from "../img/stocks/stocks6.jpg";
import MySale from '../components/furniture/MySale';

const Stocks = () => {

    return (
        <div >
            <Header />
            <div className={classes.stocks } >
            <h1>Акции и скидки на сегодня !</h1>
               <div className={classes.stocks__item}>
                <div className={classes.stocks__item_title}>
                    <h2>Бери больше плати меньше !</h2>
                </div>
                <div className={classes.stocks__item_image}>
                    <img src={stocks1} alt="скидка" />
                </div>
                <div className={classes.stocks__item_text}>
                        Скидка действует в рамках одного заказа и не распространяется на акцию "Мега Бонус", а так же на товары из раздела Текстиль. Акция не действует на товары стоимостью менее 3000 руб. Максимальная сумма скидки 50000 руб.
                </div>
               </div>
                <div className={classes.stocks__item}>
                    <div className={classes.stocks__item_title}>
                        <h2>
                            ВОЗВРАЩАЕМ 1% ОТ ПОКУПКИ НА БОНУСНЫЙ СЧЕТ!
                        </h2>
                    </div>
                    <div className={classes.stocks__item_image}>
                        <img src={stocks2} alt="бонусы" />
                    </div>
                    <div className={classes.stocks__item_text}>
                        Интернет-магазин недорогой мебели BickertMebel открывает бонусный счет для своих клиентов!

                      <br/>  При покупке мебели, вы получаете 1 % на свой счет от стоимости заказа. Теперь, зайдя на сайт, авторизованный пользователь будет видеть начисленные бонусы, которыми сможет воспользоваться при последующем приобретении.

                        <br /> Счет накопительный, а значит бонусы с каждой купленной единицы плюсуется. Вы можете использовать его для покупки следующего изделия вплоть до 50 % оплаты товара бонусными рублями.

                        <br /> BickertMebel ‒ забота о своих клиентах!
                      </div>
                </div>
                 <div className={classes.stocks__item}>
                <div className={classes.stocks__item_title}>
                        <h2>КУПОНЫ НА СКИДКУ!!!</h2>
                </div>
                <div className={classes.stocks__item_image}>
                        <img src={stocks3} alt="купоны" />
                </div>
                <div className={classes.stocks__item_text}>
                        Вступай в нашу группу Вконтакте и получи скидку до 200 руб. на каждое заказанное изделие!
                       <br/> Не упусти возможность купить мебель со скидкой! Купоны на скидку находятся в обсуждениях группы.
                </div>
               </div>
                <div className={classes.stocks__item}>
                    <div className={classes.stocks__item_title}>
                        <h2>
                            НАЙДЕТЕ ДЕШЕВЛЕ - МЫ СДЕЛАЕМ СКИДКУ!
                        </h2>
                    </div>
                    <div className={classes.stocks__item_image}>
                        <img src={stocks4} alt="дешевле?.." />
                    </div>
                    <div className={classes.stocks__item_text}>
                        BestMebelShop - интернет-магазин при фабрике мебели. Поэтому наша компания может предложить покупателю самые низкие цены на корпусную мебель. Если же Вы нашли изделие дешевле, чем у нас - мы сделаем скидку, от которой Вы не сможете отказаться!

                      <br/>  Для получения скидки укажите в комментариях к заказу ресурс, на котором по Вашему мнению, более выгодная цена.
                      </div>
                </div>
                <div className={classes.stocks__item}>
                    <div className={classes.stocks__item_title}>
                        <h2>
                            ЛОВИ МОМЕНТ - СКИДКИ ДО 50%!
                        </h2>
                    </div>
                    <div className={classes.stocks__item_image}>
                        <img src={stocks5} alt="лови момент" />
                    </div>
                    <div className={classes.stocks__item_text}>
                        Компания BestMebelShop дарит Вам отличную возможность!

                      <br/>  Лови момент! Предложение ограничено!

                        <br /> Успей купить мебель от производителя со скидкой до 50% !

                        <br />  А что для этого нужно?

                        <br />  Все очень просто, оформи заказ и наслаждайся покупкой!
                       </div>
                </div>
                <div className={classes.stocks__item}>
                    <div className={classes.stocks__item_title}>
                        <h2>МЕГА БОНУС!</h2>
                    </div>
                    <div className={classes.stocks__item_image}>
                        <img src={stocks6} alt="скидка" />
                    </div>
                    <div className={classes.stocks__item_text}>
                        Интернет-магазин мебели BestMebelShop предлагает своим покупателям получить уникальные бонусы по акции. Оформив заказ у нас на сайте, Вы получаете мебель в подарок при соблюдении одного условия! Прекрасная новость, не правда ли?

                      <br/>  Если у Вас в корзине:
                      <ul>
                            <li>3 изделия или сумма заказа более 22 000 рублей – Вам доступно одно из 5 бонусных изделий всего за 1 руб!</li>
                            <li> 4 изделия или сумма заказа более 35 000 рублей – Вам доступно одно из 10 бонусных изделий всего за 1 руб!</li>
                            <li>5 изделия или сумма заказа более 50 000 рублей – Вам доступно одно из 15 бонусных изделий всего за 1 руб!</li>
                      </ul>
                        <br /> Спешите принять участие в акции и получить бонусный товар! Количество бонусов товаров ограничено!

                        <br /> Список изделий участвующих в акции:

                       <MySale/>
                        
                 </div>
                </div>
                 <Footer /> 
            </div>                    
        </div>
    );
};

export default Stocks;