import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import Dimensions from 'Dimensions';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity} from 'react-native';

export default class SignUpSection extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => {this.props.navigation.navigate('Register')}}>
        <Text style={styles.text}>¿No tienes una cuenta? Regístrate</Text>
      </TouchableOpacity>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //top: 65,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});