<template>
  <div>
    <Card
      v-if="state === 'card'"
      :imageName="imageName"
      :likeState="likeState"
      :canDelete="userInfo.username === creator"
      :sendToChat="sendToChat"
      @like="sendLike({ username: userInfo.username, userId: userInfo.userId, creatorId, imageName })"
      @del="del({ userId: userInfo.userId, imageName })"
      @state="changeState"
      :isLoaded="isLoaded"
    />

    <Comments
      v-else-if="state === 'comments'"
      :caption="caption"
      :creator="creator"
      :likes="likes"
      :comments="photoComments"
      :send="sendComment({ userId: userInfo.userId, author: userInfo.username, imageName })"
      @state="changeState"
    />
  </div>
</template>

<script>
import Card from './card'
import Comments from './comments'
import { addComment, addLike } from '../helper/function/requestHandler'
const { W, R } = window

export default {
  name: 'phlico',

  props: {
    imageName: String,
    comments: Array,
    caption: String,
    likes: Number,
    creator: String,
    creatorId: String,
    userInfo: Object,
    likeState: Boolean,
    updateLike: Function,
    del: Function,
    sendToChat: Function,
    isLoaded: Boolean,
  },

  data() {
    return {
      state: 'card',
      photoComments: [],
    }
  },

  mounted() {
    this.photoComments = this.comments
  },

  methods: {
    changeState(event) {
      this.state = event
      W.analytics("CHANGE_PAGE", { to: this.state })
    },

    sendComment(info) {
      const { userId, ...other } = info
      const { author } = other
      return comment =>
        addComment(other, comment).then((res) => { 
          this.photoComments = R.append(res.body.comment, this.photoComments) 
          W.sendNotificationToAll("Phlico", `new comment from ${author}`)
          W.analytics("ADD_COMMENT") // inke vase che posti hast track beshe ya na?
        })
    },

    sendLike(info) { 
      const { username, ...other } = info
      addLike(other).then(() => {
        this.updateLike()
        W.sendNotificationToUsers("Phlico", `${username} has liked your photo ❤️`, "", [this.creatorId])
        W.analytics("LIKE_POST") // inke vase che posti hast track beshe ya na?
      }) 
    },
  },

  components: {
    Card,
    Comments,
  },
}
</script>
