import React from "react";
import MapsAPI from "../../utils/API";
import Maps from "../../pages/Maps";
import { RestaurantApiDataStateChange } from '../RestaurantApiDataStateChange';

export class GroceryOptionsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRadioButton: ""
    };
    this.handleGroceryRadioClick = this.handleGroceryRadioClick.bind(this);
  }

  handleGroceryRadioClick(event) {
    this.setState({
      selectedRadioButton: event.target.value
    })
    console.log("inside grand child");
    this.props.onClick(event.target.value);
    // this.storeApiData();
    console.log("inside event radiovalue" + event.target.value);
  }

  render() {
    console.log("radiovalue" + this.state.selectedRadioButton);
    const storeTypes = ['Asian', 'Chinese',
      'European', 'Indian', 'Indonesian', 'Italian', 'Jamaican',
      'Japanese', 'Korean', 'Mexican']
      //Using array map function to get radiobutton for each cuisine type
    const radioButtons = storeTypes.map(groceryType => {
      return (
        <div>
          <input type="radio" id={groceryType} name={groceryType} value={groceryType} checked={this.state.selectedRadioButton === groceryType} onClick={this.handleGroceryRadioClick} />{groceryType}
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
