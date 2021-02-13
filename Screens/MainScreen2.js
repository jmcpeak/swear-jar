import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import Tabs from 'Screens/Tabs';
import FeedScreen from './FeedScreen';
import AlbumScreen from './AlbumScreen';
import RecentScreen from './RecentScreen';
import SettingsScreen from './SettingsScreen';

const Screen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'feeds', title: 'Feeds', icon: 'message' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
    { key: 'settings', title: 'Settings', icon: 'cog' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    feeds: FeedScreen,
    albums: AlbumScreen,
    recents: RecentScreen,
    settings: SettingsScreen,
  });

  return (
    <>
      <Tabs />
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
};

export default Screen;
