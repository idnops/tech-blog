export default {
  methods: {
    getInitials (str) {
      const splittedText = str.split(' ')
      if (splittedText.length > 1) {
        return splittedText[0].slice(0, 1) + splittedText[1].slice(0, 1)
      } else {
        return str.slice(0, 2)
      }
    }
  }
}
