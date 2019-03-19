import React from 'react'
import {
    Alert,
    Modal,
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    View
} from 'react-native'
import { styles as commonStyles } from 'react-native-style-tachyons'
import moment from 'moment'
import Badge from './badge'
import { navigate } from '../../navigation/navigation-service'

const styles = StyleSheet.create({
    title: {
        overflow: 'hidden'
    },
    secondColor: {
        color: '#666'
    },
    replyText: {
        color: '#cc45b5'
    }
})

export default class TopicItem extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {}

    _goDetail(id, title) {
    }

    render() {
        const { onClick } = this.props
        const { id, author, title, reply_count, create_at, top, tab, good, visit_count } = this.props.data
        const { aic, f5, h3, w3, mb2, mr2, mt1, mb1, pa2, jcsb, flx_i, flx_row } = commonStyles
        const item = (
            <View style={[flx_row, aic, mb2, pa2]}>
                <Image style={[w3, h3, mr2]} source={{ uri: author.avatar_url }}/>
                <View style={[flx_i]}>
                    <Text style={[f5, mb1]}>{title}</Text>
                    <Badge top={top} good={good} tab={tab}/>
                    <View style={[flx_row, jcsb, mt1]}>
                        <View style={[flx_row]}>
                            <Text style={styles.replyText}>{reply_count}</Text>
                            <Text style={styles.secondColor}>/{visit_count}</Text>
                        </View>
                        <Text style={styles.secondColor}>
                            {moment(create_at).fromNow()}
                        </Text>
                    </View>
                </View>
            </View>
        )
        const platform = {
            android: (
                <TouchableNativeFeedback onPress={() => onClick({ id, title })}>
                    {item}
                </TouchableNativeFeedback>
            ),
            ios: (
                <TouchableOpacity onPress={() => onClick({ id, title })}>
                    {item}
                </TouchableOpacity>
            )
        }
        return platform[Platform.OS]
    }
}
