import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import Screen01 from './Screen/Screen01';
import Screen02 from './Screen/Screen02';
import Screen03 from './Screen/Screen03';
const Stack = createNativeStackNavigator();

const App = () => {
  const currentScreen = useSelector((state) => state.currentScreen);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen01">
        {currentScreen === 'Screen01' && <Stack.Screen name="Screen01" component={Screen01} options={{ headerShown: false }} />}
        {currentScreen === 'Screen02' && <Stack.Screen name="Screen02" component={Screen02} options={{ headerShown: false }} />}
        {currentScreen === 'Screen03' && <Stack.Screen name="Screen03" component={Screen03} options={{ headerShown: false }} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Main;
