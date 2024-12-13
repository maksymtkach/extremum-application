import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import InfoCard from './InfoCard'; // Import the InfoCard component

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]); // State to store fetched data

  // Fetch data from the server
  useEffect(() => {
    // Function to fetch data
    const fetchData = () => {
      axios.get('http://192.168.129.4:3000/data')
        .then(response => {
          console.log(response.data);
          setData(response.data); // Set the fetched data to state
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };

    // Initial data fetch
    fetchData();

    // Set up interval to fetch data every 2 seconds
    const intervalId = setInterval(fetchData, 2000); // 2000ms = 2 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty array means this effect runs once when the component mounts

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      {/* ScrollView to make sure the content is scrollable if it overflows */}
      <ScrollView style={styles.cardContainer}>
        {data.map((item, index) => (
          <InfoCard
            key={index}
            title={item.title} // Pass title from fetched data
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
});
