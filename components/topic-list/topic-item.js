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
    title: {
        fontSize: 16,
        margin: 'auto'
    },
    modal: {
        alignItems: 'center',
        flex: 1,
        alignContent: 'center'
    },
    modalContent: {
        margin: 'auto',
        backgroundColor: 'red'
    },
    subInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})


export default class TopicItem extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        visible: false
    }

    _goDetail(id) {
        this.setState({
            visible: true
        })
    }

    render() {
        const { author, title, create_at, top, visit_count } = this.props.data
        const item = (
            <View style={[styles.item]}>
                <Image style={styles.avatar} source={{ uri: author.avatar_url }}/>
                <View style={styles.infoView}>
                    <Text style={styles.title}>{title}</Text>
                    <View>
                    </View>
                    <View style={styles.subInfo}>
                        <Text style={styles.secondColor}>
                            {author.loginname}
                        </Text>
                        <Text style={styles.secondColor}>
                            {moment(create_at).format('YYYY-MM-DD HH:mm:ss')}
                        </Text>
                    </View>
                    <Text style={[styles.secondColor, commonStyles.tr]}>阅读: {visit_count}</Text>
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
        return (
            <>
                {platform[Platform.OS]}
                <Modal transparent={true} visible={this.state.visible} style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Text>I am the modal content!</Text>
                    </View>
                </Modal>
            </>
        )
    }
}
