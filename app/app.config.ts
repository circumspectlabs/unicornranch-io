export default defineAppConfig({
  ui: {
    colors: {
      primary: 'orange',
      secondary: 'blue',
      neutral: 'slate'
    }
  },
  uiPro: {
    footer: {
      slots: {
        top: 'lg:py-2 py-4'
      }
    }
  },
  ogImage: {
    fonts: [
      'Lexend:100',
      'Lexend:200',
      'Lexend:300',
      'Lexend:400',
      'Lexend:500',
      'Lexend:600',
      'Lexend:700',
      'Lexend:800',
      'Lexend:900'
    ]
  }
})
