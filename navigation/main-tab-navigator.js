import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/tab-bar-icon/tab-bar-icon'
import HomeScreen from '../screens/home-screen'
import HelpScreen from '../screens/help-screen'
import LinksScreen from '../screens/links-screen'
import SettingsScreen from '../screens/settings-screen'

const HomeStack = createStackNavigator({
    Form: HomeScreen
})

HomeStack.navigationOptions = {
    tabBarLabel: '主页',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
        />
    )
}

const HelpStack = createStackNavigator({
    Home: HelpScreen
})

HelpStack.navigationOptions = {
    tabBarLabel: 'Help',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    )
}

const LinksStack = createStackNavigator({
    Links: LinksScreen
})

LinksStack.navigationOptions = {
    tabBarLabel: 'Links',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
        />
    )
}

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen
})

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
        />
    )
}

export default createBottomTabNavigator({
    HomeStack,
    HelpStack,
    LinksStack,
    SettingsStack
})
