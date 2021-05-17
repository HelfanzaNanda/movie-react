module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
		borderRadius: ['hover', 'focus', 'active'],
		borderWidth: ['hover', 'focus', 'active'],
		width: ['hover', 'focus', 'active'],
		transitionProperty: ['hover', 'focus'],
		flex: ['hover', 'focus', 'group-focus'],
		justifyContent: ['hover', 'focus'],
		backgroundOpacity: ['hover', 'focus'],
	},
  },
  plugins: [],
}
