<template>
  <div class="comments">
    <!-- Caption -->
    <div class="caption">
      <span class="bigger">{{creator}}</span>
      <div>
        <p dir="auto">{{caption}}</p>
        <span class="bigger" id="like">{{likes}} ❤</span>
      </div>
    </div>

    <!-- Get Comment -->
    <Add-comment :send="send" @state="changeState"/>

    <!-- Comments -->
    <Comment v-for="(item, index) in this.comments" :key="index" :comment="item"/>
    <Loading v-if="!hasComment"/>
  </div>
</template>

<script>
import Comment from './comment'
import AddComment from './addComment'
import Loading from '../helper/components/loading'

export default {
  name: 'Comments',

  props: {
    comments: Array,
    caption: String,
    likes: Number,
    creator: String,
    send: Function,
  },

  components: {
    Comment,
    Loading,
    AddComment,
  },

  methods: {
    changeState(event) {
      this.$emit('state', event)
    },
  },

  computed: {
    hasComment() {
      return this.comments.length !== 0
    },
  },
}
</script>

<style scoped>
.caption {
  text-align: center;
  width: 300px;
  margin: 0 auto 15px auto;
  color: #d6d6d6;
  font-size: 11px;
  font-family: sans-serif;
  background-color: rgba(91, 83, 84, 0.14);
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  flex-wrap: wrap;
  overflow-x: hidden;
}
.bigger {
  font-size: 12px;
}
#like {
  color: #fc3939;
}
.comments {
  width: 100%;
  height: 348px;
  margin: 10px auto;
  overflow: auto;
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.6);
}
.comments::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 1px;
  width: 5px;
  background-color: #2c3e50;
}
.comments::-webkit-scrollbar {
  width: 4px;
  background-color: #2c3e50;
}
.comments::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #cacaca;
}
</style>
