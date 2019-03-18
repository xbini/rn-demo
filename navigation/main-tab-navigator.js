import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/tab-bar-icon/tab-bar-icon'
import HomeScreen from '../screens/home-screen'
import HelpScreen from '../screens/help-screen'
import LinksScreen from '../screens/links-screen'
import SettingsScreen from '../screens/settings-screen'
import { PALETTE } from '../theme/theme'

const HomeStack = createStackNavigator({
    Home: HomeScreen
})

const HelpStack = createStackNavigator({
    Help: HelpScreen
})

const LinksStack = createStackNavigator({
    Links: LinksScreen
})

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen
})

const stacks = {
    HomeStack,
    HelpStack,
    LinksStack,
    SettingsStack
}

const tabOptions = {
    HomeStack: {
        icon: Platform.OS === 'ios' ? 'ios-home' : 'md-home',
        text: '主页'
    },
    HelpStack: {
        icon: Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'md-information-circle',
        text: 'Help'
    },
    LinksStack: {
        icon: Platform.OS === 'ios' ? 'ios-link' : 'md-link',
        text: 'Link'
    },
    SettingsStack: {
        icon: Platform.OS === 'ios' ? 'ios-options' : 'md-options',
        text: 'Settings'
    }
}

const options = {
    defaultNavigationOptions: ({ navigation }) => {
        const { state } = navigation
        const { routeName } = state
        const tabBar = tabOptions[routeName]
        return {
            tabBarLabel: tabBar.text,
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                return <TabBarIcon focused={focused} name={tabBar.icon}/>
            }
        }
    },
    tabBarOptions: {
        activeTintColor: PALETTE.tabIconSelected,
        inactiveTintColor: PALETTE.tabIconDefault
    }
}

export const MainTabNavigator = createBottomTabNavigator(stacks, options)
