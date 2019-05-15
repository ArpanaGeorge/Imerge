import React, { Component } from "react";
import { withTranslation } from 'react-i18next';
import SidePanel from "../../components/SidePanel";
import "../../components/InnerMap/style.css";
import MapsAPI from "../../utils/API";

class Maps extends Component {
  constructor({ t, i18n }) {
    super({ t, i18n })
    this.t = t
    this.state = {
      lat: 0,
      long: 0,
      categorySelectionMode: "",
      immigrationOfficesApiData: [],
      healthCareApiData: []
    }
    this.changecategorySelectionMode = this.changecategorySelectionMode.bind(this);
  }//End of constructor

  componentDidUpdate() {
    console.log("exec immigration event", this.state.immigrationOfficesApiData);
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: this.state.lat, lng: this.state.long },
      zoom: 13,
      mapTypeId: 'roadmap'
    });

    //using map function to get marker for each of the immigration offices
    const newImmigrationOfficesApiArray = (this.state.immigrationOfficesApiData).map(eachValue => {
      console.log("marker exec");
      let marker = new window.google.maps.Marker({
        map: map,
        position: { lat: eachValue.geometry.location.lat, lng: eachValue.geometry.location.lng },
        optimized: false
      });

      //  marker.setAttribute("className","bounce");
      console.log("place-id", eachValue.place_id);
      MapsAPI.getCid(eachValue.place_id).then(res =>
        marker.addListener('click', e => {
          this.createInfoWindow(e, map, eachValue, res.data.result.url)
        })
      )
        .catch(err => console.log(err));
    })// }End of for..of loop
  }//End of componentDidUpdate()

  // Marker info window
  createInfoWindow(e, map, apiData, url) {
    // url for map directions
    console.log("************inside infowindow", url);
    let directionUrl = 'https://www.google.com/maps/dir/' + this.state.lat + ',' + this.state.long + '/' + apiData.name + ',' + apiData.vicinity + '/@' + apiData.geometry.location.lat + ',' + apiData.geometry.location.lng + '/';
    console.log("url" + url);
    // Marker infowindow Content
    let contentString = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<div id="bodyContent">' + '<h5>' + apiData.name + '</h5>' + '<p>' + apiData.vicinity + '</p>' +
      '<div> <a target="_blank" href=' + url + '>' + 'View Details</a> ' +
      '</div>' + '<div> <a target="_blank" href="' + directionUrl + '">' +
      'Get Directions</a> ' +
      '</div>' +
      '</div>' +
      '</div>';
    console.log("inside infowindow");
    //  Creating infowindow
    const infoWindow = new window.google.maps.InfoWindow({
      content: contentString,
      position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
    })

    infoWindow.open(map);
  }

  //Gets invoked on sidepanel category selection
  changecategorySelectionMode = (newCategory, miles, restaurantType) => {
    console.log("inside parent");
    console.log("newCategory", newCategory, "restaurantType", restaurantType, "miles", miles);
    if (newCategory === "restaurant" || newCategory === "store") {
      console.log("inside if", newCategory, restaurantType);
      MapsAPI.getRestaurantOrGroceryAPI(this.state.lat, this.state.long, newCategory, restaurantType, miles).then(res => {
        console.log("offices", res)
        this.setState({
          immigrationOfficesApiData: res.data.results
        })
      }
      )
        .catch(err => console.log(err));
    }
    else if (newCategory === "GoBack") {
      this.getLocation();
    }

    else {
      // console.log("inside else",newCategory,restaurantType);
      MapsAPI.getApiData(this.state.lat, this.state.long, newCategory, miles).then(res => {
        console.log("offices", res)
        this.setState({
          immigrationOfficesApiData: res.data.results
        })
      }
      )
        .catch(err => console.log(err));
    }
  }

  // After the very first render, display the map in map div card
  componentDidMount() {
    this.getLocation();
  }

  //Get current location using geolocation
  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
    else {
      var x = document.getElementById("map");
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  } //End of geoLocation

  // current latitude and longitude is available in argument position
  //Function creating initial map and marker at current location
  showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    this.setState({
      lat: latitude,
      long: longitude
    });
    //Creating map instance    
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: this.state.lat, lng: this.state.long },
      zoom: 13,
      mapTypeId: 'roadmap',
    });
    console.log("lat" + this.state.lat);
    console.log("long" + this.state.long);
    // Setting marker at the current location
    let marker = new window.google.maps.Marker({
      map: map,
      position: { lat: this.state.lat, lng: this.state.long },
    });
    // marker.setAttribute("className","bounce");
  }//End of showPosition

  render() {
    return (
      <div className="container-fluid">
        <div className="row sidePanelMapRow">
          <div className="col col-12 col-md-3 col-sm-12">
            {/* Calling SidePanel instance */}
            <SidePanel onClick={this.changecategorySelectionMode}>
            </SidePanel >
          </div>
          <div className="col col-12 col-md-9 col-sm-12">
            {/* Map div */}
            {/* <InnerMap > */}
            <div className="card cardLayout" id='map' >
            </div>
            {/* </InnerMap>  */}
          </div>
        </div>
      </div>
    );//End of return
  }//End of render()
}//End of class

export default withTranslation()(Maps); 
