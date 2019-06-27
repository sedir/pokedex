import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Header from './src/components/header';
import PokemonList from './src/components/pokemon_list'
import { list_pokemon } from './src/api';
import axios from 'axios';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = { loading: true, pokemon_list: undefined, next: undefined };
  }

  componentWillMount(){
    list_pokemon().then( (response) => {
      this.setState({ pokemon_list: response.data.results, next: response.data.next });
    }).catch( (response) => {
      console.log("Ocorreu um erro");
      console.log(response);
    } ).finally( () => {
      setTimeout( ()=> { this.setState({ loading: false }); }, 200 )
    });
  }

  renderContent(){
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="red" />
    } else {
      return <PokemonList pokemons={this.state.pokemon_list} next={this.state.next}
                          func_loadPokemon={this.loadMorePokemons.bind(this)} />
    }
  }

  loadMorePokemons() {
    axios.get(this.state.next).then( (response) => {
      pokemon_list = [...this.state.pokemon_list, ...response.data.results ]
      this.setState({ pokemon_list: pokemon_list, next: response.data.next });
    }).catch( (response) => {
      console.log("Ocorreu um erro");
      console.log(response);
    } ).finally( () => {
      setTimeout( ()=> { this.setState({ loading: false }); }, 200 )
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={"Pokédex"} />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto: {
    fontSize: 20,
    color: 'blue',
  }
});
