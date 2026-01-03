import './App.css'
import Header from './components/Header'
import Section from './components/Section'
import ringsIcon from '/images/icons/rings-icon.svg'
import churchImg from '/images/Church.jpg'
import restaurantImg from '/images/restaurant.jpg'
import champagnesIcon from '/images/Champagne.png'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className="container">
      <Header/>
      <h2 className="title text-center text-2xl md:text-3xl !font-extralight !mt-10 uppercase">Օրվա Ծրագիրը</h2>
      <Section icon={ringsIcon} time="15:30" title="Պսակադրություն" locationName="Արտաշատի Սուրբ Հովհանես Եկեղեցի" img={churchImg} address="Հասցեն՝ Արարատի մարզ   ք․ Արտաշատ" locationLink="https://yandex.com/maps/geo/2496643584/?ll=46.164441%2C38.873114&z=13.81"/>
      <Section icon={champagnesIcon} time="17:30" title="Հարսանյաց Հանդիսություն" locationName="Մորենա ռեստորանային համալիր" img={restaurantImg} address="Հասցեն՝ Մասիս, Մխիթար Հերացու փող., 7/8" locationLink="https://yandex.com/maps/org/222913353582/?ll=44.444778%2C40.059849&z=16.77"/>
      <div className='w-[200px] h-[1px] bg-gray-400 !mx-auto !my-10'></div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
