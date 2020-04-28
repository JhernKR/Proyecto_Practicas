import * as React from 'react';
import { Text, View, Button, StyleSheet, FlatList, Picker, TextInput, TouchableWithoutFeedback, Image, Alert } from 'react-native';
import Pedido from "../Components/Pedido.js";

export default class LogIn extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      reviews : [],
      usuario : this.props.route.params.usuario
    }
  }

  componentDidMount() {
    this.update = this.props.navigation.addListener('focus', () => {
      this.listadoReviews();
    })
  }

  listadoReviews = async () => {
    try {
      let response = await fetch(`http://10.0.2.2:50921/api/Manga_Comic`);

      let responseJson = response.ok ? await response.json() : Alert.alert("Error");

      if (responseJson != null) {
        let arrayReviews = [];
        for (let i = 0; i < responseJson.length; i++) {
            arrayReviews.push(responseJson[i])
        }
        this.setState({ reviews: arrayReviews })
      }
      else { 
        console.log("Error") 
      }

    } catch (error) {
      Alert.alert("Error");
    }
  }

  render() {

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Text style={styles.text}> {this.state.usuario.Nombreusuario}</Text>
          
          <FlatList
            style={styles.lista}
            data={this.state.reviews}
          />
        }

        <View style={{ flexDirection: "row", justifyContent: "center", borderTopWidth: 1}}>

          <View style={styles.buttons}>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate('LogIn')}>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
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
  }
});


