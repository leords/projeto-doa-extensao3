import React, {useState} from "react";
import { View } from "react-native";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import styles from './styles';

function Map(){

    const [position, setPosition] = useState({
        latitude: -26.1964369,
        longitude: -50.3695686,                
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      });

    const [destination, setDestination] = useState({
        latitude: -26.1839029,
        longitude: -50.3962976,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
    })


    return(
        <View style={styles.container}>
            <MapView 
                style={styles.map}
                region={position}
                showsUserLocation={true}
                loadingEnabled={true}
            >
                <Marker 
                    coordinate={destination} 
                    title={'Leonardo'}
                    description={'Jaquetas'}
                    >
                </Marker>                               
                

                <MapViewDirections
                    strokeWidth={3}		//tamanho da linha que vai demarcar a rota no mapa
                    strokeColor="steelblue"	//cor da linha
                    origin={position}		//a posição do usuário
                    destination={destination}	//o local final da rota
                    apikey={"AIzaSyA68Jkduv4wVAMgZSfg4_m6ftJ8p62JFEU"}	//sua api key
                    mode="DRIVING"
                />

            </MapView>
        </View>
    );
}

export default Map