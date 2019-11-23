import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Login from './Login';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
          <Login/>
      </SafeAreaView>
        
        
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
