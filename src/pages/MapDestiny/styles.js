import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: { 
        height: '100%',
        width: '100%',
    },

    containerMap: {
        height: '55%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerInformation: {
        height: '45%',
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },

    scroll: {
        padding: '5%'
    },

    donate: {
        margin: 10,
    },

    h1: {
        fontSize: 17,
        margin: '2%',
        marginLeft: '-1%',
        color: 'steelblue'
    },

    text: {
        fontSize: 13,
        color: 'dimgray'
    }
});

export default styles