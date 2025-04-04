import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PokemonSearch from './PokemonSearch';
import SignupForm from './SignupForm';
import { View, ScrollView } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <ScrollView>
        <PokemonSearch />
        <SignupForm />
      </ScrollView>
    </Provider>
  );
};

export default App;
