import { NavigationActions } from 'react-navigation'

export let _navigator = null

export function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef
}

export function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}
