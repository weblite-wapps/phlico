// W && R
const { W, R } = window


export default (vueRoot) => {
  /* Load Data */
  // // get user
  W.loadData().then(({ user: { name, id}}) => {
    vueRoot.username = name
    vueRoot.userid = id
  })

  // start
  W.start()
}
