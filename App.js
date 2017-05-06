import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Constants, LinearGradient } from 'expo';

function incrementGradientPosition(position, step) {
  if (position >= 1) return 0;
  return position + step;
}

const { width } = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      gradientPosition: 0,
    };
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({
        gradientPosition: incrementGradientPosition(this.state.gradientPosition, 0.05),
      });
    }, 10).bind(this);
  }
  
  renderGradientPlaceHolders() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#f2f5f7', '#ECEFF2', '#f2f5f7']}
          start={{x: 0.0, y: 0}} end={{x: 1.0, y: 1.0}}
          locations={[0, this.state.gradientPosition, 1.0]}
          style={{ width: width * 0.9, height: 200 }}
        />
          <View style={styles.row}>
            <LinearGradient
              colors={['#f2f5f7', '#ECEFF2', '#f2f5f7']}
              start={{x: 0.0, y: 0}} end={{x: 1.0, y: 1.0}}
              locations={[0, this.state.gradientPosition, 1.0]}
              style={{ width: width * 0.6, height: 15, marginTop: 20, alignItems: 'center', justifyContent: 'center'}}
            />
            <LinearGradient
              colors={['#f2f5f7', '#ECEFF2', '#f2f5f7']}
              start={{x: 0.0, y: 0}} end1={{x: 1.0, y: 1.0}}
              locations={[0, this.state.gradientPosition, 1.0]}
              style={{ width: width * 0.15, height: 15, marginTop: 20 }}
            />
          </View>
          <LinearGradient
            colors={['#f2f5f7', '#ECEFF2', '#f2f5f7']}
            start={{x: 0.0, y: 0}} end={{x: 1.0, y: 1.0}}
            locations={[0, this.state.gradientPosition, 1.0]}
            style={{ width: width * 0.4, height: 15, marginTop: 10 }}
          />
      </View>
    );
  }
  
  render() {
    return (
      <View style={{flex: 1}}> 
        <ScrollView
          style={{flex: 1, alignItems: 'center', marginTop: 30}}
        >
          {[1,2,3].map(placeholder => this.renderGradientPlaceHolders(placeholder))}
        </ScrollView>
        <View style={styles.navBar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingTop: Constants.statusBarHeight * 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  navBar: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 67,
    backgroundColor: '#0ea800',
  },
});
