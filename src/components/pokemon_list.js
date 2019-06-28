import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';


export default class PokemonList extends React.Component {


    renderListItem(pokemon) {
        const {item} = pokemon;

        return <TouchableOpacity onPress={ () => this.props.func_letsgo(item) }>
                <View style={styles.containerListItem}>
                <Text style={styles.textListItem}>{ item.name }</Text>
                </View>
            </TouchableOpacity>
    }

    render() {
        const { pokemons, func_loadPokemon } = this.props;
        return (
            <FlatList 
                renderItem={ this.renderListItem.bind(this) }
                data={pokemons}
                keyExtractor={(item, index) => `${index}`}
                onEndReachedThreshold={ 0.4 }
                onEndReached={ func_loadPokemon }
                />
        );
    }
}

const styles = StyleSheet.create({
    containerListItem: {
        backgroundColor: 'tomato',
        margin: 10,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    textListItem: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'capitalize'
    }
});