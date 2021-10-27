import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login'
import TabNavigation from "./TabNavigation";
import MapDestiny from '../pages/MapDestiny';


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
                component={Login} /> 
                <Stack.Screen 
                name="Path" 
                component={TabNavigation} />
                <Stack.Screen 
                name="Map"
                component={MapDestiny}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;