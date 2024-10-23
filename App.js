import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Boat from './Boat';
import Icon from 'react-native-vector-icons/Fontisto';

const App = () => {
  const boats = [
    {
      name: 'Sea Ray 500 Sundancer',
      description: 'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.',
      picture: require('./img/sea_ray.jpg'),
    },
    {
      name: 'Four Winns Horizon 180',
      description: 'A sporty look and refined details truly set the Horizon 180 above all others.',
      picture: require('./img/four_winns.jpg'),
    },
    {
      name: 'Flipper 640 ST',
      description: 'A modern take on the classic, traditional hardtop and perfect for a family picnic.',
      picture: require('./img/flipper.jpg'),
    },
    {
      name: 'Princess V48',
      description: 'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.',
      picture: require('./img/princess.jpg'),
    },
    {
      name: 'Bayliner 175 Bowrider',
      description: 'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.',
      picture: require('./img/bayliner.jpg'),
    },
    {
      name: 'Fairline Targa 47',
      description: 'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.',
      picture: require('./img/fairline.jpg'),
    },
  ];

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name="sait-boat" size={20} color="#000" style={styles.icon}> {/* Use correct icon name */}
          <Text style={styles.headerText}>GetABoat - For Sale</Text>
          </Icon>
        </View>

        <ScrollView>
          {boats.map((boat, index) => (
              <Boat key={index} {...boat} />
          ))}
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    paddingTop: 40,
  },
  icon: {
    marginRight: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default App;

