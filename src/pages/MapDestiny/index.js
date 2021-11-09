import React from "react";
import { View, Text, ScrollView} from 'react-native';
import styles from "./styles";

import Map from '../../componentes/Map';
import Icon from 'react-native-vector-icons/AntDesign';


export function ItemInformationMap(props){
    return(
        <View style={styles.donate}>
            <View style={styles.containerh1}>
                <Text style={styles.h1}>{props.titulo}</Text>
            </View>
            <Text style={styles.text}>{props.firstInf}</Text>
            <Text style={styles.text}>{props.secondInf}</Text> 
        </View>
    );
}

function MapDestiny() {
    return(
        <View style={styles.container}>
            <View style={styles.containerMap}>
                <Map />
            </View>
            <View style={styles.containerInformation}>
                <ScrollView style={styles.scroll}>

                    <ItemInformationMap titulo={'Doações'} firstInf={'Jaqueta'} secondInf={'01/01/2022'} />

                    <ItemInformationMap titulo={'Sobre o doador(a)'} firstInf={'Leonardo Rodrigues'} secondInf={'47-984126073'} />

                    <ItemInformationMap titulo={'Observações:'} firstInf={'Roupas estão novas, estamos doando por estarem muitos pequenas, acredito que neste inverno seja feito bom uso destas roupas. Obrigado e bom final de ano!'} />

                </ScrollView>
            </View>
        </View>
    );
}

export default MapDestiny;