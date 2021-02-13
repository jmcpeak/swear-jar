import * as React from 'react';
import { Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import CustomIcon from './CustomIcon';

const CardAction = (props) => {
  const { colors } = useTheme();
  return (
    <>
      <CustomIcon
        bcolor={colors.primary}
        color="#fff"
        name="thumb-up"
        pad={4}
        rad={20}
        size={15}
      />
      <CustomIcon
        bcolor="red"
        color="#fff"
        name="heart"
        pad={4}
        rad={20}
        size={15}
      />

      <Text> {props.likes}</Text>
    </>
  );
};

export default CardAction;
