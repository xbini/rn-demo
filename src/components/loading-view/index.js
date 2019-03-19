import React from 'react'
import { View, Text } from 'react-native'

export default class LoadingView extends React.Component {
    render() {
        const { loading, children } = this.props
        return (
            loading ? <View><Text>loading...</Text></View> : <View>{children}</View>
        )
    }
}
