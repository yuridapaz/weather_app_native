import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyDDnDd-SQJBe-yxSOEWwKWA1YVOld5DYK8',
        language: 'en',
      }}
    />
  );
};

export default SearchInput;
