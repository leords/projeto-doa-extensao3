import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'steelblue',
        marginBottom: '2%'
        },

    containerTittle: {
        height: '40%',
        justifyContent: 'center',
        padding: '2%',
    },

    textTittle: {
        marginStart: '5%',
        fontSize: 16,
        color: 'white'
    },

    containerInfo: {
        flexDirection: 'row',
        height: '60%',
        justifyContent: "space-evenly",
        alignItems: 'center',
        padding: '2%',
    },

    textDados: {
        margin: '3%',
        fontSize: 13,
        color: 'white',
        marginHorizontal: '5%'
    },
})

export default styles;