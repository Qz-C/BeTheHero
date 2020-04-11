import { StyleSheet  } from 'react-native';

import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 10
    },
    header: {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize:15,
        color: '#737390',
    },
    headerTextBold: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 32,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,

        color: '#737380'
    },

    incidentList: {
        marginTop: 16,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    incidentProperty: {
        fontSize: 14,
        color: '#42424d',
        fontWeight: 'bold',
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        height: 32,
        backgroundColor: '#e02041',
        borderRadius: 8,
        borderStyle: 'solid',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },

    detailsButtonText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    }
});