import React from 'react';
import Slider from '../components/layout/banner/Slider';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import classes from './Resume.module.css';
import slider1 from "../img/resume/0179001.jpg";
import slider2 from "../img/resume/i.webp";
import slider3 from "../img/resume/map.png";
import map from "../img/Map.png";
import slider4 from "../img/resume/slider4.webp";
import slider5 from "../img/resume/slider5.webp";
import slider6 from "../img/resume/slider6.webp";
import slider7 from "../img/resume/slider7.webp";
import slider8 from "../img/resume/slider8.webp";
import slider9 from "../img/resume/slider9.webp"
import years from "../img/resume/20years.png";
import protection from "../img/resume/protection.png";
import furniture from "../img/resume/furniture.png";
import wellet from "../img/resume/wallet.png";
import clock from "../img/resume/clock.png";
import approved from "../img/resume/approved.png";
            

const Resume = () => {
    const baner1 = {
        title: "Основана в 1903 году",
        text: "За всю историю предприятия мы выпустили более десяти тысяч единиц продукции.",
        image: slider1
    }
    const baner2 = {
        title: "Многочисленные награды",
        text: "Стабильно развивающее предприятие - это не только уверенность в завтрашнем дне для сотрудника, который работает на этом предприятии, но и финансовая опора для целого государства в целом.",
        image: slider2
    }
    const baner3 = {
        title: "Только качественные материалы",
        text: "Высокая степень подготовки на стадии обучения и постоянное совершенствование навыков каждого сотрудника в процессе работы",
        image: slider3
    }
    const baner4 = {
        title: " ",
        text: "Сложные формы ",
        image: slider4
    }
    const baner5 = {
        title: " ",
        text: " Современное оборудование",
        image: slider5
    }
    const baner6 = {
        title: "",
        text: "точная присадка",
        image: slider6
    }
    const baner7 = {
        title: " ",
        text: "  ",
        image: slider7
    }
    const baner8 = {
        title: " ",
        text: "наличие на складе",
        image: slider8
    }
    const baner9 = {
        title: " ",
        text: " только качественная фурнитура ",
        image: slider9
    }
    
  
    return (
        <div>
      <Header/>            
            <div className="content">
                <div className={classes.resume_top} >
                    <Slider baner={[baner1, baner2, baner3]} />
                 
                </div>
                <div className={classes.resume_center}>
                    <h2>Мы рады вас видеть в нашем магазине. У нас представлен большой ассортимент корпусной мебели собственного производства, также можно приобрести ортопедические матрасы, компьютерные кресла и бытовую технику для кухни. Производим распил и кромление ЛДСП. Изготавливаем МДФ фасады. Изготавливаем мебель по индивидуальным размерам.</h2>

                    <div className={[classes.resume_info, classes.phone].join(' ')}>
                        <div className={classes.line_value} >
                            <a href="tel:+79381502464" data-group-track-code="6c6de968WAT_Mv9thQDxPGMc2z9FNd9-vkMldQ" data-group-track-type="link">+7&nbsp;(938)&nbsp;150-24-64</a> 
                        </div>
                    </div>
                    <div className={[classes.resume_info, classes.time].join(' ')}>
                        <div className={classes.line_value}>
                           <span className={classes.time_status}>
                                <span className={[classes.time_status_cur, classes.status_close].join(' ')}>Открыто</span>
                               <span className={classes.time_status_cur}>
                                    Открыто до 18:00
                               </span>
                           </span> 
                        </div>
                    </div>
                    <div className={[classes.resume_info, classes.adress].join(' ')}>
                        <div className={classes.line_value}>
                            <a href="https://yandex.ru/maps/org/bikert_mebel/165257554253/?from=tabbar&ll=38.923891%2C47.212078&mode=search&sctx=ZAAAAAgCEAAaKAoSCXvBpzl5XUNAEZlnJa34lEdAEhIJhNkEGJY%2Fnz8R1xNdF35wjj8iBgABAgMEBSgKOABAywdIAWoCcnWdAc3MTD2gAQCoAQC9AQw9Id7CAQvN0vjQ5wTuuYWUBOoBAPIBAPgBAIICKtCx0LjQutC10YDRgiDQvNC10LHQtdC70Ywg0YLQsNCz0LDQvdGA0L7Qs4oCAJICAzk3MZoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=38.923891%2C47.212078&source=serp_navig&sspn=0.025663%2C0.011902&text=бикерт%20мебель%20таганрог&z=16"  className={classes.address_link}>Александровская улица, 85-2, Таганрог</a>
                        </div>
                    </div>
                    <div className={[classes.resume_info, classes.map].join(' ')}>
                        <div className={classes.line_value}>
                            <img className={classes.map_image} src={map} alt="карта" />
                        </div>
                    </div>
                </div>
                <div className={classes.resume_message} >
                    <ul>
                        <li>   Начиная с 2002 года, компания претерпела большие перемены. Было полностью модернизировано оборудование, увеличились производственные площади, запущена новая линия ламинирования древесно-стружечных плит, составляющих основу для выпускаемой продукции. Проводятся мероприятия по автоматизации производства, решаются вопросы улучшения качества материалов и комплектующих.
                   </li>
                        <li>   И сегодня мы являемся динамично развивающемся предприятием, выпускающим постоянно расширяемый ассортимент всех видов корпусной мебели, и увеличиваем линейку цветов и фурнитуры, которые используются в изготовлении нашей продукции. Контроль, осуществляемый на всех этапах производственного цикла, позволяет изготовлять продукцию, отвечающую высоким современным требованиям.
                    </li>
                        <li>    Отличное качество, безупречный дизайн и демократичные цены – вот что отличает нашу мебель. Высокий профессионализм работников фабрики позволяет изготавливать красивую и качественную мебель по невысокой стоимости и в самые короткие сроки.
                   </li>
                    </ul>
                </div>
                <Slider baner={[baner4, baner5, baner6, baner7, baner8, baner9]} />
                <div className={classes.resume_history} >
                   <ul>
                    <li>
                            <h3>2005 г.</h3>
                            <span>В 2005 году мы продолжали развивать фабрику Бест Мебель – был куплен третий цех. Для улучшения характеристик выпускаемой продукции на предприятии внедрили систему внутреннего контроля качества, благодаря чему количество брака свелось к минимуму. Количество сотрудников на фабрике достигло 60 человек.</span>
                    </li>
                    <li>
                            <h3>2009 г.</h3>
                            <span>В 2009 году объёмы производства продолжали расти, поэтому потребовалось радикальное расширение площадей. Вместо трех цехов был приобретен единый производственный комплекс, что ещё сильнее снизило издержки при производстве мебели. Начался первый этап внедрения автоматизации производства. В 2010 году окончательно сформировались долгосрочные отношения с поставщиками продукции, проводятся программы по улучшению качества обслуживания и повышению качества комплектующих. В этот период была запущена доставка мебели собственного производства в г. Москва.</span>
                    </li>
                    <li>
                            <h3>2014 г.</h3>
                            <span>В 2014 году фабрика Бест Мебель выигрывает крупные тендеры в сфере государственных закупок. Разработана концепция собственного интернет-магазина, который полностью интегрирован с производством мебели, фактически является его структурным подразделением.</span>
                    </li>
                    <li>
                            <h3>2018 г.</h3>
                            <span>В 2018 году мы разработали конфигуратор мебели и произвели существенные перемены в дизайне сайта. Благодаря конфигуратору у покупателей появилась возможность выбора дополнительных параметров, что сильно упростило процесс покупки. Помимо этого, была организована доставка в г. Нижний Новгород, что расширило возможности для дальнейшего роста и открыло новые направления в производстве.</span>
                    </li>
                    <li>
                            <h3>2021 г.</h3>
                            <span>В 2021 году был модернизирован конфигуратор мебели на сайте и теперь нашим клиентам доступна 3D-визуализация моделей. Помимо этого, мы продолжаем наращивать темп работы и разрабатываем новые модели, число которых составляет более 35000 позиций. В начале года была запущена доставка мебели нашего производства в г. Ярославль и Калуга. </span>
                    </li>
                   </ul>
                </div>
                <div className={classes.resume_footer} >
                    <h2>Наши достижения</h2>
                    <div className={classes.resume_footer_box} >
                        <div className={classes.resume_footer_item} >                            
                            <div className={classes.resume_footer_item_image} >
                                <div className={classes.resume_footer_item_border} >
                                <img className={classes.resume_footer_image} src={years} alt="20 лет на рынке" />
                                <h4>20 лет на рынке</h4>
                            </div>
                            </div>
                            <div className={classes.resume_footer_item_text} >
                                20 лет мы производим качественную и недорогую мебель. Только за последние 1,5 года мы обеспечили хорошей мебелью население небольшого города. За это время множество людей стали нашими постоянными клиентами и продолжают покупать нашу продукцию.
                                </div>
                        </div>
                        <div className={classes.resume_footer_item} >                          
                            <div className={classes.resume_footer_item_image} >
                                <div className={classes.resume_footer_item_border} >
                                <img className={classes.resume_footer_image} src={protection} alt="Качество" />
                                <h4>Качество</h4>
                            </div>
                            </div>
                            <div className={classes.resume_footer_item_text} >
                                За последний год объемы производства выросли в три раза. Продолжает повышаться качество мебели, брак постепенно стал нонсенсом, и шанс встретить бракованное изделие исчезающе мал. Процент бракованных изделий на текущий момент составляет не более 2.7% и продолжает уменьшаться.
                            </div>
                        </div>
                        <div className={classes.resume_footer_item} >                            
                            <div className={classes.resume_footer_item_image} >
                                <div className={classes.resume_footer_item_border} >
                                <img className={classes.resume_footer_image} src={furniture} alt="Огромный ассортимент" />
                                <h4>Огромный ассортимент</h4>
                            </div>
                            </div>
                            <div className={classes.resume_footer_item_text} >
                                Мы расширяем модельный ряд мебели, увеличиваем выбор фурнитуры для наших изделий и расширяем дополнительный ассортимент сопутствующих товаров, мы стремимся, чтобы любой покупатель смог подобрать мебель и аксессуары к ней по своему вкусу. 
                            </div>
                        </div>
                        <div className={classes.resume_footer_item} >                           
                            <div className={classes.resume_footer_item_image} >
                                <div className={classes.resume_footer_item_border} >
                                <img className={classes.resume_footer_image} src={wellet} alt="Низкие цены" />
                                <h4>Низкие цены</h4>
                            </div>
                            </div>
                            <div className={classes.resume_footer_item_text} >
                                За счет внедрения автоматизации производственных процессов и использования инновационных технологий и оборудования, себестоимость продукции постоянно уменьшается, поэтому мы можем снижать цены для наших клиентов.
                            </div>
                        </div>
                        <div className={classes.resume_footer_item} >                           
                            <div className={classes.resume_footer_item_image} >
                                <div className={classes.resume_footer_item_border} >
                                <img className={classes.resume_footer_image} src={clock} alt="Быстрое выполнение заказа" />
                                <h4>Быстрое выполнение заказа</h4>
                            </div>
                            </div>
                            <div className={classes.resume_footer_item_text} >
                                Сейчас компания движется в направлении полной локализации производства мебельных комплектующих. Помимо этого, работают три отдельные производственные линии, чтобы Вы могли приобрести себе качественную и недорогую мебель в кратчайшие сроки.
                            </div>
                        </div>
                        <div className={classes.resume_footer_item} >                            
                            <div className={classes.resume_footer_item_image} >
                               <div className={classes.resume_footer_item_border} > 
                                <img className={classes.resume_footer_image} src={approved} alt="Квалифицированный персонал" />
                                <h4>Квалифицированный персонал</h4>
                              
                            </div>
                            </div>
                            <div className={classes.resume_footer_item_text} >
                                У нас работают профессионалы – многие сотрудники более 10 лет трудятся на мебельном производстве. Все работники предприятия постоянно повышают свою квалификацию, регулярно проходят обучение, чтобы качество нашей мебели становилось еще выше.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Resume;