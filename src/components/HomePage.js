import React from 'react';
import { StyleSheet , View, Text, TouchableOpacity} from 'react-native'
import { bold } from 'ansi-colors';
import Login from './Login';
import SignUp from './SignUp';

class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isLogin : true,
            component: <Login />
        }

        this.onSwitch = this.onSwitch.bind(this);
    }

    onSwitch(isLogin) {
        if(isLogin && !this.state.isLogin) {
            this.setState({
                component: <Login />,
                isLogin: true
            });
            styles.button.backgroundColor = "purple";
        }
        else if(!isLogin && this.state.isLogin) {
            this.setState({
                component: <SignUp />,
                isLogin: false
            });
        }
    }

    render(){
        return(
            <View style = {{backgroundColor:"white", marginTop:"60%"}}>
                <View style = {styles.container}>
                    <TouchableOpacity style = {this.state.isLogin ? [styles.button, styles.backgroundColorPurple, styles.borderTopLeftRadius10] : styles.button} onPress = {() => this.onSwitch(true)}>
                        <Text style = {this.state.isLogin ?  [styles.text, {color: "white"}] : styles.text}>
                            Log In
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {this.state.isLogin ? styles.button : [styles.button, styles.backgroundColorPurple, styles.borderTopRightRadius10] } onPress = {() => this.onSwitch(false)}> 
                        <Text style = {this.state.isLogin ? styles.text : [styles.text, {color: "white"}] }>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View> 
                <View style = {{marginTop:"10%"}}>
                    {this.state.component}
                </View>
            </View>
        )
    }
    
}
let styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "95%"
    },
    button: {
        alignItems: 'center',
        backgroundColor: "white",
        fontWeight: "bold",
        padding: 10,
        width: "50%",
    },
    text: {
        borderColor:"black",
        color: "black",
        fontWeight: "bold",
        fontSize: 35
    },
    backgroundColorPurple: {
        backgroundColor: "purple"
    },
    borderTopRightRadius10: {
        borderTopRightRadius: 10
    },
    borderTopLeftRadius10: {
        borderTopLeftRadius: 10
    }
  });
  
  export default HomePage; 
