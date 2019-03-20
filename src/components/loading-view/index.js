import React from 'react'
import { View } from 'react-native'
import { styles as commonStyles } from 'react-native-style-tachyons'
import Spinner from '../spinner'

export default class LoadingView extends React.Component {
    render() {
        const { loading, children } = this.props
        const { mt2 } = commonStyles
        return (
            loading ? <View style={[mt2]}><Spinner/></View> : <>{children}</>
        )
    }
}
