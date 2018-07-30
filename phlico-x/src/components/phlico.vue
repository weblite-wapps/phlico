<template>
  <div>
    <card
      :imageName="imageName"
      v-if="state === 'card'"
      :likeState="likeState"
      :canDelete="userInfo.username === caption.username"
      @del="del({'userid': userInfo.userid, imageName})"
      @like="sendLike({'userid': userInfo.userid, imageName})"
      @state="changeState"/>


    <comments
      v-else-if="state === 'comments'"
      @state="changeState"
      :comments="photoComments"
      :caption="caption"
      :send="sendComment({'userid': userInfo.userid, 'author': userInfo.username, imageName})"/>

  </div>
</template>

<script>
  import card from './card'
  import comments from './comments'
  import { addComment, sendLike } from '../helper/function/requestHandler'
  const { R } = window

  export default {
    name: "phlico",

    data() {
      return {
        state: 'card',
        photoComments: [],
      }
    },

    mounted() {this.photoComments = this.comments},

    methods: {
      changeState(event) {
        this.state = event
      },

      sendComment(info) {
        return comment => {
          addComment(info, comment)
          .then(({body: {comment}}) => { this.photoComments = R.append(comment, this.photoComments)})
            .catch((err) => err)
        }
      },

      sendLike(info) {
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
      del: Function,
    }
  }
</script>
