import {
  START_GET_DATA_HOME,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  FILTER_DATA_PRICE,
  FILTER_DATA_ARTIST,
  FILTER_DATA_DATE,
  FILTER_BY_TEXT,
} from './home-action-type';
import Axios from 'axios';

const startGetDataHome = () => {
  return {
    type: START_GET_DATA_HOME,
  };
};

const getDataSuccess = payload => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  };
};

const getDataFailed = error => {
  return {
    type: GET_DATA_FAILED,
    error,
  };
};

const filterArrayPrice = data => {
  return {
    type: FILTER_DATA_PRICE,
    data,
  };
};

const filterArrayDate = data => {
  return {
    type: FILTER_DATA_DATE,
    data,
  };
};

const filterArrayText = data => {
  return {
    type: FILTER_BY_TEXT,
    data,
  };
};

export const getDataApi = () => {
  const url = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';
  return async dispatch => {
    dispatch(startGetDataHome());
    try {
      let response = await Axios.get(url);
      console.log('response', response);
      dispatch(getDataSuccess(response.data));
    } catch (error) {
      dispatch(getDataFailed(error));
      console.log('error', error);
    }
  };
};

// example filter Data Price more than 7.99 dolar
export const filterDataPrice = data => {
  return async dispatch => {
    try {
      let datamodif = data.filter(i => i['im:price'].attributes.amount > 7.99);
      console.log('datamodif', datamodif);

      dispatch(filterArrayPrice(datamodif));
    } catch (error) {
      console.log('error filter price');
    }
  };
};

// example filter Data Date more than 2021-06-18T00:00:00-07:00
export const filterDataDate = data => {
  return async dispatch => {
    try {
      let datamodif = data.filter(
        i =>
          new Date(i['im:releaseDate'].label) >
          new Date('2021-06-18T00:00:00-07:00'),
      );
      console.log('datamodif', datamodif);
      dispatch(filterArrayDate(datamodif));
    } catch (error) {
      console.log('error filter price');
    }
  };
};

export const filterDataText = (data, text, dataBackUp) => {
  return async dispatch => {
    let backup = dataBackUp.filter(i => i['im:name'].label.includes(text));
    console.log('dataBackup', backup);

    dispatch(filterArrayText(backup));

    try {
    } catch (error) {
      console.log('error filter text');
    }
  };
};
