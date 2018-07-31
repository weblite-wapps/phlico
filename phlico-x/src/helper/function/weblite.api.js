// W && R
const { W } = window


export default (vueRoot) => {
  /* Load Data */
  // get user
  W.loadData().then(({ user: { name, id }}) => {
    vueRoot.username = name
    vueRoot.userId = id
    vueRoot.init()
  })

  // start
  W.start()
}
