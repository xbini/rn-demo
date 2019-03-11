import React from 'react'
import { FlatList } from 'react-native'
import TopicItem from './topic-item'

export default class TopicList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.list)
        return (
            <FlatList data={this.props.list}
                      renderItem={({ item }) => <TopicItem data={item}/>}
                      keyExtractor={(item) => item.id}>
            </FlatList>
        )
    }
}
