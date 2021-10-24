import React from "react";
import { View, FlatList, Text } from "react-native";

import styles from './styles';

import Calendar from "../../componentes/CalendarPicker";
import CollectionItem from "../../componentes/CollectionItem";
import { TouchableOpacity } from "react-native-gesture-handler";

const coletas = [       //dados para lista a FlatList;
    {product: 'Blusas', local: 'Irineu Gonzaga', donor: 'Leonardo'},
    {product: 'Camisas', local: 'Irineu Gonzaga', donor: 'João'},
    {product: 'Casacos de inverno', local: 'Rua Wigando Wiese', donor: 'Jorge'},
    {product: 'Roupas de cama', local: 'Rua Irineu Gonzaga', donor: 'Julia'},
    {product: 'Vestidos', local: 'Rua Paula Pereira', donor: 'Abdidel'}
];


function Paths() {
    return(
        <View style={styles.container}>
            <View style={styles.containerCalendar}>
                <Calendar /> 
            </View>
            <View style={styles.containerFlatList}>
                <FlatList 
                    style={styles.flatList}
                    data={coletas}
                    renderItem={({item}) => 
                        <TouchableOpacity
                        onPress={() => {alert('Botão ativo!')}}
                        >
                            <CollectionItem product={item.product} local={item.local} donor={item.donor}/>
                        </TouchableOpacity>
                    }   
                />
            </View>
        </View>
 
    );
}
export default Paths;
