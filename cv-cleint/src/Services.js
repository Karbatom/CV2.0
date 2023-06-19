
import './css/Services.css';

import Mushroom01 from './images/Mushroom_01.png';
import Mushroom02 from './images/Mushroom_02.png';
import Mushroom03 from './images/Mushroom_03.png';

function Services() {

  return (
    <div>
      <div className='service-container'>
        <div className='service' id='service-01'>
          <div className='service-image'><img src={Mushroom01} alt='mushroom'></img></div>
          <div className='service-text service-text-01'>Tvorba webového obsahu, co se týče backendu i frontendu od analýzy, návrhu až po implementaci</div>
        </div>
        <div className='service' id='service-02'>
          <div className='service-image service-image-02'><img src={Mushroom03} alt='mushroom'></img></div>
          <div className='service-text service-text-02'>Návrhu a analýzy grafických částí ať už pro webové aplikace tak i vytváření grafických objektu v Blender 3D</div>
        </div>
        <div className='service' id='service-03'>
          <div className='service-image'><img src={Mushroom02} alt='mushroom'></img></div>
          <div className='service-text service-text-03'>Základní práce s databází MSSQL, MongoDB a manipulace s daty</div>
        </div>
      </div>
    </div>
  );
}

export default Services;