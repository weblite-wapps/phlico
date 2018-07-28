// W && R
const { W, R } = window


export default (vueRoot) => {
  /* Load Data */
  // get user
  W.loadData().then(({ user: { name }}) => {
    vueRoot.authorName = name
  })

  // start
  W.start()
}
