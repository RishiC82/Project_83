import *as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Profile extends React.Component {
    render(){
        return( 
           <View style = {styles.container}>
                <Text> style = {styles.text} Profile </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        backgroundColor: 'blue',
        fontSize: 22,
        fontFamily: 'arial',
        marginTop: 'center',
    }
})