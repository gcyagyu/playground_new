import React from 'react';
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
  MarkerWithLabel,
 } from 'react-google-maps';

const GoogleMapGeocode = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={16}
    center={{ lat: props.lat, lng: props.lng }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} /> }
  </GoogleMap>
));

export default GoogleMapGeocode;
