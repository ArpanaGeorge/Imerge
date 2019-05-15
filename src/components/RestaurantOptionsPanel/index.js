import React from "react";
import MapsAPI from "../../utils/API";
import Maps from "../../pages/Maps";
import { Translation } from 'react-i18next';
import { RestaurantApiDataStateChange } from '../RestaurantApiDataStateChange';

export class RestaurantOptionsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRadioButton: "",
      restaurantApiData: [],
      mapMode: 'currentLocationMarker'
    };
    this.handleRestaurantRadioClick = this.handleRestaurantRadioClick.bind(this);
  }

  handleRestaurantRadioClick(event) {
    this.setState({
      selectedRadioButton: event.target.value
    })
    console.log("inside grand child");
    this.props.onClick(event.target.value);
  }

  render() {
    const cuisines = ['American', 'Asian', 'Barbecue', 'Breakfast', 'Cafe', 'Chinese',
      'European', 'Fast food', 'Hamburger',
      'Ice cream', 'Indian', 'Irish', 'Italian', 'Jamaican',
      'Japanese', 'Korean', 'Mediterranean',
      'Mexican', 'Philippine',
      'Portuguese', 'Seafood', 'Steak', 'Sushi',
      'Tapas', 'Thai', 'Turkish', 'Vegetarian', 'Vietnamese']

    //Using array map function to get radiobutton for each cuisine type
    const radioButtons = cuisines.map(cuisineType => {
      return (
        <div>
          <input type="radio" id={cuisineType} name={cuisineType} value={cuisineType} checked={this.state.selectedRadioButton === cuisineType} onClick={this.handleRestaurantRadioClick} />{cuisineType}
        </div>
      )
    });

    return (
      <div>
        <div>{radioButtons}</div>
      </div>
    )
  }
}
