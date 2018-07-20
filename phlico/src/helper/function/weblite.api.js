// W && R
const { W, R } = window


export default (vueRoot) => {
  /* Load Data */
  // get user
  W.loadData().then(({ user: { name }, creator, customize: { headerColor, titleText } }) => {
    vueRoot.authorName = name
    vueRoot.noteCreator = creator
    if (headerColor) vueRoot.color = headerColor
    if (titleText) vueRoot.noteTitle = titleText
  })


  // customization
  W.onChangeValue(({ key, value }) => {
    if (key === 'headerColor') vueRoot.color = value
    else if (key === 'titleText') vueRoot.noteTitle = value
  })

  W.changeCustomize(R.identity)


  // start
  W.start()
}
