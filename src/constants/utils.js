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

/**
 * generate topic detail html string
 * @param topic
 * @returns {string}
 */
export const generateTopicDetailHtml = (topic) => {
    return `
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="//static2.cnodejs.org/public/stylesheets/index.min.23a5b1ca.min.css" media="all">
  <title>${topic.title}</title>
</head>
<body>
<div class="inner topic"><div class="topic_content">${topic.content}</div></div>
</body>
</html>
`
}
