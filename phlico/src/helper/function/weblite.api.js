// W && R
const { W } = window

export default vueRoot => {
  /* Load Data */
  // get user
  W.loadData().then(({ user: { name, id }, customize: { imageName } }) => {
    vueRoot.userId = id
    vueRoot.username = name
    vueRoot.imageName = imageName

    vueRoot.init()
    W.start()
  })
}
