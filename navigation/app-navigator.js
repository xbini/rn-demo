import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import { TopicDetailStack } from '../pages/topic-detail'
import { MainTabNavigator } from './main-tab-navigator'

export default createAppContainer(createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    TopicDetail: TopicDetailStack
}))
