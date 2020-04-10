import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text> 
      <Text style={styles.text}>{props.name}</Text> 
    </View>

  );
};

Header.defaultProps = {
    title: 'Jake App Header',
}

const styles = StyleSheet.create({
  header: {
    height: 60,  
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
  },
});

export default Header;