import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { styles as commonStyles } from 'react-native-style-tachyons'

const style = StyleSheet.create({
    group: {
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    badge: {
        color: '#fff',
        fontSize: 12
    },

    top: {
        backgroundColor: '#16dd27'
    },
    good: {
        backgroundColor: '#ff4e0d'
    }
})

export default class Badge extends React.Component {
    constructor(props) {
        super(props)
    }

    _renderItems() {
        const slogan = {
            top: '置顶',
            good: '精华'
        }
        const { ml2, pl3, pr3, pt1, pb1, br5 } = commonStyles
        const badgeStyle = [ml2, pl3, pr3, pt1, pb1, br5]
        const exist = Object.keys(slogan).filter(item => this.props[item])
        return exist.map((item, index) =>
            <View style={[...badgeStyle, style[item]]} key={index}>
                <Text style={style.badge}>{slogan[item]}</Text>
            </View>
        )

    }

    render() {
        return (
            <View style={style.group}>
                {this._renderItems()}
            </View>
        )
    }
}
