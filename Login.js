import React from 'react';
import { StyleSheet , View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView} from 'react-native'

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            nameState: ["username", "password"]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name, value) {
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <KeyboardAvoidingView style = {styles.container} behavior = "padding" enabled>
                <Text style = {styles.text} >
                    Username
                </Text>
                <TextInput style = {styles.textInput} placeholder = "Enter your username" onChangeText = {(text) => this.handleChange(this.state.nameState[0],text)}/>
                <Text style = {styles.text}>
                    Password
                </Text>
                <TextInput style = {styles.textInput} secureTextEntry={true} placeholder = "Enter your password" onChangeText = {(text) => this.handleChange(this.state.nameState[0],text)}/>
                <TouchableOpacity style = {styles.buttonText}>
                    <Text style = {styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    textInput: {
        width: "100%",
        fontSize: 26,
        color: "white",
        marginVertical: 10
    },
    buttonText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        backgroundColor: "purple",
        textAlign: "center",
        borderRadius: 5
    },
    text: {
        fontSize: 26,
        fontWeight: "bold",
        color: "black"
    }
  });
  

export default Login;

