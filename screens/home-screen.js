import React from 'react'
import {
    View,
    StyleSheet, Platform
} from 'react-native'
import TopicList from '../components/topic-list/topic-list'
import { generateNavigationOptions } from '../constants/utils'

const styles = StyleSheet.create({
    container: {}
})

export default class HomeScreen extends React.Component {
    static navigationOptions = (options) => generateNavigationOptions('主页')

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <TopicList navigation={navigation}/>
            </View>
        )
    }
}
