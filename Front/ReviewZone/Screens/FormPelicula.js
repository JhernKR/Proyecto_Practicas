import * as React from 'react';
import { Image, ImageBackground, Text, View, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Header, Icon, Input } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';

export default class FormPelicula extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '5',
      usuario: this.props.route.params.usuario,
      titulo: '',
      duracion: '',
      sinopsis: '',
      reparto: '',
      op_perso: '',
      generos: ''
    };
  }

  SaveState = (asd, text) => {
    var regExp = /^[A-Za-z0-9À-ÿ][A-Za-z0-9À-ÿ -./,()]*$/;
    (regExp.test(text)) ? this.setState({ [asd] : text })
      : this.setState({ [asd]: "" })
  }

  PublicarReview = async() => {
    let review =  {
      Titulo: this.state.titulo,
      Duracion: this.state.duracion,
      Sinopsis: this.state.sinopsis,
      Op_personal: this.state.op_perso,
      Val_personal: this.state.value,
      Reparto: this.state.reparto,
      Generos: this.state.generos,
      UsuarioId: this.state.usuario.UsuarioId
    }

    if(this.comprobar()) {      
      try {
        const response = await fetch('https://reviewzone.azurewebsites.net/api/Pelicula', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( review ),
        });

        const json = response.ok ? await response.json() : alert('Error');

        alert(`Review publicada`);
      } catch (error) {
        alert(`Error: ${error}`);
      }
    }
    else {
      alert('Faltan campos por completar')
    }
  }

  comprobar () {
    if (this.state.titulo.length > 0 && this.state.duracion.length > 0 && this.state.sinopsis.length > 0 && this.state.op_perso.length > 0 && this.state.reparto.length > 0 && this.state.generos.length > 0 ) {
      return true;
    }
    else {
      return false;
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground
        source={require('../Imagenes/fondologin.jpg')}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <Header containerStyle={{marginTop: -25}} backgroundColor="#fcad03" leftComponent={{ icon: 'chevron-left', type: 'AntDesign', color: '#fff', onPress: () => this.props.navigation.navigate('Reviews') }}
        centerComponent={{ text: 'Review de la película', style: { color: '#fff' } }} ></Header>
        <ScrollView>
            <Input
              label = "Título:"
              labelStyle = {{
                  color : 'black',
                  fontSize : 20,
                  marginTop : 20
              }}
              underlineColorAndroid = "transparent"
              placeholder = "Introduce el título"
              placeholderTextColor = "#fff"
              autoCapitalize = "none"
              onChangeText={(value) => this.SaveState("titulo", value)}
            />

            <Input
              label = "Duración:"
              labelStyle = {{
                  color : 'black',
                  fontSize : 20
              }}
              underlineColorAndroid = "transparent"
              placeholder = "Introduce dur."
              placeholderTextColor = "#fff"
              autoCapitalize = "none"
              onChangeText={(value) => this.SaveState("duracion", value)}
            />

            <Input
              label = "Sinopsis:"
              labelStyle = {{
                  color : 'black',
                  fontSize : 20
              }}
              underlineColorAndroid = "transparent"
              placeholder = "Introduce Sinopsis"
              placeholderTextColor = "#fff"
              autoCapitalize = "none"
              multiline = {true}
              onChangeText={(value) => this.SaveState("sinopsis", value)}
            />

            <Input
              label = "Opinión personal:"
              labelStyle = {{
                  color : 'black',
                  fontSize : 20
              }}
              underlineColorAndroid = "transparent"
              placeholder = "Introduce opinión"
              placeholderTextColor = "#fff"
              autoCapitalize = "none"
              multiline = {true}
              onChangeText={(value) => this.SaveState("op_perso", value)}
            />

            <Text style={{alignSelf : 'flex-start', marginLeft: 12, fontSize: 20, fontWeight: 'bold'}}>Valoración Personal:</Text>
            <RadioButton.Group
              onValueChange={value1 => this.setState({ value : value1 })}
              value={this.state.value}
            >
              <View style={{flexDirection : 'row', marginLeft : 5}}>
              <View>
                <Text style={styles.text}>0</Text>
                <RadioButton value="0" />
              </View>
              <View>
                <Text style={styles.text}>1</Text>
                <RadioButton value="1" />
              </View>
              <View>
                <Text style={styles.text}>2</Text>
                <RadioButton value="2" />
              </View>
              <View>
                <Text style={styles.text}>3</Text>
                <RadioButton value="3" />
              </View>
              <View>
                <Text style={styles.text}>4</Text>
                <RadioButton value="4" />
              </View>
              <View>
                <Text style={styles.text}>5</Text>
                <RadioButton value="5" />
              </View>
              <View>
                <Text style={styles.text}>6</Text>
                <RadioButton value="6" />
              </View>
              <View>
                <Text style={styles.text}>7</Text>
                <RadioButton value="7" />
              </View>
              <View>
                <Text style={styles.text}>8</Text>
                <RadioButton value="8" />
              </View>
              <View>
                <Text style={styles.text}>9</Text>
                <RadioButton value="9" />
              </View>
              <View>
                <Text style={styles.text}>10</Text>
                <RadioButton value="10" />
              </View>
              </View>
            </RadioButton.Group>

            <Input
              label = "Reparto:"
              labelStyle = {{
                  color : 'black',
                  fontSize : 20
              }}
              underlineColorAndroid = "transparent"
              placeholder = "Introduce reparto"
              placeholderTextColor = "#fff"
              autoCapitalize = "none"
              multiline = {true}
              onChangeText={(value) => this.SaveState("reparto", value)}
            />

            <Input
              label = "Géneros:"
              labelStyle = {{
                  color : 'black',
                  fontSize : 20
              }}
              underlineColorAndroid = "transparent"
              placeholder = "Introduce géneros"
              placeholderTextColor = "#fff"
              autoCapitalize = "none"
              multiline = {true}
              onChangeText={(value) => this.SaveState("generos", value)}
            />

            <TouchableOpacity style={styles.submitButton} onPress={this.PublicarReview}>
              <Text style={styles.submitButtonText}> Confirmar </Text>
            </TouchableOpacity>

        </ScrollView>
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