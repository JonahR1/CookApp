import React from 'react';
import { StyleSheet , View, TextInput, TouchableOpacity, Text} from 'react-native'

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            eMail : "",
            username : "",
            password : "",
        };
    }
    render(){
        return(
            <View style = {styles.container}>
                 <Text style = {styles.text} >
                    Email
                </Text>
                <TextInput style = {styles.textInput} placeholder = "Enter your Email" />

                <Text style = {styles.text} >
                    Username
                </Text>
                <TextInput style = {styles.textInput} placeholder = "Enter your Username"/>

                <Text style = {styles.text} >
                    Password
                </Text>
                <TextInput style = {styles.textInput} placeholder = "Enter your Password"/>

                <TouchableOpacity style = {styles.buttonText}>
                    <Text  style = {styles.buttonText}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    textInput: {
        width: "100%",
        fontSize: 23,
        color: "white",
        marginVertical: 10
    },
    buttonText: {
        fontSize: 33,
        fontWeight: "bold",
        color: "white",
        backgroundColor: "purple",
        textAlign: "center",
        borderRadius: 5
    },
    text: {
        fontSize: 23,
        fontWeight: "bold",
        color: "black"
    }
  });
  

export default SignUp;



