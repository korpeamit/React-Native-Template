import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import logo from '../../assets/images/logo/logo.png'
class Login extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image source={logo} style={styles.logoStyle}></Image>
                    </View>
                    <View style={styles.formWrp}>
                        <TextInput
                            //value={}
                            //onChangeText={}
                            underlineColorAndroid={'transparent'}
                            autoCapitalize="none"
                            returnKeyType="done"
                            returnKeyLabel="Done"
                            placeholder={"User Name"}
                            placeholderTextColor="#ddd"
                           // onSubmitEditing={}
                            autoFocus={true}
                            blurOnSubmit={true}
                            maxLength={24}
                            style={[styles.textInputStyle]}
                        />
                        <TextInput
                            //value={}
                            //onChangeText={}
                            underlineColorAndroid={'transparent'}
                            autoCapitalize="none"
                            returnKeyType="done"
                            returnKeyLabel="Done"
                            placeholder={"Password"}
                            placeholderTextColor="#ddd"
                           // onSubmitEditing={}
                           secureTextEntry 
                            autoFocus={true}
                            blurOnSubmit={true}
                            maxLength={24}
                            style={[styles.textInputStyle]}
                        />
                        <TouchableOpacity style={styles.loginBtn}>
                            <Text style={styles.loginText}>SIGN IN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default Login;