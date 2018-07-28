<template>
  <div id="app">
    <card
      v-if="state === 'card'"
      :imageName="imageName"
      :likeState="likeState"
      @like="sendLike({userid, 'imagename': imageName})"
      @state="changeState"/>

    <comments
      v-else-if="state === 'comments'"
      @state="changeState"
      :comments="photoComments"
      :caption="caption"
      :send="sendComment({'author': username, 'imagename': imageName})"/>

  </div>
</template>

<script>
  import card from './components/card.vue'
  import comments from './components/comments.vue'
  // helper
  import webliteHandler from './helper/function/weblite.api'
  import {addComment, getSinglePhotoData, addLike} from './helper/function/requestHandler'
  const { W, R } = window

  export default {
    name: 'App',
   
    data() {
      return {
        wisid: (W && W.wisid) || '1',
        imageName: '2ec835a09343261e43a74c43f830d224_1532790171500.gif',
        userid: '1',
        username: "amirhe",
        state: 'card',
        photoComments: [],
        caption: {},
        likeState: false,
      }
    },

    components: {
      card,
      comments,
    },

      
    created() { W && webliteHandler(this) },

    mounted() { this.init() },

    methods: {
      changeState(event) {
        if (event === 'comments') this.init()
        this.state = event
      },

      init() {
        getSinglePhotoData(this.imageName)
          .then((body) => {
            this.photoComments = body.comments
            this.caption = {
              username: body.username,
              likes: R.length(R.uniq((body.likes))),
              text: body.caption,
            }
            this.likeState = R.findIndex(R.equals(this.userid), body.likes) !== -1
          })
          .catch((err) => console.log("mode[A]-getAll[F]-APP[vue]", err))
      },

      sendComment(info) {
        return comment => {
          addComment(info, comment)
          .then(({body: {comment}}) => { 
            this.photoComments = R.append(comment, this.photoComments)})
            .catch((err) => console.log('In addComment', err))
        }
      },

      sendLike(info) {
        this.likeState = true
        addLike(info)
      }
    },
  }
</script>

<style>
  #app {
    width: 400px;
    height: 400px;
  }
</style>
