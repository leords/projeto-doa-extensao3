import { useNavigation } from '@react-navigation/native';
import React from "react";
import {Text, View, Image} from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';


import styles from './styles';

function LoginUser(){

    const {navigate} = useNavigation();

    function HandleNavigateToHomePage(){
        navigate('Paths');
      }


    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                style={styles.img}
                source={require('../../assets/img/logo-screen-login.png')}
                >
                </Image>
            </View> 
            <View style={styles.containerForm}>
                <View style={styles.form}>
                    <Text style={styles.inputText}> Email </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="meu@email.com.br"
                    >
                    </TextInput>

                    <Text style={styles.inputText}> Password </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="********"
                        secureTextEntry={true}
                    >
                    </TextInput>

                    <RectButton onPress={HandleNavigateToHomePage}>
                        <Text style={styles.button}>
                            Entrar!
                        </Text>
                    </RectButton>
                    <Text style={styles.recoverPass}>
                        Esqueceu sua senha?
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default LoginUser;