import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import { db } from '../../firebaseConfig';

// eslint-disable-next-line no-unused-vars
const CustomCard = ({ uri }) => {
  const [defaultValue, setDefaultValue] = useState('');
  const [title, setTitle] = useState('');

  const handleChangeText = (text) => {
    const ref = db.ref('/swearJarTitle');

    ref.set(text);
    setTitle(text);
  };

  useEffect(() => {
    const ref = db.ref('/swearJarTitle');

    ref.once('value', (snapShot) => {
      const value = snapShot.val();

      if (value && typeof value === 'string') {
        setDefaultValue(value);
      }
    });
  }, []);

  useEffect(() => {}, []);

  return (
    <Card style={styles.container}>
      <Card.Content style={{ flexDirection: 'row' }}>
        <TextInput
          blurOnSubmit
          clearButtonMode="while-editing"
          defaultValue={defaultValue}
          maxLength={24}
          onChangeText={handleChangeText}
          style={{ width: 300 }}
        />
      </Card.Content>
    </Card>
  );
};

CustomCard.propTypes = {
  // navigation: PropTypes.object.isRequired,
  // title: PropTypes.string,
  uri: PropTypes.string,
};

CustomCard.defaultProps = {
  // title: null,
  uri: null,
};

export default CustomCard;

// const [text, setText] = useState('Swear Jar');
//
// return (
//   <TextInput
//     label="Name of SwearJar"
//     mode="outlined"
//     onChangeText={(text) => setText(text)}
//     value={text}
//   />
// );

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#4169E1',
    margin: 10,
  },
  contentStart: { flexDirection: 'row', alignItems: 'flex-start' },
  contentEnd: { flexDirection: 'row', alignItems: 'flex-end' },
  horizontalLine: {
    width: 335,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginHorizontal: 15,
    paddingVertical: 5,
  },
  action: { flexDirection: 'row', paddingTop: 5 },
});
