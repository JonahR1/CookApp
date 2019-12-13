import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import HomePage from './src/components/HomePage';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
          <HomePage/>
      </SafeAreaView>
        
        
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
