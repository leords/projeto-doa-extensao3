import React from "react";
import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles'


function CollectionItem(props) {
    return(
        <View style={styles.container}>
            <View style={styles.containerTittle}>
                <Text style={styles.textTittle}>{props.product}</Text>
            </View>
            <View style={styles.containerInfo}>
                <Icon
                    name="enviromento"            // Icones
                    size={22}
                    color="white"
                    style={styles.icon}
                />
                <Text style={styles.textDados}>{props.local}</Text>
                <Icon
                    name="user"
                    size={22}
                    color="white"
                    style={styles.icon}
                />
                <Text style={styles.textDados}>{props.donor}</Text>
            </View>
        </View>
    );
}

export default CollectionItem;