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
            <View style = {{backgroundColor:"white", marginTop:"50%"}}>
                <View style = {styles.container}>
                    <TouchableOpacity style = {styles.button} onPress = {() => this.onSwitch(true)}>
                        <Text style = {styles.text}>
                            Log In
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {() => this.onSwitch(false)}> 
                        <Text style = {styles.text}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View> 
                <View style = {{}}>
                    {this.state.component}
                </View>
            </View>
        )
    }
    
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "95%"
    },
    button: {
        marginTop: "50%",
        alignItems: 'center',
        backgroundColor: 'purple',
        fontWeight: "bold",
        padding: 10,
        width: "50%"
    },
    text: {
        borderColor:"black",
        color: "black",
        fontWeight: "bold",
        fontSize: 35
    }
  });
  
  export default HomePage; 
