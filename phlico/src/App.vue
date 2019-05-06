<template>
  <div id="app" :class="appClass">
    <keep-alive>
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
    </keep-alive>
  </div>
</template>

<script>
import card from './components/card.vue'
import comments from './components/comments.vue'
// helper
import webliteHandler from './helper/function/weblite.api'
import {
  addComment,
  getSinglePhotoData,
  addLike,
} from './helper/function/requestHandler'
const { W, R } = window

export default {
  name: 'App',

  data() {
    return {
      wisId: (W && W.wisId) || '1',
      imageName: '',
      userId: '',
      username: '',
      creatorId: '',
      state: 'card',
      photoComments: [],
      caption: {},
      likeState: false,
      mode: (W && W.mode) || 'inline',
    }
  },

  components: {
    card,
    comments,
  },

  created() {
    W && webliteHandler(this)
    if (!W) this.init()
  },

  computed: {
    appClass() {
      return this.mode === 'inline' ? 'appInline' : 'appFullscreen'
    },
  },

  methods: {
    changeState(event) {
      if (event === 'comments') this.init()
      this.state = event
      W.analytics('CHANGE_PAGE', { to: this.state })
    },

    init() {
      getSinglePhotoData(this.imageName) 
        .then(({ caption, comments, creator, userId, likes }) => {
          this.photoComments = comments
          this.caption = {
            creator, 
            likes: R.length(R.uniq(likes)),
            text: caption,
          }
          this.creatorId = userId,
          this.likeState = R.findIndex(R.equals(this.userId), likes) !== -1
        })
        .catch(err => err)
    },

    sendComment(info) {
      const { ...other } = info
      const { author } = other
      return comment => {
        addComment(other, comment)
          .then(({ body: { comment } }) => {
            this.photoComments = R.append(comment, this.photoComments)
            W.sendNotificationToAll("Phlico", `new comment from ${author}`)
            W.analytics('ADD_COMMENT') // inke vase che posti hast track beshe ya na?
          })
          .catch(err => err)
      }
    },

    sendLike(info) {
      const { username, ...other } = info
      this.likeState = true
      addLike(other).then(() => {
        W.sendNotificationToUsers("Phlico", `${username} has liked your photo ❤️`, "", [this.creatorId])
        W.analytics('LIKE_POST') // inke vase che posti hast track beshe ya na?
      }).catch(console.log)
    },
  },
}
</script>

<style>
.appInline {
  width: 320;
  height: 320;
}

.appFullscreen {
  width: 100%;
  height: 100%;
}
</style>
