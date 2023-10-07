import *as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


export default class CreatePost extends React.Component{
    constructor(){
        super()
        this.state={previewImage}
    }
    render(){
        let preview_images = {
            "image_1": require("../assets/image_1.jpg"),
            "image_2": require("../assets/image_2.jpg"),
            "image_3": require("../assets/image_3.jpg"),
            "image_4": require("../assets/image_4.jpg"),
            "image_5": require("../assets/image_5.jpg"),
            "image_6": require("../assets/image_6.jpg"),
            "image_7": require("../assets/image_7.jpg"),
        }
        return(
          <View style = {styles.container}>
                <Text> style = {styles.text} Create Post </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        backgroundColor: 'green',
        fontSize: 22,
        fontFamily: 'arial',
        marginTop: 'center',
    }
})