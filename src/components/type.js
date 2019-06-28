import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PokemonType = (props) => {
    return (
        <View style={{ ...styles.container, backgroundColor: colorPallet[props.name][0]}}>
            <Text style={{...styles.text, color: colorPallet[props.name][1]}}>{ props.name }</Text>
        </View>
    )
}

const colorPallet = {
    poison: ['purple', 'white'],
    fire: ['red', 'white'],
    water: ['blue', 'white'],
    grass: ['green', 'black'],
    electric: ['yellow', 'black'],
    normal: ['gray', 'white'],
    rock: ['darkgray', 'white'],
    bug: ['darkgreen', 'white'],
    flying: ['cyan', 'black'],
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 5,
        margin: 5
        
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 16,
        color: '#fff',
        alignSelf: 'center'
    }
})

export default PokemonType
