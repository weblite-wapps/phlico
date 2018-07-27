<template>
  <div>
    <card
      :imageName="imageName"
      v-if="state === 'card'"
      :likeState="likeState"
      @like="sendLike({'userid': userInfo.userid, 'imagename': imageName})"
      @state="changeState"/>

    <comments
      v-else-if="state === 'comments'"
      @state="changeState"
      :comments="comments"
      :caption="caption"
      :user="userInfo.username"
      :send="sendComment({like, 'userid': userInfo.userid, 'author': userInfo.username, 'imagename': imageName})"/>

  </div>
</template>

<script>
  import card from './card'
  import comments from './comments'
  import { addComment, sendLike } from '../helper/function/requestHandler'

  export default {
    name: "phlico",

    data() {
      return {
        state: 'card',
        like: false,
      }
    },

    methods: {
      changeState(event) {
        this.state = event
      },

      sendComment: function(info) {
        return comment => {
          addComment(info, comment)
        }
      },

      sendLike: function(info) {
        sendLike(info)
      }
    },

    components: {
      card,
      comments
    },

    props: {
      imageName: String,
      comments: Array,
      caption: Object,
      userInfo: Object,
      likeState: Boolean,
    }
  }
</script>
