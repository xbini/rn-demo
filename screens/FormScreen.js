import React from 'react'
import {
    Text,
    View,
    ScrollView
} from 'react-native'
import { Input, Icon } from 'react-native-elements'
import TopicList from '../components/TopicList'
import { API } from '../constants/API'

const loadTopics = async (params = {}) => {
    return await fetch(API.TOPICS, { method: 'GET', params })
        .then((res) => res.json())
}

export default class FormScreen extends React.Component {
    state = { list: [] }

    async componentDidMount() {
        const { data } = await loadTopics()
        this.setState({ list: data })
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <TopicList list={this.state.list}/>
                </ScrollView>
            </View>
        )
    }
}
