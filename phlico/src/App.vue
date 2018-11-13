<template>
  <div id="app" :class="appClass">
    <card
      v-if="state === 'card'"
      :imageName="imageName"
      :likeState="likeState"
      :mode="mode"
      @like="sendLike({ username, userId, imageName })"
      @state="changeState"
    />

    <comments
      v-else-if="state === 'comments'"
      :comments="photoComments"
      :caption="caption"
      :send="sendComment({ 'author': username, userId, imageName })"
      :mode="mode"
      @state="changeState"
    />
  </div>
</template>

<script>
import card from "./components/card.vue"
import comments from "./components/comments.vue"
// helper
import webliteHandler from "./helper/function/weblite.api"
import {
  addComment,
  getSinglePhotoData,
  addLike,
} from "./helper/function/requestHandler"
const { W, R } = window

export default {
  name: "App",

  data() {
    return {
      wisId: (W && W.wisId) || "1",
      imageName: "",
      userId: "",
      username: "",
      state: "card",
      photoComments: [],
      caption: {},
      likeState: false,
      mode: "fullscreen",
    }
  },

  components: {
    card,
    comments,
  },

  created() {
    W && webliteHandler(this)
    if(!W) this.init()
  },

  computed: {
    appClass() { return this.mode === 'inline' ? 'appInline': 'appFullscreen' },
  },

  methods: {
    changeState(event) {
      if (event === "comments") this.init()
      this.state = event
    },

    init() {
      getSinglePhotoData(this.imageName)
        .then(body => {
          this.photoComments = body.comments
          this.caption = {
            userName: body.userName,
            likes: R.length(R.uniq(body.likes)),
            text: body.caption,
          }
          this.likeState = R.findIndex(R.equals(this.userId), body.likes) !== -1
        })
        .catch(err => err)
    },

    sendComment(info) {
      const { userId, ...other } = info
      const { author } = other
      return comment => {
        addComment(other, comment)
          .then(({ body: { comment } }) => {
            this.photoComments = R.append(comment, this.photoComments)
            W.sendNotificationToUsers("Phlico", `new comment from ${author}`, "", [userId])
          })
          .catch(err => err)
      }
    },

    sendLike(info) {
      const { username, ...other } = info
      const { userId } = other
      this.likeState = true
      addLike(other)
      W.sendNotificationToUsers("Phlico", `${username} Has liked your image ❤️`, "", [userId])
    },
  },
}
</script>

<style>
.appInline {
  width: 400px;
  height: 400px;
}

.appFullscreen {
  width: 100%;
  height: 100%;
}

