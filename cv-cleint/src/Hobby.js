
import './css/Hobby.css';

import PawTrailLogo from './images/PawTrailLogo.png';

import Img0 from './images/blender/b_img (1).JPG';
import Img2 from './images/blender/b_img (14).JPG';
import Img3 from './images/blender/b_img (10).JPG';
import Img4 from './images/blender/b_img (13).JPG';
import Img7 from './images/blender/b_img (17).jpg';
import Img8 from './images/blender/b_img (18).jpg';

import MTB_1 from './images/mtb/MTB (1).jpg';
import MTB_2 from './images/mtb/MTB (2).jpg';
import MTB_3 from './images/mtb/MTB (3).jpg';
import MTB_4 from './images/mtb/MTB (4).jpg';
import MTB_5 from './images/mtb/MTB (5).jpg';
import MTB_6 from './images/mtb/MTB (6).jpg';
import MTB_7 from './images/mtb/MTB (7).jpg';
import MTB_8 from './images/mtb/MTB (8).jpg';
import MTB_9 from './images/mtb/MTB (9).jpg';
import MTB_10 from './images/mtb/MTB (10).jpg';
import MTB_11 from './images/mtb/MTB (11).jpg';

function Hobby() {
  return(
    <div>
      <p className="paragraf">
      Osobně jsem vášnivý sportovec co se týče stolního tenisu, beach volejbalu, běžek, squashe a horskéhé kola s kterým pravidělně návštěvujeme místní bike parky. Stolní tenis hraju za sportovní klub Český Brod a ostatní sporty pouze rekreačně.
      </p>
      <p className="paragraf">
      Když vynechám adrenalin ze sjíždění downhillu v bike parcích, jsem zároveň fanda sci-fi a fantasy filmů od Marvelu, DC a celkové myšlence propracovanosti komiksů. Nemohu zde chybět ani seriály ať už nové či staré jako HIMYM nebo TBBT.
      </p>
      <p className="paragraf">
      Pokud vynechám sporty či seriály, tak relaxuji nad modelování 3D objektů pomocí Blender 3D. Kde se snažím, aby moje tvorba byla kvalitní a použitelná pro vývoj her v Unity 3D.
      </p>
      <p className="paragraf note">
      Ukázka projektů, které jsem tvořil za pomocí Blender 3D viz. galerie...
      </p>
      <div>
        {/* Blender gallery */}
        <div className="gallery-container">
          <h2 className="heading-text">Photo <span>gallery</span></h2>
          <div className="image-gallery">
            <div className="column">
              <div className="image-item">
                <img src={Img0} alt="" />
              </div>
              <div className="image-item">
                <img src={Img4} alt="" />
              </div>
            </div>
            <div className="column">
              <div className="image-item">
                <img src={Img7} alt="" />
              </div>
              <div className="image-item">
                <img src={Img8} alt="" />
              </div>
            </div>
            <div className="column">
            <div className="image-item">
                <img src={Img2} alt="" />
              </div>
              <div className="image-item">
                <img src={Img3} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Blender gallery */}
      </div>
      <p className="paragraf">
      Jelikož jsem začal jezdit MTB, tak jsem moje výsledky převedl do video formy a tvořím obsah na Youtube. Youtube jsem pojal jako další nástroj na grafickou tvorbu ale tentokrát za pomocí videí. Můj youtube kanál je poměrně nový a testuji, co vše se tam dá vytvořit.
      </p>
      <p className="paragraf note">
      Ukázka záběrů z mého cestování viz. galerie a odkaz na můj youtube kanál...
      </p>
      <div>
        {/* Youtube */}
        <div className="gallery-container">
        <h2 className="heading-text">Photo <span>gallery</span></h2>
          <div className="image-gallery">
            <div className="column">
              <div className="image-item">
                <img src={MTB_1} alt="" />
              </div>
              <div className="image-item">
                <img src={MTB_2} alt="" />
              </div>
              <div className="image-item">
                <img src={MTB_3} alt="" />        
              </div>
              <div className="image-item">
                <img src={MTB_10} alt="" />        
              </div>
            </div>
            <div className="column">
              <div className="image-item">
                <img src={MTB_4} alt="" />
              </div>
              <div className="image-item">
                <img src={MTB_5} alt="" />
              </div>
              <div className="image-item">
                <img src={MTB_6} alt="" />
              </div>
            </div>
            <div className="column">
              <div className="image-item">
                <img src={MTB_7} alt="" />
              </div>
              <div className="image-item">
                <img src={MTB_8} alt="" />
              </div>
              <div className="image-item">
                <img src={MTB_9} alt="" />
              </div>
              <div className="image-item">
                <img src={MTB_11} alt="" />        
              </div>
            </div>
          </div>
        </div>
        {/* Youtube */}
      </div>
      <div className="YoutubeLink">
        <a href="https://www.youtube.com/channel/UCJHgFW_WHWB2o_-czCVSMYQ" title="Youtube kanál: PawTrail" target='_blank' rel="noopener noreferrer" >
          <img src={PawTrailLogo} alt="Logo" className="PawTrailLogo" title="Youtube kanál: PawTrail"/>
        </a>
      </div>
    </div>
  );
}

export default Hobby;