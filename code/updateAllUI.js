loadAllUIData: async function () {
  return Promise.all([
    this.loadUIData('recipes'),
    this.loadUIData('ingredients')
  ]).catch( e => {
    console.log(e)
  }).then((messages) => {
    messages.forEach(message => {console.log(message)});
  })
  }