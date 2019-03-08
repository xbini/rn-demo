import React from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet
} from 'react-native'
import { Input, Icon } from 'react-native-elements'
import TopicList from '../components/topic-list/topic-list'
import { API } from '../constants/api'

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

const loadTopics = async (params = {}) => {
    return await fetch(API.TOPICS, { method: 'GET', params })
        .then((res) => res.json())
}

export default class HomeScreen extends React.Component {
    state = { list: [] }

    async componentDidMount() {
        const { data } = await loadTopics()
        this.setState({ list: data })
    }

    render() {
        return (
            <View style={styles.container}>
                <TopicList list={this.state.list}/>
            </View>
        )
    }
}
