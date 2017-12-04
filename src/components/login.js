import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native';

import config from '../config'

export default class Login extends Component {
  constructor(){
    super()
    this.state = {
      user: 'alejandrorodriguez@gmail.com',
      password: '123'
    }
  }
  render() {
    const picture = {
      uri: 'https://ugc.kn3.net/i/760x/http://elduendedelaradio.files.wordpress.com/2009/05/cerdito_babe.gif'
    }

    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Image source={picture}  style={{width: 130, height: 130}} />
          <Text style={[styles.txt, {marginTop: 10, fontSize: 26, fontWeight: '800',textAlign: 'center'}]}>Bienvenido a Ruta del Ahorro</Text>
        </View>
        <View style={styles.box}>
          <TextInput
            ref={'user'}
            value={this.state.user}
            onChangeText={(text)=> {
              this.setState({user: text})
            }}
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType={'email-address'}
            returnKeyType={'next'}
            onSubmitEditing={()=>{
              this.refs.password.focus()
            }}
            style={styles.input}/>

          <View style={{height: 10}}></View>
          <TextInput
            ref={'password'}
            value={this.state.password}
            onChangeText={(text)=> {
              this.setState({password: text})
            }}
            value={this.state.password}
            secureTextEntry={true}
            style={styles.input}/>

          <View style={{height: 10}}></View>

            <TouchableHighlight style={styles.button} onPress={this.submit.bind(this)}>
              <Text style={styles.txtButton}>Login</Text>
            </TouchableHighlight>
        </View>
      </View>
    )
  }
  submit() {
    let {user,password} = this.state
    alert(`user: ${user} ${password}`)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8e44ad',
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10
  },
  txt: {
    color: '#FFF',
  },
  box: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10
  },
  input: {
    color: '#FFF',
    backgroundColor: '#9b59b6',
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    borderRadius: 5
  },
  button: {
    height: 50,
    backgroundColor: '#8e44ad',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtButton: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
    fontWeight: '800'
  }
})
