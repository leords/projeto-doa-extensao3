import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    containerCalendar: {
        height: '53%',
        backgroundColor: 'white',

        // código para criar sombra no componente.
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },

    containerFlatList: {
        height: '47%',
        margin: '3%',
        marginTop: '7%'
    },

})

export default styles;