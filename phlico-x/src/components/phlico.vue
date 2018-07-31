<template>
  <div>
    <card
      :imageName="imageName"
      v-if="state === 'card'"
      :likeState="likeState"
      :canDelete="userInfo.userName === creator"
      @del="del({ userId: userInfo.userId, imageName })"
      @like="sendLike({ userId: userInfo.userId, imageName })"
      @state="changeState"
    />

    <comments
      v-else-if="state === 'comments'"
      :caption="caption"
      :creator="creator"
      :likes="likes"
      @state="changeState"
      :comments="photoComments"
      :send="sendComment({ userid: userInfo.userId, author: userInfo.userName, imageName })"
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
      del: Function,
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
        return comment => addComment(info, comment)
          .then(res => { this.photoComments = R.append(res.body.comment, this.photoComments)})
      },

      sendLike(info) { addLike(info) },
    },

    components: {
      card,
      comments,
    },
  }
</script>
