import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const InfoCard = ({ title }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: '90%',
    margin: 10,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default InfoCard;
