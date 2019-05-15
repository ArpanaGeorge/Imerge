import React, { Component } from "react";
import { HashRouter,BrowserRouter as Router,  Route, Link, Switch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { CategoryOptionsPanel } from '../CategoryOptionsPanel';
import "./style.css";
import { RestaurantOptionsPanel } from '../RestaurantOptionsPanel';
import { GroceryOptionsPanel } from '../GroceryOptionsPanel';
import Maps from "../../pages/Maps";
import RestaurantImage from './Restaurant.jpg';
import GroceryImage from './grocery-icon.png';
import EmbassyImage from './embassy-icon.png';
import ImmigrationImage from './immigration-icon.png';
import HealthCareImage from './hospital-icon.png';
import PostOfficeImage from './PostOffice-icon.jpg';
import SchoolImage from './school-icon.jpg';
import BankImage from './bank-icon.png';
import BusStopImage from './bus-stop-icon.png';
import AirportImage from './airport-icon.png';
import MovieImage from './movie-2-icon.jpg';
import ParkImage from './park-icon.png';
import TempleImage from './temple-2-icon.jpg';
import ChurchImage from './church-icon.jpg';
import MosqueImage from './mosque-icon.png';

class SidePanel extends Component {
  constructor({ t, i18n }) {
    super({ t, i18n })
    this.t = t
    this.state = {
      RestaurnatIcon: RestaurantImage,
      GroceryIcon: GroceryImage,
      EmbassyIcon: EmbassyImage,
      GovtOfficeIcon: ImmigrationImage,
      HealthCareIcon: HealthCareImage,
      PostOfficeIcon: PostOfficeImage,
      SchoolIcon: SchoolImage,
      BankIcon: BankImage,
      BusStopIcon: BusStopImage,
      AirportIcon: AirportImage,
      MovieIcon: MovieImage,
      ParkIcon: ParkImage,
      TempleIcon: TempleImage,
      ChurchIcon: ChurchImage,
      MosqueIcon: MosqueImage,
      // TODO: i18next text
      text: "Select a category you need",
      mode: 'categoryOptions',
      selectedRadio: ""
    }
    this.handleRestaurantClick = this.handleRestaurantClick.bind(this);
    this.handleGroceryClick = this.handleGroceryClick.bind(this);
    this.handleImmigrationOfficeClick = this.handleImmigrationOfficeClick.bind(this);
    this.handleHealthCareClick = this.handleHealthCareClick.bind(this);
    this.handlePostOfficeClick = this.handlePostOfficeClick.bind(this);
    this.handleSchoolClick = this.handleSchoolClick.bind(this);
    this.handleBankClick = this.handleBankClick.bind(this);
    this.handleBusStopClick = this.handleBusStopClick.bind(this);
    this.handleParkClick = this.handleParkClick.bind(this);
    this.handleAirportClick = this.handleAirportClick.bind(this);
    this.handleMovieClick = this.handleMovieClick.bind(this);
    this.handleTempleClick = this.handleTempleClick.bind(this);
    this.handleChurchClick = this.handleChurchClick.bind(this);
    this.handleMosqueClick = this.handleMosqueClick.bind(this);
    this.handlePassedRadioValue = this.handlePassedRadioValue.bind(this);
    this.handleEmbassyClick = this.handleEmbassyClick.bind(this);
    this.handleMilesSearchClick = this.handleMilesSearchClick.bind(this);
    this.handleGoBackClick = this.handleGoBackClick.bind(this);
  }//End of constructor

  handleMilesSearchClick(event) {
    let milesCalculated = event.target.value * 1000;
    switch (this.state.mode) {
      case 'restaurant':
        this.props.onClick("restaurant", milesCalculated, this.state.selectedRadio);
        break;
      case 'store':
        this.props.onClick("store", milesCalculated, this.state.selectedRadio);
        break;
      case 'local_government_office':
        this.props.onClick("local_government_office", milesCalculated);
        break;
      case 'embassy':
        this.props.onClick("embassy", milesCalculated);
        break;
      case 'hospital':
        this.props.onClick("hospital", milesCalculated);
        break;
      case 'post_office':
        this.props.onClick("post_office", milesCalculated);
        break;
      case 'bank':
        this.props.onClick("bank", milesCalculated);
        break;
      case 'school':
        this.props.onClick("school", milesCalculated);
        break;
      case 'airport':
        this.props.onClick("airport", milesCalculated);
        break;
      case 'bus_station':
        this.props.onClick("bus_station", milesCalculated);
        break;
      case 'movie_theater':
        this.props.onClick("movie_theater", milesCalculated);
        break;
      case 'park':
        this.props.onClick("park", milesCalculated);
        break;
      case 'hindu_temple':
        this.props.onClick("hindu_temple", milesCalculated);
        break;
      case 'church':
        this.props.onClick("church", milesCalculated);
        break;
      case 'mosque':
        this.props.onClick("mosque", milesCalculated);
        break;

      default:
      // code block
    }

  }

  // Function for handleRestaurantClick
  handleRestaurantClick() {
    this.setState({
      mode: 'restaurant',
      // TODO: i18n text
      text: 'Choose Restaurant Type'
    });
  }

  handlePassedRadioValue(passedRadioValue) {
    console.log("inside child handlePassedRadioValue");
    this.setState({ selectedRadio: passedRadioValue });
    this.props.onClick(this.state.mode, 10000, passedRadioValue);
  }

  handleGroceryClick() {
    this.setState({
      mode: 'store',
      // TODO: i18next text
      text: 'Choose Grocery Type'
    });
  }

  handleEmbassyClick() {
    this.setState({
      mode: 'embassy',
      // TODO: i18next text
      text: 'Click on the markers for nearby Embassy details'
    });
    this.props.onClick("embassy", 10000);
  }

  // Function for handleImmigrationOfficeClick
  handleImmigrationOfficeClick() {
    this.setState({
      mode: 'local_government_office',
      // TODO: i18next text
      text: 'Click on the markers for nearby Government office details'
    });
    this.props.onClick("local_government_office", 10000);
    //  this.addCuisines()
  }

  handleHealthCareClick() {
    this.setState({
      mode: 'hospital',
      // TODO: i18next text
      text: 'Click on the markers for nearby HealthCare details'
    });
    this.props.onClick("hospital", 10000);
  }

  handlePostOfficeClick() {
    this.setState({
      mode: 'postOffice',
      // TODO: i18next text
      text: 'Click on the markers for nearby postoffice details'
    });
    this.props.onClick("post_office", 10000);
  }

  handleSchoolClick() {
    this.setState({
      mode: 'school',
      // TODO: i18next text
      text: 'Click on the markers for nearby School details'
    });
    this.props.onClick("school", 10000);
  }

  handleBankClick() {
    this.setState({
      mode: 'bank',
      // TODO: i18next text
      text: 'Click on the markers for nearby Bank details'
    });
    this.props.onClick("bank", 10000);
  }

  handleBusStopClick() {
    this.setState({
      mode: 'bus_station',
      text: 'Click on the markers for nearby Bus Stop details'
    });
    this.props.onClick("bus_station", 10000);
  }

  handleParkClick() {
    this.setState({
      mode: 'park',
      // TODO: i18next text
      text: 'Click on the markers for nearby Park details'
    });
    this.props.onClick("park", 10000);
  }

  handleAirportClick() {
    this.setState({
      mode: 'airport',
      // TODO: i18next text
      text: 'Click on the markers for nearby Airport details'
    });
    this.props.onClick("airport", 10000);
  }

  handleMovieClick() {
    this.setState({
      mode: 'movie_theater',
      // TODO: i18next text
      text: 'Click on the markers for nearby Movie Theatre details'
    });
    this.props.onClick("movie_theater", 10000);
  }

  handleTempleClick() {
    this.setState({
      mode: 'hindu_temple',
      // TODO: i18next text
      text: 'Click on the markers for nearby Temple details'
    });
    this.props.onClick("hindu_temple", 10000);
  }

  handleChurchClick() {
    this.setState({
      mode: 'church',
      // TODO: i18next text
      text: 'Click on the markers for nearby Church details'
    });
    this.props.onClick("church", 10000);
  }

  handleMosqueClick() {
    this.setState({
      mode: 'mosque',
      // TODO: i18next text
      text: 'Click on the markers for nearby Mosque details'
    });
    this.props.onClick("mosque", 10000);
  }

  handleGoBackClick(){
    this.setState({
      mode: 'categoryOptions',
      // TODO: i18next text
      text: 'Select a category you need'
    });
    this.props.onClick("GoBack");
  }

  render() {
    const categoryOptions = this.state.mode === 'categoryOptions';
    const RestaurantOptions = this.state.mode === 'restaurant';
    const GroceryOptions = this.state.mode === 'store';
    const ImmigrationOfficeDetails = this.state.mode === 'local_government_office';
    const EmbassyDetails = this.state.mode === 'embassy';
    const HealthCareDetails = this.state.mode === 'hospital';
    const PostOfficeDetails = this.state.mode === 'post_office';
    const BankDetails = this.state.mode === 'bank';
    const SchoolDetails = this.state.mode === 'school';
    const AirportDetails = this.state.mode === 'airport';
    const BusStopDetails = this.state.mode === 'bus_station';
    const MovieDetails = this.state.mode === 'movie_theater';
    const ParkDetails = this.state.mode === 'park';
    const TempleDetails = this.state.mode === 'hindu_temple';
    const ChurchDetails = this.state.mode === 'church';
    const MosqueDetails = this.state.mode === 'mosque';
    const { t } = this.props;

    return (
      <div className="card cardbox" >
        {/* Main card header */}
        <div className="card-header sidePanelCardGHeader">
          {
            !categoryOptions && (
              // <Router basename={process.env.PUBLIC_URL}>
              <div className="GoBack">
                {/*  <a className="back" href ="/Maps">{t("Go back")}</a> */}
                <button className="back" onClick={this.handleGoBackClick}>{t("Go back")}</button> 
                {/*<Link to="/Maps" >{t("Go back")}</Link>
                */}
              </div>
              // </Router>
            )
          }
          {this.state.text}
        
       
        </div>
        {/* main card body */}

        {/* Using short circuit operator to render category options if mode =categoryoptions and hide other JSX elements if mode !=categoryoptions*/}
        {
          categoryOptions && (
            <div className="card-body">
              {/* First row */}
              <div className="row categoryOptionsButton" >
                {/* subcards */}
                <div className="col-sm-4 categoryOptionsCol" >
                  <a href='#' className="SidePanelOption" onClick={this.handleRestaurantClick}>
                    <CategoryOptionsPanel text={t("Restaurants")} image={this.state.RestaurnatIcon} />
                  </a>
                </div>
                <div className="col-sm-4 categoryOptionsCol" >
                  <a href='#' className="SidePanelOption" onClick={this.handleGroceryClick}>
                    <CategoryOptionsPanel text={t("Grocery Stores")} image={this.state.GroceryIcon} />
                  </a>
                </div>
                <div className="col-sm-4 categoryOptionsCol" >
                  <a href='#' className="SidePanelOption" onClick={this.handleMovieClick}>
                    <CategoryOptionsPanel text={t("Movie Theaters")} image={this.state.MovieIcon} />
                  </a>
                </div>
              </div>

              {/* Second row */}
              <div className="row categoryOptionsButton" >
                <div className="col-sm-4 categoryOptionsCol">
                  <a href='#' className="SidePanelOption" onClick={this.handleImmigrationOfficeClick}>
                    <CategoryOptionsPanel text={t("Government Offices")} image={this.state.GovtOfficeIcon} />
                  </a>
                </div>
                <div className="col-sm-4 categoryOptionsCol" >
                  <a href='#' className="SidePanelOption" onClick={this.handleEmbassyClick}>
                    <CategoryOptionsPanel text={t("Embassy")} image={this.state.EmbassyIcon} />
                  </a>
                </div>
                <div className="col-sm-4 categoryOptionsCol" >
                  <a href='#' onClick={this.handlePostOfficeClick}>
                    <CategoryOptionsPanel text={t("Post Offices")} image={this.state.PostOfficeIcon} />
                  </a>
                </div>
              </div>

              {/* Third row */}
              <div className="row categoryOptionsButton" >
                <div className="col-sm-4 categoryOptionsCol" >
                  <a href='#' className="SidePanelOption" onClick={this.handleBusStopClick}>
                    <CategoryOptionsPanel text={t("Bus Stops")} image={this.state.BusStopIcon} />
                  </a>
                </div>
                <div className="col-sm-4 categoryOptionsCol" >
                  <a href='#' className="SidePanelOption" onClick={this.handleParkClick}>
                    <CategoryOptionsPanel text={t("Public Parks")} image={this.state.ParkIcon} />
                  </a>
                </div>
                <div className="col-sm-4 categoryOptionsCol" >
                  <a href='#' className="SidePanelOption" onClick={this.handleAirportClick}>
                    <CategoryOptionsPanel text={t("Airports")} image={this.state.AirportIcon} />
                  </a>
                </div>
              </div>

              {/* Fourth row */}
              <div className="row categoryOptionsButton" >
                <div className="col-sm-4 categoryOptionsCol" >
                  <a href='#' className="SidePanelOption" onClick={this.handleSchoolClick}>
                    <CategoryOptionsPanel text={t("Schools")} image={this.state.SchoolIcon} />
                  </a>
                </div>
                <div className="col-sm-4 categoryOptionsCol" >
                  <a href='#' className="SidePanelOption" onClick={this.handleBankClick}>
                    <CategoryOptionsPanel text={t("Banks")} image={this.state.BankIcon} />
                  </a>
                </div>
                <div className="col-sm-4 categoryOptionsCol" >
                  <a href='#' className="SidePanelOption" onClick={this.handleHealthCareClick}>
                    <CategoryOptionsPanel text={t("HealthCare")} image={this.state.HealthCareIcon} />
                  </a>
                </div>
              </div>

              {/* Fifth row */}
              <div className="row categoryOptionsButton" >
                <div className="col-sm-4 categoryOptionsCol" >
                  <a href='#' className="SidePanelOption" onClick={this.handleTempleClick}>
                    <CategoryOptionsPanel text={t("Temples")} image={this.state.TempleIcon} />
                  </a>
                </div>
                <div className="col-sm-4 categoryOptionsCol" >
                  <a href='#' className="SidePanelOption" onClick={this.handleChurchClick}>
                    <CategoryOptionsPanel text={t("Churches")} image={this.state.ChurchIcon} />
                  </a>
                </div>
                <div className="col-sm-4 categoryOptionsCol" >
                  <a href='#' className="SidePanelOption" onClick={this.handleMosqueClick}>
                    <CategoryOptionsPanel text={t("Mosques")} image={this.state.MosqueIcon} />
                  </a>
                </div>
              </div>
            </div>
          )
        }

        {/* Using short circuit operator to render nearby immigration offices if mode = 'ImmigrationOffices' */}
        {
          (RestaurantOptions || GroceryOptions || ImmigrationOfficeDetails || EmbassyDetails || HealthCareDetails || PostOfficeDetails || BankDetails || SchoolDetails || AirportDetails || BusStopDetails || MovieDetails || ParkDetails || TempleDetails || ChurchDetails || MosqueDetails) && (
            <div className="card-body">
              <div className="row" >
                <form>
                  <div class="form-group">
                    <label for="formControlSelect1">{t('Select miles to be searched')}</label>
                    <select class="form-control" id="formControlSelect1" onChange={this.handleMilesSearchClick}>
                      <option>10</option>
                      <option>20</option>
                      <option>30</option>
                      <option>40</option>
                      <option>50</option>
                      <option>60</option>
                      <option>70</option>
                      <option>80</option>
                      <option>90</option>
                      <option>100</option>
                    </select>
                  </div>
                </form>
                <div>
                </div>
                <p>{t('Zoom In/Out the map to see all search results')}</p>
              </div>
            </div>
          )
        }

        {/* Using short circuit operator to render restaurant radio button options if mode =restaurantoptions */}
        {
          (RestaurantOptions) && (
            <div className="card-body">
              <div className="row" >
                <form>
                  <RestaurantOptionsPanel onClick={this.handlePassedRadioValue} />
                </form>
              </div>
            </div>
          )
        }

        {/* Using short circuit operator to render Grocery store radio button options if mode =restaurantoptions */}
        {
          (GroceryOptions) && (
            <div className="card-body">
              <div className="row" >
                <form>
                  <GroceryOptionsPanel onClick={this.handlePassedRadioValue} />
                </form>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default withTranslation()(SidePanel);
