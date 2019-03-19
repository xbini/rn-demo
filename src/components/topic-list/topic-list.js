import React from 'react'
import { RefreshControl, FlatList } from 'react-native'
import TopicItem from './topic-item'
import { navigate } from '../../navigation/navigation-service'
import { getTopics } from '../../service/topic-service'

export default class TopicList extends React.Component {
    constructor(props) {
        super(props)
    }

    state = { refreshing: false, list: [] }

    _onRefresh() {
        this.setState({ refreshing: true })
        getTopics()
            .then(({ data }) => {
                this.setState({ refreshing: false })
                this.setState({ list: data })
            })
    }

    _onItemClick({ id, title }) {
        navigate('TopicDetail', { id, title })
    }

    componentDidMount() {
        this._onRefresh()
    }


    render() {
        const refreshControl = <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh.bind(this)}/>
        return (
            <FlatList refreshControl={refreshControl}
                      data={this.state.list}
                      renderItem={({ item }) => <TopicItem onClick={(data) => this._onItemClick(data)} data={item}/>}
                      keyExtractor={(item) => item.id}>
            </FlatList>
        )
    }
}
