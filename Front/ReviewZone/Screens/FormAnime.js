import * as React from 'react';
import { Image, ImageBackground, Text, View, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Header, Icon, Input } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';

export default class FormAnime extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '5',
      value1: 'emision',
      titulo: '',
      num_cap: '',
      dur_cap: '',
      sinopsis: '',
      op_perso: '',
      generos: '',
      productora: '',
      usuario: this.props.route.params.usuario,
    };
  }

  SaveState = (asd, text) => {
    var regExp = /^[A-Za-z0-9À-ÿ][A-Za-z0-9À-ÿ -./,()]*$/;
    (regExp.test(text)) ? this.setState({ [asd] : text })
      : this.setState({ value: "" })
  }

  PublicarReview = async() => {
    let review =  {
      Titulo: this.state.titulo,
      Num_cap: this.state.num_cap,
      Dur_cap: this.state.dur_cap,
      Sinopsis: this.state.sinopsis,
      Op_personal: this.state.op_perso,
      Val_personal: this.state.value,
      Generos: this.state.generos,
      Productora: this.state.productora,
      Emision: this.state.value1,
      UsuarioId: this.state.usuario.UsuarioId
    }

    if(this.comprobar(review)) {      
      try {
        const response = await fetch('http://10.0.2.2:50921/api/Anime', {
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

  comprobar (review) {
    if (review.Titulo.lenght > 0 && review.Num_cap.lenght > 0 && review.Dur_cap.lenght > 0 && review.Sinopsis.lenght > 0 && review.Op_personal.lenght > 0 && review.Generos.lenght > 0 && review.Productora.lenght > 0) {
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
        centerComponent={{ text: 'Review del Anime', style: { color: '#fff' } }} ></Header>
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
              label = "Número de capítulos:"
              labelStyle = {{
                  color : 'black',
                  fontSize : 20
              }}
              underlineColorAndroid = "transparent"
              placeholder = "Introduce nº capítulos"
              placeholderTextColor = "#fff"
              autoCapitalize = "none"
              keyboardType = "numeric"
              onChangeText={(value) => this.SaveState("num_cap", value)}
            />

            <Input
              label = "Duración de capítulos:"
              labelStyle = {{
                  color : 'black',
                  fontSize : 20
              }}
              underlineColorAndroid = "transparent"
              placeholder = "Introduce dur. capítulos"
              placeholderTextColor = "#fff"
              autoCapitalize = "none"
              onChangeText={(value) => this.SaveState("dur_cap", value)}
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
 
            <Input
              label = "Productora:"
              labelStyle = {{
                  color : 'black',
                  fontSize : 20
              }}
              underlineColorAndroid = "transparent"
              placeholder = "Introduce productora"
              placeholderTextColor = "#fff"
              autoCapitalize = "none"
              onChangeText={(value) => this.SaveState("productora", value)}
            />

            <Text style={{alignSelf : 'flex-start', marginLeft: 12, fontSize: 20, fontWeight: 'bold'}}>Estado:</Text>
            <RadioButton.Group
              onValueChange={valor1 => this.setState({ value1 : valor1 })}
              value={this.state.value1}
            >
              <View style={{marginLeft : 5}}>
              <View style={{flexDirection:"row", alignContent: 'center', alignItems: 'center'}}>
              <RadioButton value='emision'/>
              <Text>En emision</Text>
              </View>
              <View style={{flexDirection:"row", alignContent: 'center', alignItems: 'center'}}>
              <RadioButton value='finalizada'/>
              <Text>Finalizado</Text>
              </View>
              </View>
            </RadioButton.Group>

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