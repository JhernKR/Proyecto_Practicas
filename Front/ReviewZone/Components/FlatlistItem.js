import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback 
} from 'react-native';

export default class FlatlistItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => this.props.detalles(this.props.review)}>
          <View>
            <View style={styles.mView}>
              <View style={styles.sViewT}>
                <Text style={{ fontWeight: 'bold' }}>{this.props.review.Titulo}</Text>
              </View>
            </View>
            <View style={styles.mView}>
              <View style={styles.sViewT}>
                <Text>Valoración personal: {this.props.review.Val_personal}</Text>
              </View>
            </View>
            <View style={styles.mView}>
              <View style={styles.sViewT}>
                <Text>Usuario: {this.props.review.Usuario.Nombreusuario}</Text>
              </View>
            </View>
          </View>  
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    padding: 8,
    borderColor: 'darkblue',
    borderRadius: 15,
    borderWidth: 1.3,
    margin: 1,
  },
  mView: {
    flex: 1,
    flexDirection: 'row',
  },
  sViewT: {
    flex: 3 / 4,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 1,
  },
});