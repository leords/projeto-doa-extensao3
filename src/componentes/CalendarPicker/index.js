import React from "react";
import { View, Text } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

import styles from './styles';

function Calendar() {

    return (
      <View style={styles.container}>
        <CalendarPicker
            width={350}
            weekdays={['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM']} // formas que os dias da semana aparecem.
            months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']} // formas que os mêses no calendário aparecem.
            todayTextStyle={{       //Aumentar a fonte do dia atual!
                color: 'white',
                fontSize: 16
            }}
            previousTitle= 'Anterior' // forma de alterar para mês anterior
            nextTitle= 'Próximo' // forma de alterar para próximo mês
            selectedDayColor="steelblue"
            textStyle={{
                color: 'steelblue', 
                fontSize: 13,
            }}
        />
      </View>
    );
  }


export default Calendar
