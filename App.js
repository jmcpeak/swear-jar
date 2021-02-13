import 'react-native-gesture-handler';
import React, { useEffect, useMemo, useState } from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import {
  ActivityIndicator,
  Provider as PaperProvider,
} from 'react-native-paper';
// import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import TopBar from './components/TopBar';
import theme from './customProperties/Theme';
import Tabs from './screens/Tabs';
import Busy from './components/Busy';
import mainContext from './context/mainContext';
import { auth } from './firebaseConfig';
// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';
// import SignUpScreen from './screens/SignUpScreen';
// import loc from './utils/localization';

// const CombinedDefaultTheme = {
//   ...PaperDefaultTheme,
//   ...DefaultTheme,
//   colors: {
//     ...PaperDefaultTheme.colors,
//     ...DefaultTheme.colors,
//     primary: '#718E57',
//   },
// };
// const CombinedDarkTheme = {
//   ...PaperDarkTheme,
//   ...DarkTheme,
//   dark: true,
//   colors: { ...PaperDarkTheme.colors, ...DarkTheme.colors, primary: '#718E57' },
// };
//
// const AppStack = createStackNavigator();

// if (Appearance.getColorScheme() === 'dark') {
//   status = true;
// } else {
//   status = false;
// }

const App = () => {
  const [userLogged, setUserLogged] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setUserLogged(!!user);
      setIsLoading(false);
      setUserProfile(user);
    });
  }, []);

  const doLogin = async (email, password) => {
    setIsLoading(true);
    // console.log('login' + JSON.stringify(userProfile));
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      console.log('signInWithEmailAndPassword', error);
    });
  };

  const doSignup = async (email, password) => {
    setIsLoading(true);
    // console.log('login' + JSON.stringify(userProfile));
    auth.createUserWithEmailAndPassword(email, password).catch((error) => {
      console.log('createUserWithEmailAndPassword', error);
    });
  };

  const mainC = useMemo(
    () => ({
      userProfile: { userProfile },
      signOutUser: () => auth.signOut(),
      handleLogin: (email, password) => {
        doLogin(email, password).then((r) => {
          console.log('doLogin', r);
        });
      },
      handleSignup: (email, password) => {
        doSignup(email, password).then((r) => {
          console.log('doSignup', r);
        });
      },
    }),
    []
  );

  return isLoading ? (
    <Busy />
  ) : (
    <mainContext.Provider value={mainC}>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <AppearanceProvider>
            <TopBar />
            <Tabs />
          </AppearanceProvider>
        </PaperProvider>
      </NavigationContainer>
    </mainContext.Provider>
  );
};

export default App;
