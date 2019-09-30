import React, { Component } from 'react';
import { View, Text , FlatList} from 'react-native';
import webservice from '../services/webservice'

export default class Main extends Component {

    state = {
        repos: [],
    };

    componentDidMount() {
        this.loadMyRepos();
    }

    loadMyRepos = async () => {
        const response = webservice.get('/users/Italord0/repos')
            .then(response => {
                //console.log(response.data);
                const repos = response.data;
                this.setState( {repos} );
            })
            .catch(error => {
                console.log(error);
            });
    }

    renderItem = ( {item} ) =>(
        <View>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
        </View>
    );

    render() {
        return (
            <View>
                <FlatList 
                data={this.state.repos}
                keyExtractor={item => item.id}
                renderItem={this.renderItem}
                />
            </View>
        );
    }
}