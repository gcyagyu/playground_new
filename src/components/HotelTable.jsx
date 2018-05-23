import React, { Component } from 'react';

import axios from 'axios';

class HotelTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [{
        name: '',
        url: '',
      }],
    };
  }

  render() {
    const HOTEL_SEARCH = 'https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426';
    const RAKUTEN_APP_ID = '1027365574211045310';
    const params = {
      applicationId: RAKUTEN_APP_ID,
      latitude: this.props.lat,
      longitude: this.props.lng,
      datumType: 1,
    };
    axios
      .get(HOTEL_SEARCH, { params })
      .then((result) => {
          const hotels = result.data.hotels.map( hotel => {
          const basicInfo = hotel.hotel[0].hotelBasicInfo;
          return {
            name: basicInfo.hotelName,
            url: basicInfo.hotelInformationUrl,
          };
        });
        this.setState({
          hotels,
        });
      });
    const hotels = this.state.hotels.map((hotel, index) => (
        <ul key={index}>
          <a href={hotel.url}>{hotel.name}</a>
        </ul>
    ));
    return (
      <div>
        {hotels}
      </div>
    );
  }
}

export default HotelTable;
