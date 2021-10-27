import React, {useState} from "react";
import MapView from 'react-native-maps';
import { View } from "react-native";

import styles from './styles';

function Map(){

    const [position, setDestination] = useState({
        latitude: -26.1839027,
        longitude: -50.3962975,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      });


    return(
        <View style={styles.container}>
            <MapView 
                style={styles.map}
                region={position}
                showsUserLocation={true}
                loadingEnabled={true}
            >
            </MapView>
        </View>
    );
}

export default Map