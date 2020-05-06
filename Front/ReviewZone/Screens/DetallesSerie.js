import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Picker, Alert } from 'react-native';

export default class DetallesSerie extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      review: this.props.route.params.review,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
    <Text>Detalles Serie {this.state.review.Titulo}</Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: "center",
    paddingTop: 10,
    fontFamily: "AveriaSerifLibre-Light",
  },
  lista: {
    padding: 4,
    height: "50%"
  },
  buttons: {
    borderRadius: 50, marginHorizontal: 25
  },
  flatlist: {
    margin: 10,
  }
});