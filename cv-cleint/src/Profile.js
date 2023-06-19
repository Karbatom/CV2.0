import { AiFillLinkedin } from "react-icons/ai";
import ProfilePhoto from './images/Profile02.png';

import './css/Profile.css';

function Profile() {

  const todaysDate = new Date();
  let currentOld = todaysDate.getFullYear() - 1998;

  const renderContent = (
    <>
      <p className='paragraf'>
        <i>
        <span className='Highligh-Text unispace-text'><strong>{currentOld}&nbsp;let</strong></span>
        <span className='Seperater-Title unispace-text'> / </span>
        <span className='Highligh-Text unispace-text'><strong>Břežany&nbsp;II</strong></span>
        <span className='Seperater-Title unispace-text'> / </span>
        <span className='Highligh-Text unispace-text'><strong>Freelancer</strong></span>
        </i>
      </p>
     </>
  );

  const iconsSize = '55px';
  const iconsColor = '#fff';

  const renderProfile = (
    <>
      <img src={ProfilePhoto} alt="Logo" loading="lazy" />
      <div className="Profile-Info-Contact">
        <a href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-karban-a88b81252/" target="_blank" rel="noreferrer">
          <AiFillLinkedin color={iconsColor} size={iconsSize} />
        </a>
      </div>
      <div className="profile-info">
      {renderContent}
      </div>
    </>
  );

  return (
    <div className="Profile-Design">
        {renderProfile}
    </div>
  );
}

export default Profile;