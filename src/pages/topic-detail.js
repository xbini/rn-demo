import React from 'react'
import { WebView } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { generateNavigationOptions } from '../constants/utils'
import { getTopic } from '../service/topic-service'
import LoadingView from '../components/loading-view'

export class TopicDetail extends React.Component {
    static navigationOptions = ({ navigation }) => generateNavigationOptions('内容')

    state = {
        topic: null,
        loading: false
    }

    _loadTopic() {
        const { navigation } = this.props
        const id = navigation.getParam('id')
        this.setState({ loading: true })
        return getTopic(id, { mdrender: false })
            .then(data => this.setState({ topic: data }))
            .finally(() => this.setState({ loading: false }))
    }

    componentDidMount() {
        this._loadTopic()
    }

    render() {
        return (
            <LoadingView loading={this.state.loading}>
                <WebView>{'22s'}</WebView>
            </LoadingView>
        )
    }
}

export const TopicDetailStack = createStackNavigator({
    TopicDetail
})
