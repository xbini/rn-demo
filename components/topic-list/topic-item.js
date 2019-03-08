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

const styles = StyleSheet.create({
    secondColor: {
        color: '#909090'
    },
    item: {
        flexDirection: 'row',
        paddingBottom: 10
    },
    avatar: {
        width: 80,
        height: 80,
        marginRight: 10
    },
    infoView: {
        flex: 1
    },
    title: {},
    subInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})

export default class TopicItem extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {}

    _goDetail(id) {
    }

    render() {
        const { author, title, create_at, top, good, visit_count } = this.props.data
        const { f5, h3, w3, mb2, mr2, mv1, mr1, mb1, pa2, tr, jcfe, flx_i, flx_row } = commonStyles
        const item = (
            <View style={[flx_row, mb2, pa2]}>
                <Image style={[w3, h3, mr2]} source={{ uri: author.avatar_url }}/>
                <View style={[flx_i]}>
                    <Text style={[f5, mb1]}>{title}</Text>
                    <Badge top={top} good={good}/>
                    <View style={[flx_row, jcfe, mv1]}>
                        <Text style={[styles.secondColor, mr1]}>
                            {author.loginname}
                        </Text>
                        <Text style={styles.secondColor}>
                            {moment(create_at).format('YYYY-MM-DD HH:mm:ss')}
                        </Text>
                    </View>
                    <Text style={[styles.secondColor, tr]}>阅读: {visit_count}</Text>
                </View>
            </View>
        )
        const platform = {
            android: (
                <TouchableNativeFeedback onPress={this._goDetail.bind(this, title)}>
                    {item}
                </TouchableNativeFeedback>
            ),
            ios: (
                <TouchableOpacity onPress={this._goDetail.bind(this, title)}>
                    {item}
                </TouchableOpacity>
            )
        }
        return platform[Platform.OS]
    }
}
