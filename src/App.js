import React, { Component } from 'react'
import { StyleSheet, View, Text ,TouchableOpacity,Alert} from 'react-native'
import PushNotification from 'react-native-push-notification'

export default class App extends Component {
    constructor(props) {
        super(props)

    }

    alert = () => {
        setTimeout(() => {
            Alert.alert(
                'NOTIFICATION ALERT',
                'To get a notification tap on ok',
                [
                    { text: 'OK', onPress: () => this.getNotification() }
                ],
                { cancelable: false }
            )

        }, 2000);
    }

    getNotification = () => {
        var PushNotification = require("react-native-push-notification");
        PushNotification.configure({
            onRegister: function (token) {
                console.log("TOKEN:", token);
            },
            onNotification: function (notification) {
                console.log("NOTIFICATION:", notification);
            },
            senderID: "YOUR GCM (OR FCM) SENDER ID",
            popInitialNotification: true,
            requestPermissions: true
        })

        PushNotification.localNotification({
            vibrate:true,
            vibration:300,

            title:'Here is your Notification',
            message:'please tap on the notification',
            actions:'["yes","no"]'
        })

        console.log('should have received notification by now')
        }

    render() {
            return(
            <View style = { styles.main } >
                    <TouchableOpacity
                        onPress={() => this.alert()}
                    >
                        <Text style={styles.text}>Press ME!</Text>
                    </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 35
    }
})