import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import TopicList from '../components/topic-list/topic-list'
import { generateNavigationOptions } from '../constants/utils'

const styles = StyleSheet.create({
    container: {}
})

export default class Home extends React.Component {
    static navigationOptions = (options) => generateNavigationOptions('主页')

    render() {
        return (
            <View style={styles.container}>
                <TopicList/>
            </View>
        )
    }
}
