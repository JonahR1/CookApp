import React from 'react';
import { StyleSheet , View, TextInput, Button} from 'react-native'

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
            <View style = {styles.container}>
                <TextInput style = {styles.textInput} placeholder = "Enter your username" onChangeText = {(text) => this.handleChange(this.state.nameState[0],text)}/>
                <TextInput style = {styles.textInput} secureTextEntry={true} placeholder = "Enter your password" onChangeText = {(text) => this.handleChange(this.state.nameState[0],text)}/>
                <Button style = {styles.button} title='Connection' onPress={() => {}}/>
                <Button style = {styles.button} title = 'Sign Up'/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: "50%"
    },
    textInput: {
        borderColor: 'gray', 
        borderWidth: 1,
        color: 'white'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    }
  });
  

export default Login;

