import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import TopicList from '../components/topic-list/topic-list'

const styles = StyleSheet.create({
    container: {
    }
})

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TopicList/>
            </View>
        )
    }
}
