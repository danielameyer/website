import { onTablet } from './media-queries'

const colors = {
  orange: 'rgb(255, 102, 0)',
  lightGreen: 'rgb(245, 255, 247)',
  blue: 'rgb(20, 127, 215)',
  purple: '#5f2787',
  lightBlue: 'rgb(196, 223, 245)',
  darkBlue: 'rgb(13, 81, 139)',
  red: 'rgb(245, 91, 91)',
  lightRed: 'rgb(255, 141, 141)',
  darkRed: 'rgb(237, 60, 57)',
  green: 'rgb(83, 180, 119)',
  darkGreen: 'rgb(24, 154, 52)',
  darkGray: 'rgb(54, 67, 80)',
  gray: 'rgb(153, 155, 158)',
  veryLightGray: 'rgb(240, 242, 240)',
  lightGray: 'rgb(225, 228, 224)',
  white: 'rgb(255,255,255)'
}

const defaultFont = 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif'

const text = {
  link: {
    fontWeight: 600,
    color: colors.orange,
    textDecoration: 'none',
    borderBottom: `1px solid ${colors.purple}`,
    cursor: 'pointer',
    ':hover': {
      borderBottom: 0,
      color: colors.orange
    },
    'a:visited': {
      fontWeight: 400,
      color: colors.darkGray,
      textDecoration: 'none'
    },
    fontFamily: defaultFont
  },
  body: {
    fontWeight: 300,
    color: colors.darkGray,
    fontSize: 18,
    fontFamily: defaultFont,
    lineHeight: '1.5em',
    [onTablet]: {
      fontSize: 14
    }
  },
  button: {
    backgroundColor: colors.orange,
    color: 'white',
    padding: '0.2em 1em',
    display: 'inline-block',
    fontWeight: 600,
    fontSize: 30,
    cursor: 'pointer',
    borderRadius: 8,
    ':hover': {
      backgroundImage: 'linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1))'
    }
  },
  header: {
    fontWeight: 600,
    display: 'block',
    paddingBottom: 10,
    fontSize: 30,
    [onTablet]: {
      fontSize: 25
    },
    fontFamily: defaultFont,
    color: colors.darkGray
  },
  shareIcon: {
    border: 'none',
    fontSize: '3em',
    color: colors.darkGray,
    ':hover': {
      color: colors.orange
    },
    paddingRight: 20,
    paddingLeft: 20
  }
}


const singleColumnLayout = {
  maxWidth: 1024,
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const layouts = {
  singleColumn: singleColumnLayout,
  multiColumn: {
    container: {
      ...singleColumnLayout,
      display: 'flex',
      flexDirection: 'row',
      [onTablet]: {
        flexDirection: 'column'
      }
    },
    flexColumn: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column'
    }
  }
}

const theme = {
  colors,
  text,
  layouts
}

export default theme
