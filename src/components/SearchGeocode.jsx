// library
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// component
import GoogleMapGeocode from './GoogleMap';
import HotelTable from './HotelTable';

// method
import GetHotelInfo from '../utils/GetHotelInfo';

class SearchGeocode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: '東京タワー',
      address: '',
      lat: 35.6585805,
      lng: 139.7454329,
    };
  }

  componentDidMount() {
    const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';
    axios
      .get(GEOCODE_ENDPOINT, { params: { address: this.state.place } })
      .then((result) => {
        this.setState({
          address: result.data.results[0].formatted_address,
          lat: result.data.results[0].geometry.location.lat,
          lng: result.data.results[0].geometry.location.lng,
        });
      });
  }

  handlePlaceChange(place) {
    this.setState({ place });
  }

  handleSubmit(e) {
    e.preventDefault();
    const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';
    axios
      .get(GEOCODE_ENDPOINT, { params: { address: this.state.place } })
      .then((result) => {
        this.setState({
          address: result.data.results[0].formatted_address,
          lat: result.data.results[0].geometry.location.lat,
          lng: result.data.results[0].geometry.location.lng,
        });
      });
  }

  render() {
    return (
      <div>
        経度緯度検索
        <form
          onSubmit={e => this.handleSubmit(e)}
        >
          <input
            type="text"
            value={this.state.place}
            onChange={e => this.handlePlaceChange(e.target.value)}
          />
          <input
            type="submit"
            value="検索"
          />
          <ul>
            <li>住所: {this.state.address}</li>
            <li>経度: {this.state.lat}</li>
            <li>緯度: {this.state.lng}</li>
          </ul>
        </form>
        <GoogleMapGeocode
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAYAOkVZg-cJ0-m4pBeBeMq1oLO3gCvZYE"
          containerElement={<div style={{ height: '400px' }} />}
          loadingElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          lat={this.state.lat}
          lng={this.state.lng}
        />
        <HotelTable
          lat={this.state.lat}
          lng={this.state.lng}
        />
      </div>
    );
  }
}

export default SearchGeocode;
