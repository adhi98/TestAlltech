//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Root} from 'native-base';
import Navigation from './navigation/navigation';
console.disableYellowBox = true;

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {PersistGate} from 'redux-persist/integration/react';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'TestCase',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
  whitelist: [''],
  timeout: 1000000,
};

//reducer
import homeReducer from './src/home/reducer/HomeReducer';

const rootReducer = combineReducers({
  Home: homeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
const persistor = persistStore(store);

// create a component
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root>
          <Navigation />
        </Root>
      </PersistGate>
    </Provider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
