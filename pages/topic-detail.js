import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { generateNavigationOptions } from '../constants/utils'

export class TopicDetail extends React.Component {
    static navigationOptions = ({ navigation}) =>({
        title:navigation.state.params.title
    })

    render() {
        console.log(this.props.navigation)
        return (
            <View style={[]}>
                <Text>Details Screen</Text>
            </View>
        )
    }
}

export const TopicDetailStack = createStackNavigator({
    TopicDetail
})
