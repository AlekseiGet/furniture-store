import './css/style.css';
import Header from './components/layout/Header';
import Body from './components/layout/Body';
import Footer from './components/layout/Footer';
import Reviews from './components/Reviews';
import Message from './components/layout/Message';
import Awards from './components/layout/Awards';




function App() {
  return (
    <div className="App">
      <div className="wrapper">
        
        <Header/>
        <h1 className='title'>Мы рады вас видеть в нашем магазине. У нас представлен большой ассортимент корпусной мебели собственного производства, также можно приобрести ортопедические матрасы, компьютерные кресла и бытовую технику для кухни. Производим распил и кромление ЛДСП. Изготавливаем МДФ фасады. Изготавливаем мебель по индивидуальным размерам.</h1>
        <Body/>
        <Awards/>
        <Message/>
        <Reviews/>
        <Footer/>
        </div>
      </div>
 
  );
}

export default App;
