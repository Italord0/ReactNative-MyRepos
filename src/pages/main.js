import React, { Component } from 'react';
import { View, Text, FlatList , StyleSheet } from 'react-native';
import webservice from '../services/webservice'
import { white } from 'ansi-colors';

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
                const repos = response.data;
                this.setState({ repos });
            })
            .catch(error => {
                console.log(error);
            });
    }

    renderItem = ({ item }) => (
        <View style={styles.container}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#53418C",
        margin: 8,
        padding: 16,
        borderRadius: 8,
    },
    title : {
        fontSize : 40,
        color: 'white',
    },
    description: {
        marginTop: 30,
        fontSize : 20,
        color: '#FAFBFC'
    }

});