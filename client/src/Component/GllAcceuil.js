import React from 'react'
import GallIMG from '../images/cinema3.jpg'
import Gall2 from "../images/z-event3.jpg";
import "./GLLAcceuil.css"


export default function GllAcceuil() {
    return (
      <div>
        <div className="IImage">
          <img src={GallIMG} className="img-1" />
          <img src={Gall2} className="img-2" />
        </div>
      </div>
    );
}
