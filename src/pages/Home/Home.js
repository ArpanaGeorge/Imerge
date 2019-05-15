import React from "react";
import { withTranslation } from 'react-i18next';
import "./home.css";
import BackgroundImage1 from './flag-2.jpg';
import BackgroundImage2 from './kidsgroup.jpg';
import BackgroundImage3 from './immigrants.png';
import ThumbnailImage1 from './multicolour.jpg';
import ThumbnailImage2 from './multiracial-hands.jpeg';
import ThumbnailImage3 from './unity-2.png';
import ThumbnailImage4 from './color-hand.jpg';
import BackgroundImage4 from './kids-flag.jpg';
import BackgroundImage5 from './people.jpg';

class Home extends React.Component {
  constructor({ t, i18n }) {
    super({ t, i18n })
    this.t = t
  }
  render () {
    return (
      <div className="container-fluid">
        {/* Home Page Carousel */}
        <div className="row carouselRow">
          <div className="col col-12 col-md-8 col-sm-12">
            <div id="carouselSlides" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={BackgroundImage1} className="mx-auto d-block w-90 slide"  alt="not found" height="640"/>
                </div>
                <div className="carousel-item">
                  <img src={BackgroundImage2} className="mx-auto d-block w-90 slide" alt="..." height="640"/>
                </div>
                <div className="carousel-item">
                  <img src={BackgroundImage3} className="mx-auto d-block w-90 slide" alt="..." height="640"/>
                </div>
                <div className="carousel-item">
                  <img src={BackgroundImage4} className="mx-auto d-block w-90 slide" alt="..." height="640"/>
                </div>
                <div className="carousel-item">
                  <img src={BackgroundImage5} className="mx-auto d-block w-90 slide" alt="..." height="640"/>
                </div> 
              </div>
            </div>
          </div>
          {/* Motto - Arrive & Thrive */}
          <div className="col col-12 col-md-4 col-sm-12 flex-container">
            <div className = "motto display-1">{this.t('Arrive')}</div>
            <div className = "motto display-1">{this.t('&')}</div>
            <div className = "motto display-1">{this.t('Thrive')}</div>
          </div>
        </div>
        <br/>

        {/* Home page Our Services Section */}
        <div className="row">
          <div className="card homeServicesSection">
            <div className="card-header homeServicesHeader">
              <h3> {this.t('Our Services')}</h3>
            </div>
            <div className="card-body">
              <p className="homeServicesPara">
                {this.t("We believe that diversity makes America stronger and that we should celebrate, not just tolerate the differing cultural expressions and ideals that immigrants bring to this country. Diversity broadens our perspective, bringing new ideas and different experiences which inspires innovation and creativity. A diverse society facilitates acceptance. It teaches us to accept differences in others and look beyond language, race, and religion.")}
                {this.t("We also strive to help immigrants integrate into American society and deal with the bureaucracy and laws required to become a productive American citizen.")}
              </p>
              <div className="row">
                <div className="col">
                  <img src={ThumbnailImage1} className="rounded-circle" alt="Cinque Terre" width="184" height="156"/>
                  <figcaption className="thumbnailCaption">&emsp;{this.t('Agencies Information')}</figcaption>
                </div>
                <div className="col">
                  <img src={ThumbnailImage2} className="rounded-circle" alt="Cinque Terre" width="184" height="156"/>
                  <figcaption className="thumbnailCaption">&emsp;{this.t('Nearby Facilities Map')}</figcaption>
                </div>
                <div className="col">
                  <img src={ThumbnailImage3} className="rounded-circle" alt="Cinque Terre" width="184" height="156"/>
                  <figcaption className="thumbnailCaption">{this.t('Latest News Section')}</figcaption>
                </div>
                <div className="col">
                  <img src={ThumbnailImage4} className="rounded-circle" alt="Cinque Terre" width="184" height="156"/>
                  <figcaption className="thumbnailCaption">{this.t('Translator Section')}</figcaption>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
    )
  }
}

export default withTranslation()(Home);  