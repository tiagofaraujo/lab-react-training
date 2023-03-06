import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import LikeButton from './components/LikeButton.jsx';
import ClickablePicture from './components/ClickablePicture';
import img from './assets/images/maxence.png'
import imgClicked from './assets/images/maxence-glasses.png'
import Dice from './components/Dice';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
    <h1>IdCard</h1>
<IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
  <h1>Greetings</h1>
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>

<h1>Random</h1>
<Random min={1} max={6}/>
<Random min={1} max={100}/>

<h1>BoxColor</h1>
<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />

<h1>LikeButton</h1>
<LikeButton />

<h1>ClickablePicture</h1>
<ClickablePicture
  img={img}
  imgClicked={imgClicked}
/>
<h1>Dice</h1>
<Dice />

<h1>Carousel</h1>
<Carousel
  images={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/>

    </div>
  );
}

export default App;