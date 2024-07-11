const theme = {
    dark: {
        fonts: {
            default: '#F1F1F1'
        }
    },
    default: {
        colors: {
            primary: '#43E888',
            secundary: '#37BE6F',
            azureRadiance: '#337FF1',
            mandy: '#EF4040',
            vividCerise: '#EF4086',
            vividOrange: '#FF9900',
            darkOrange: '#B16C06',
            paleYellow: '#EFE688',
            oliveDrab: '#817A30',
            paleSkyBlue: '#CEDEF7',
            darkCerulean: '#37547F',

            white: '#FFF',
            nearWhite: '#F1F1F1',
            lightGray: '#ECECEC',
            veryLightGray: '#E6E6E6',
            black: '#2B2B2B',
            darkGray: '#404040',
            darkGrayishBrown: '#393335',
            gray: '#7D7D7D',
            mediumGray: '#8C8C8C',

            transparent: 'transparent',
        },
        fonts: {
            default: '#2B2B2B'
        }
    }
}

export type ColorType = keyof typeof theme.default.colors

export default theme