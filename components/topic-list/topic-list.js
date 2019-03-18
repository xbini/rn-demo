import React from 'react'
import { RefreshControl, FlatList } from 'react-native'
import TopicItem from './topic-item'
import { API } from '../../constants/api'

const loadTopics = (params = {}) => {
    return fetch(API.TOPICS, { method: 'GET', params })
        .then((res) => res.json())
}

export default class TopicList extends React.Component {
    constructor(props) {
        super(props)
    }

    state = { refreshing: false, list: [] }

    _onRefresh() {
        this.setState({ refreshing: true })
        loadTopics()
            .then(({ data }) => {
                this.setState({ refreshing: false })
                this.setState({ list: data })
            })
    }

    componentDidMount() {
        this._onRefresh()
    }


    render() {
        console.log(this.state.list)
        const { navigation } = this.props
        const refreshControl = <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh}/>
        return (
            <FlatList refreshControl={refreshControl}
                      data={this.state.list}
                      renderItem={({ item }) => <TopicItem data={item} navigation={navigation}/>}
                      keyExtractor={(item) => item.id}>
            </FlatList>
        )
    }
}
