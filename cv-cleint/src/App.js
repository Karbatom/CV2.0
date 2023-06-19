// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';

import Landscape_00 from './images/Landscape parallax 00.png';
import Landscape_01 from './images/Landscape parallax 01.png';
import Landscape_02 from './images/Landscape parallax 02.png';
import Landscape_03 from './images/Landscape parallax 03.png';
import Landscape_04 from './images/Landscape parallax 04.png';
import Landscape_05 from './images/Landscape parallax 05.png';

import Cave_00 from './images/Cave_parallax_00.png';
import Cave_01 from './images/Cave_parallax_01.png';
import Cave_02 from './images/Cave_parallax_02.png';
import Cave_03 from './images/Cave_parallax_03.png';

import Dinosaur_fossils from './images/Dinosaur_fossils.png';

import About from './About.js';
import Profile from './Profile.js';
import Services from './Services.js';
import Education from './Education.js';
import EducationImproved from './Education-improved.js';
import Hobby from './Hobby.js';
import Contacts from './Contacts.js';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <div className='parallax-section'>
          <img src={Landscape_05} alt='img_01' className='lan-05'/>
          <img src={Landscape_04} alt='img_02' className='lan-04'/>
          <img src={Landscape_03} alt='img_03' className='lan-03'/>
          <img src={Landscape_02} alt='img_04' className='lan-02'/>
          <img src={Landscape_01} alt='img_05' className='lan-01'/>
          <img src={Landscape_00} alt='img_06' className='lan-00'/>
          <div className='media-title media-title-main'>
            <div>TOMÁŠ</div>
            <div>KARBAN</div>
          </div>
        </div>
        <section className='static-section'>
          <div className='main'>
              <div className='container'>
                <div className='intro'>
                  <p>
                    <strong className='Title'>Úvod</strong>
                  </p>
                  <br />
                  <div className='inner-container'>
                    <About />
                    <Profile />
                  </div>
                </div>
              </div>
            </div>
        </section>
        <section className='static-section'>
          <div className='main'>
            <div className='container'>
              <div className='services'>
                <p>
                  <strong className='Title'>Nabízím</strong>
                </p>
                <br />
                <Services />
              </div>
            </div>
          </div>
        </section>
        <div className='parallax-section'>
          <img src={Cave_03} alt='img_07' loading="lazy"  className='cav-03'/>
          <img src={Cave_02} alt='img_08' loading="lazy"  className='cav-02'/>
          <img src={Cave_01} alt='img_09' loading="lazy"  className='cav-01'/>
          <img src={Cave_00} alt='img_10' loading="lazy"  className='cav-00'/>
          <div className='media-title media-title-second'>
            <div>VZDĚLÁNÍ</div>
          </div>
        </div>
        <section className='static-section'>
          <div className='main'>
            <div className='container'>
              <div className='education'>
                <Education />
              </div>
            </div>
          </div>
        </section>
        <section className='static-section'>
          <div className='main'>
            <div className='container'>
              <div className='education_02'>
                <EducationImproved />
              </div>
            </div>
          </div>
        </section>
        <section className='static-section'>
          <div className='main'>
            <div className='container'>
              <div className='separation'>
                <img src={Dinosaur_fossils} alt='img_11' loading="lazy"  className='dinos_00'/>
              </div>
            </div>
          </div>
        </section>
        <section className='static-section'>
          <div className='main'>
            <div className='container'>
              <div className='hobby'>
                <p>
                  <strong className='Title'>Zábava</strong>
                </p>
                <br />
                <Hobby />
              </div>
            </div>
          </div>
        </section>
        <section className='static-section'>
          <div className='main'>
            <div className='container'>
              <div className='contacts'>
                {/* <p>
                  <strong className='Title'>Děkuji za pozornost</strong>
                </p>
                <br /> */}
                <Contacts />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
