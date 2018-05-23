import axios from 'axios';

const HOTEL_SEARCH = 'https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426';
const RAKUTEN_APP_ID = '1027365574211045310';
const GetHotelInfo = (props) => {
  const params = {
    applicationId: RAKUTEN_APP_ID,
    latitude: props.lat,
    longitude: props.lng,
    datumType: 1,
  };
  axios
    .get(HOTEL_SEARCH, { params })
    .then((result) => {
      return hotels = result.data.hotels.map( hotel => {
        const basicInfo = hotel.hotel[0].hotelBasicInfo;
        return ({
          name: basicInfo.hotelName,
          url: basicInfo.hotelInformationUrl,
        });
      });
    });
};

export default GetHotelInfo;
