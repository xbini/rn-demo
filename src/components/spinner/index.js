import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { PALETTE } from '../../theme/theme'
import { styles as commonStyles } from 'react-native-style-tachyons'

export default class Spinner extends React.Component {
    render() {
        const { tc, mt2 } = commonStyles
        const loadingText = this.props.text || '加载中...'
        return (
            <View>
                <ActivityIndicator size="small" color={PALETTE.primaryColor}/>
                <Text style={[{ color: PALETTE.primaryColor }, tc, mt2]}>{loadingText}</Text>
            </View>
        )
    }
}
