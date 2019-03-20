import React from 'react'
import { WebView, View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { generateNavigationOptions, generateTopicDetailHtml } from '../constants/utils'
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
        return getTopic(id, { mdrender: true })
            .then(({ data }) => this.setState({ topic: data }))
            .finally(() => this.setState({ loading: false }))
    }

    _renderTopic() {
        const { topic } = this.state
        if (topic) {
            const source = {
                html: generateTopicDetailHtml(topic)
            }
            return (
                <WebView originWhitelist={['*']}
                         mixedContentMode={'always'}
                         useWebKit={true}
                         source={source}/>
            )
        }
        return (
            <View><Text>error</Text></View>
        )
    }

    componentDidMount() {
        this._loadTopic()
    }

    render() {
        const { loading } = this.state
        return (
            <LoadingView loading={loading}>
                {this._renderTopic()}
            </LoadingView>
        )
    }
}

export const TopicDetailStack = createStackNavigator({
    TopicDetail
})
