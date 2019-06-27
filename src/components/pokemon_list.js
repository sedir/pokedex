import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default class PokemonList extends React.Component {


    renderListItem(pokemon) {
        const {item} = pokemon;

        return <View style={styles.containerListItem}>
                <Text style={styles.textListItem}>{ item.name }</Text>
            </View>
    }

    render() {
        const { pokemons, func_loadPokemon } = this.props;
        return (
            <FlatList 
                renderItem={ this.renderListItem }
                data={pokemons}
                keyExtractor={(item, index) => `${index}`}
                onEndReachedThreshold={ 0.1 }
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