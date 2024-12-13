import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <ScrollView style={styles.container}>
      <InfoCard 
        imageUrl="https://placekitten.com/300/200" 
        title="Cute Kitten"
        description="This is a cute kitten. Look at its playful expression!" 
      />
      <InfoCard 
        imageUrl="https://placekitten.com/300/201" 
        title="Playful Kitten"
        description="This kitten is ready to play, full of energy!" 
      />
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});
