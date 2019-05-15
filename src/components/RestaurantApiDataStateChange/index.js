import React from "react";
import MapsAPI from "../../utils/API"

export class RestaurantApiDataStateChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantApiData: []
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("radio selected inside api", this.props.radioButtonSelected)
    MapsAPI.getRestaurantAPI(47.84039612005699, -122.17650237833391, this.props.radioButtonSelected).then(res =>
      this.setState({
        restaurantApiData: res.data
      })
    )
      .catch(err => console.log(err));
  }

  componentDidUpdate() {
    console.log("new api data", this.state.restaurantApiData);
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}