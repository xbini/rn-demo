import { PALETTE } from '../theme/theme'

/**
 * generate navigations options
 * @param title
 * @param headerTintColor
 * @param headerTitleStyle
 * @param headerStyle
 * @returns {{headerTitleStyle: {fontWeight: string}, headerTintColor: string, title: string, headerStyle: {backgroundColor: string}}}
 */
export const generateNavigationOptions = (
    title = '',
    headerTintColor = '#fff',
    headerTitleStyle = { fontWeight: 'bold' },
    headerStyle = { backgroundColor: PALETTE.primaryColor }
) => {
    return {
        title,
        headerTintColor,
        headerTitleStyle,
        headerStyle
    }
}
