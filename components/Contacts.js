import * as Contacts from 'expo-contacts';
import React, { useEffect } from 'react';
import { Text } from 'react-native-paper';

const ContactsCard = () => {
  useEffect(() => {
    (async () => {
      const { granted } = await Contacts.requestPermissionsAsync();

      if (granted) {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data?.length > 0) {
          console.log(data);
        }
      }
    })();
  }, []);

  return <Text>Contacts</Text>;
};

export default ContactsCard;
