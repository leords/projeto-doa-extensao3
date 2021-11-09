import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Text } from "react-native";
import {Calendar} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

import CollectionItem from "../../componentes/CollectionItem";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from './styles';

LocaleConfig.locales['fr'] = { //config for Calendar;;;
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'],
    dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
    today: 'Aujourd\'hui'
  };
  LocaleConfig.defaultLocale = 'fr';

const coletas = [       //dados para lista a FlatList;
    {product: 'Blusa', local: 'Irineu Gonzaga', donor: 'Leonardo', date: '2021-11-16'},
    {product: 'Calça', local: 'Irineu Gonzaga', donor: 'Leonardo', date: '2021-11-16'},
    {product: 'Tenis', local: 'Irineu Gonzaga', donor: 'Leonardo', date: '2021-11-16'},
    {product: 'Oculos', local: 'Irineu Gonzaga', donor: 'Leonardo', date: '2021-11-16'},
    {product: 'Jaqueta', local: 'Irineu Gonzaga', donor: 'Leonardo', date: '2021-11-16'},
    {product: 'Lençol', local: 'Irineu Gonzaga', donor: 'João', date: '2021-11-12'},
    {product: 'Casacos de inverno', local: 'Rua Wigando Wiese', donor: 'Jorge', date: '2021-11-16'},
    {product: 'Roupas de cama', local: 'Rua Irineu Gonzaga', donor: 'Julia', date: '2021-11-16'},
    {product: 'Vestidos', local: 'Rua Paula Pereira', donor: 'Abdidel', date: '2021-11-12'}  
];


function Path() {
    const [filterDonations, setFilterDonations] = useState()
    const [filterDate, setFilterDate] = useState()
    const [isDate, setIsDate] = useState()

    const {navigate} = useNavigation();

    function HandleNavigateToMapIngoPage (){        //função de navegação de tela;
        navigate('Map') 
    }

    useEffect(() =>  {        //atualizar as marcações de datas do calendário.
        listMarker() 
    }, [])

    async function listMarker() { //utilizando map no array coletas para retornar para o setFilterDate apenas as propriedades "date". 
        setFilterDate(          
            coletas.map(function(coletas){ 
                return coletas.date + {marked: true}
            })
            )   
        console.log('Array: ' + filterDate)
    }
               
    async function listDonation(day){         //função para filtrar em uma nova array as doações conforme a data retornado pelo calendário;
        setIsDate(day.year +'-'+ day.month + '-' +day.day)       //formatando a data para possiveis fomrato de comparações com os dados do banco;
        setFilterDonations(
            coletas.filter(function(coletas){       //utilizando filter no array coletas para retornar para o setFilterDate apenas as propriedades "date" igual a setada pelo calendário. 
                return coletas.date === isDate;
        }))
    }
 
    return(
        <View style={styles.container}>

            <View style={styles.containerCalendar}>
                <Calendar
                    style={{width: '100%'}}
                    markedDates={{
                        filterDate:{selected: true, selectedColor: 'steelblue'}, //analisar como passar está lista como objeto.
                        '2021-11-16': {selected: true, selectedColor: 'steelblue'},
                        '2021-11-12': {selected: true, selectedColor: 'steelblue'}, 
                    }}                      
                    current={Date()}
                    onDayPress={day => {
                        listDonation(day) //chamando a função para filtras as doações conforme a data de coleta!
                        listMarker()
                    }}
                    onMonthChange={month => {
                        alert('Alterou o mês!', month);
                    }}
                    hideArrows={false}
                    hideExtraDays={false}
                    disableMonthChange={false}
                    firstDay={1}
                /> 
            </View>

            <View style={styles.containerFlatList}>
                <FlatList 
                    style={styles.flatList}
                    data={filterDonations}
                    renderItem={({item}) => 
                        <TouchableOpacity
                        onPress={HandleNavigateToMapIngoPage}>
                            <CollectionItem 
                                product={item.product}
                                local={item.local}
                                donor={item.donor}
                            />
                        </TouchableOpacity> 
                    }   
                />
            </View>
        </View>
    );
}

export default Path;
