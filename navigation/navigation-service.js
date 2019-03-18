import { NavigationActions } from 'react-navigation'

let _navigator = null

export function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef
}

export function navigate(routeName, params) {
    console.log(routeName, params)
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}
