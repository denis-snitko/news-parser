import React from 'react';
import { View, Text, StyleSheet, Button, Linking, Image } from 'react-native';
import { w } from '../helpers/constants';

export const ImageCard = ({ title, description, url, urlToImage }) => {
  const open = link => Linking.openURL(link);

  return (
    <View style={styles.container}>
      <Image source={{ uri: urlToImage }} style={styles.image} />
      <Text style={styles.h1} numberOfLines={3}>
        {title}
      </Text>
      <View style={styles.sub}>
        <Text style={styles.descr} numberOfLines={4}>
          {description}
        </Text>
      </View>
      <Button title="Подробнее..." onPress={() => open(url)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: w / 2 - 12,
    marginHorizontal: 4,
    padding: 8,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
  },
  sub: {
    marginBottom: 16,
    borderRadius: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  descr: {
    textAlign: 'center',
    lineHeight: 18,
  },
  h1: {
    marginBottom: 8,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    lineHeight: 20,
    textAlign: 'center',
  },
  image: {
    height: 100,
    marginBottom: 16,
    borderRadius: 10,
  },
});
