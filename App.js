import 'react-native-gesture-handler';
import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import TopBar from './Components/TopBar';
import theme from './CustomProperties/Theme';
import Tabs from './Screens/Tabs';

const App = () => (
  <NavigationContainer>
    <PaperProvider theme={theme}>
      <AppearanceProvider>
        <TopBar />
        <Tabs />
      </AppearanceProvider>
    </PaperProvider>
  </NavigationContainer>
);

export default App;
