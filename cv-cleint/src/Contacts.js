import React from "react";

function Contacts() {
  return(
    <div>
      <div className="contacts-container">
        <div>
          <p className="paragraf Highligh-Text">
            Veškeré otázky na e-mail
          </p>
          <p className="paragraf-second">
            <strong className="unispace-text">tomas.karban98@gmail.com</strong>
          </p>
        </div>
        <br />
        <div>
          <p className="paragraf Highligh-Text">
            Telefon na vyžádání přes e-mail
          </p>
          <p className="paragraf-second">
            <strong className="unispace-text">+420 *** *** ***</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;