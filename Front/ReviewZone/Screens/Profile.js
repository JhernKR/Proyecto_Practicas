import * as React from 'react';
import { Image, ImageBackground, Text, View, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput, Picker, FlatList } from 'react-native';
import { Header, Icon, Input } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import FlatlistItem from '../Components/FlatlistItem';

export default class Profile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      reviews : [],
      categoria : 'Pelicula'
    }
  }

  componentDidMount() {
    this.update = this.props.navigation.addListener('focus', () => {
      this.cargarReviews(this.state.categoria);
    })
  }

  cargarReviews = async (categoria) => {
    try {
      let response = await fetch(`http://10.0.2.2:50921/api/${categoria}`);

      let responseJson = response.ok ? await response.json() : Alert.alert("Error");

      if (responseJson != null) { this.setState({ reviews: responseJson }) }
      else { console.log("Error al cargar reviews")}

    } catch (error) {
      Alert.alert("Error");
    }
  }

  cambiarCategoria = (value) => {
    this.setState({ categoria: value })

    this.cargarReviews(value);
  }

  verDetalles = (obj) => {
    if (this.state.categoria == "Serie") {
      this.props.navigation.navigate('DetallesSerie', {review : obj});
    }
    if (this.state.categoria == "Pelicula") {
      this.props.navigation.navigate('DetallesPelicula', {review : obj});
    }
    if (this.state.categoria == "Anime") {
      this.props.navigation.navigate('DetallesAnime', {review : obj});
    }
    if (this.state.categoria == "Videojuego") {
      this.props.navigation.navigate('DetallesVideojuego', {review : obj});
    }
    if (this.state.categoria == "Manga_Comic") {
      this.props.navigation.navigate('DetallesManga', {review : obj});
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
            <ImageBackground
            source={require('../Imagenes/fondologin.jpg')}
            resizeMode="cover"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
            >
              <Header containerStyle={{marginTop: -25, flex: 0.09}} backgroundColor="#fcad03" leftComponent={{ icon: 'chevron-left', type: 'AntDesign', color: '#fff', onPress: () => this.props.navigation.navigate('Reviews') }}
              centerComponent={{ text: 'Perfil del usuario', style: { color: '#fff' } }} ></Header>
              <View style={{flex: 0.9, marginLeft: 5, marginTop: 5}}>
              <View>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Nombre:   Josep</Text>
                </View>
                <View>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Nombre Usuario:    Joheto01</Text>
                </View>
              <Picker selectedValue={this.state.categoria} onValueChange={this.cambiarCategoria}>
                <Picker.Item label="Pelicula" value="Pelicula" />
                <Picker.Item label="Anime" value="Anime" />
                <Picker.Item label="Videojuego" value="Videojuego" />
                <Picker.Item label="Serie" value="Serie" />
                <Picker.Item label="Manga/Comic" value="Manga_Comic" />
              </Picker>
              <FlatList
                style={styles.flatlist}
                data={this.state.reviews}
                renderItem={({ item }) => (
                  <FlatlistItem
                    review={item}
                    detalles={this.verDetalles}
                  />
                )}
              />
              </View>
            </ImageBackground>
      </View>        
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#fcad03',
    borderWidth: 1
 },
 submitButton: {
    backgroundColor: '#fcad03',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'white'
 },
 image: {
  flex: 1
},
image_imageStyle: {},
materialHeader1: {
  width: 360,
  height: 56,
  backgroundColor: "rgba(255,165,0,1)"
},
rowContainer: {
  flex: 1, 
  flexDirection: "column",
  justifyContent: "space-between",
},
text: {
  alignSelf : 'center'
},
});