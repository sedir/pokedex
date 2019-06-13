import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Header from './src/components/header';
import { list_pokemon } from './src/api';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = { loading: true, data: undefined };
  }

  componentWillMount(){
    list_pokemon().then( (response) => {
      this.setState({ data: response.data });
    }).catch( (response) => {
      console.log("Ocorreu um erro");
      console.log(response);
    } ).finally( () => {
      setTimeout( ()=> { this.setState({ loading: false }); }, 4000 )
      
    });
  }

  renderContent(){
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="red" />
    } else {
      return <Text style={styles.texto}>Aqui vai ficar a lista!</Text>
    }
  }

  render() {
    return (
      <View>
        <Header title={"Pokédex"} />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    color: 'blue',
  }
});
