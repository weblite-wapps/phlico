<template>
  <div>
    <card
      v-if="state === 'card'"
      :imageName="imageName"
      :likeState="likeState"
      :canDelete="userInfo.username === creator"
      :sendToChat="sendToChat"
      @like="sendLike({ username:userInfo.username, userId: userInfo.userId, imageName })"
      @del="del({ userId: userInfo.userId, imageName })"
      @state="changeState"
    />

    <comments
      v-else-if="state === 'comments'"
      :caption="caption"
      :creator="creator"
      :likes="likes"
      :comments="photoComments"
      :send="sendComment({ userid: userInfo.userId, author: userInfo.username, imageName })"
      @state="changeState"
    />
  </div>
</template>

<script>
  import card from './card'
  import comments from './comments'
  import { addComment, addLike } from '../helper/function/requestHandler'
  const { R } = window


  export default {
    name: "phlico",

    props: {
      imageName: String,
      comments: Array,
      caption: String,
      likes: Number,
      creator: String,
      userInfo: Object,
      likeState: Boolean,
      updateLike:Function,
      del: Function,
      sendToChat: Function,
    },

    data() {
      return {
        state: 'card',
        photoComments: [],
      }
    },

    mounted() { this.photoComments = this.comments },

    methods: {
      changeState(event) { this.state = event },

      sendComment(info) {
        const { author } = info
        return comment =>
          addComment(info, comment).then(res => {
            this.photoComments = R.append(res.body.comment, this.photoComments)
            W.sendNotificationToAll("Phlico", `new comment from ${username}`)
          })
      },

      sendLike(info) {
        const { username, ...other } = info
        this.updateLike()
        addLike(other).then()
        W.sendNotificationToAll("Phlico", `${username} Has liked your image ❤️`)
      },

    },

    components: {
      card,
      comments,
    },
  }
</script>
