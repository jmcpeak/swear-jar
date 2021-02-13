import React, { useEffect, useState } from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import { db } from '../firebaseConfig';

const DEFAULT_TITLE = 'SwearJar';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const TopBar = () => {
  const [title, setTitle] = useState('f');

  useEffect(() => {
    const ref = db.ref('/swearJarTitle');

    ref.on('value', (snapShot) => {
      const value = snapShot.val();

      setTitle(value && typeof value === 'string' ? value : DEFAULT_TITLE);
    });
  }, []);

  return (
    <Appbar.Header>
      <Appbar.BackAction />
      <Appbar.Content title={title} />
      <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
  );
};

export default TopBar;
