import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';
import PokemonType from '../components/type'


export default class PokemonScreen extends Component {

    constructor(){
        super()
        this.state = { pokemon: undefined }
    }

    componentWillMount(){
        const { url } = this.props.navigation.getParam('pokemon');

        axios.get(url).then( response => {
            this.setState({ pokemon: response.data });
        });
    }

    renderTypes(){
        const { pokemon } = this.state;
        return <View>{pokemon.types.map((data, i) => 
                <PokemonType key={i} name={data.type.name} />
              )
        }</View>
    }

    render() {
        const { pokemon } = this.state;

        if (this.state.pokemon === undefined) {
            return <ActivityIndicator style={styles.loading} size={'large'}  />
        }
        else 
        return (
            <View style={styles.container}>
                <Text style={styles.name}>{pokemon.name}</Text>
                <Image style={styles.image} source={{ uri: pokemon.sprites.front_default }} />
                { this.renderTypes() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    loading: {
        alignSelf: 'center'
    },
    name: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: 18
    },
    image: {
        height: 200,
        width: 200
    }
});