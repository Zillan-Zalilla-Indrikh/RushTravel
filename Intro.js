import React from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
 
const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Book a shuttle ride today with RushTravel! Enjoy a comfortable and affordable ride with us.',
    image: require('../assets/images/intro1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Avoid being overcharged, RushTravel provides you with transparent pricing for each ride service.',
    image: require('../assets/images/intro2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'Register an account today! Enjoy amazing rides with RushTravel.',
    image: require('../assets/images/intro3.png'),
    backgroundColor: '#22bcb5',
  }
];
 
export default class App extends React.Component {
  this.state = {
    showRealApp: false
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
    }
  }
}