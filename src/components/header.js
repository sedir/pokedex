import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Header(props){
    return <Image style={styles.logo} source={ require('../../assets/pokedex.png') } />
}

const styles = StyleSheet.create({
    logo: {
        height: 65,
        resizeMode: 'contain',
        alignSelf: 'center'
    }
});