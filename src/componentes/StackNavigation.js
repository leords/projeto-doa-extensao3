import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginUser from '../pages/Login/loginUser';
import TabNavigation from "./TabNavigation";


const Stack = createNativeStackNavigator();

function StackNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login" // -> initialRouteName = pagina inicial da aplicação.
                screenOptions={{              
                    headerShown: false // -> headerShown = não aparecer o cabeçalho das paginas.
                }}
            > 
                <Stack.Screen 
                name="Login" 
                component={LoginUser} /> 
                <Stack.Screen 
                name="Paths" 
                component={TabNavigation} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;