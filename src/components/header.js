import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header(props){
    return <View style={styles.background}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
}

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        backgroundColor: 'red',
        paddingTop: 40,
        paddingBottom: 5,
    },
    title: {
        color: 'white',
        fontSize: 25,
    }
});