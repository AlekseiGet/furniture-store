import React from 'react';
import Header from '../components/layout/Header';
import Body from '../components/layout/Body';
import Footer from '../components/layout/Footer';
import Reviews from '../components/Reviews';
import Message from '../components/layout/Message';
import Awards from '../components/layout/Awards';
import Banner from '../components/layout/banner/Banner';

const Home = () => {
    return (   
            <div className="wrapper">
                <Header />
                <div className="header_background">
                    <Banner />
                </div>
                <h1 className='title'>Мы рады вас видеть в нашем магазине. У нас представлен большой ассортимент корпусной мебели собственного производства, также можно приобрести ортопедические матрасы, компьютерные кресла и бытовую технику для кухни. Производим распил и кромление ЛДСП. Изготавливаем МДФ фасады. Изготавливаем мебель по индивидуальным размерам.</h1>
                <Body />
            <h1> Наши награды !!</h1>
                <Awards />
                <Message />
                <Reviews />
                <Footer />
            </div> 
    );
};

export default Home;