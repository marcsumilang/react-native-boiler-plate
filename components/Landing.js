import React, { useState } from 'react';
import {View, Text, Button} from 'react-native';

class Landing extends Component {
    constructor () {
      super();
      this.state = {
        counter: 0
      };
    }
    incrementCount () {
      this.setState({
        counter: this.state.counter + 1
      });
    }
    decrementCount () {
      this.setState({
        counter: this.state.counter - 1
      });
    }
    render () {
      return (
        <View>
          <Text>Count: {this.state.counter}</Text>
          {/* <Button onPress={this.decrementCount.bind(this)}>-</Button>
          <Button onPress={this.incrementCount.bind(this)}>+</Button> */}
        </View>
      );
    }
  }
  export default Landing;