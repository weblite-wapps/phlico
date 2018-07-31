<template>
  <div>
    <card
      :imageName="imageName"
      v-if="state === 'card'"
      :likeState="likeState"
      :canDelete="userInfo.userName === caption.userName"
      @del="del({'userId': userInfo.userId, imageName})"
      @like="sendLike({'userId': userInfo.userId, imageName})"
      @state="changeState"/>


    <comments
      v-else-if="state === 'comments'"
      @state="changeState"
      :comments="photoComments"
      :caption="caption"
      :send="sendComment({'userid': userInfo.userId, 'author': userInfo.userName, imageName})"/>

  </div>
</template>

<script>
  import card from './card'
  import comments from './comments'
  import { addComment, addLike } from '../helper/function/requestHandler'
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
        addLike(info)
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
