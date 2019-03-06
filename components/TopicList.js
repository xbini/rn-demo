import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        paddingBottom: 10
    },
    avatar: {
        width: 80,
        height: 80,
        marginRight: 10
    }
})

class TopicItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { author, title } = this.props.data
        return (
            <View style={styles.item}>
                <Image style={styles.avatar} source={{ uri: author.avatar_url }}/>
                <Text>{title}</Text>
            </View>
        )
    }
}

export default class TopicList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        console.log(this.props)
        return (
            <>
                {this.props.list.map(item => <TopicItem key={item.id} data={item}/>)}
            </>
        )
    }
}
