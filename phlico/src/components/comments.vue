<template>
  <div :class="commentsClass"> 
    <img
      src="../assets/logo/close.png"
      alt="close logo"
      class="top-left"
      @click="changeState"
    />

    <get-comment
      :caption="caption"
      @state="changeState"
      :send="send"
    />

    <spliter>Commments</spliter>

    <comment
      v-for="(comment, index) in comments"
      :key="index"
      :comment="comment"
    />
  </div>
</template>

<script>
  import comment from './Comment'
  import spliter from './spliter'
  import getComment from './getComment'

  export default {
    name: "comments",

    props: {
      comments:Array,
      caption: Object,
      send: Function,
      mode: String,
    },

    components: {
      comment,
      spliter,
      'get-comment': getComment,
    },

    computed: {
      commentsClass() { return this.mode === 'inline' ? 'commentsInline': 'commentsFullscreen' },
    },

    methods: {
      changeState() {
        this.$emit('state', 'card')
      }
    },
  }
</script>

<style scoped>
  .top-left {
    width: 20px;
    position: absolute;
    transition: opacity .3s ease;
    opacity: .6;
    margin: 5px 0 0 5px;
  }
  .top-left:hover {
    opacity: 1;
  }
  .commentsInline {
    height: 400px;
    width: 400px;
    overflow: auto;
    background-color: #22252c;

    /* background-color: rgba(45, 71, 42, 0.19); */
  }

  .commentsFullscreen {
    height: 100%;
    width: 100%;
    overflow: auto;
    background-color: #22252c;

    /* background-color: rgba(45, 71, 42, 0.19); */
  }

  .commentsInline .commentsFullscreen::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 1px;
    width: 5px;
    background-color: #F5F5F5;
  }

  .commentsInline .commentsFullscreen::-webkit-scrollbar
  {
    width: 4px;
    background-color: #fefefe;
  }

  .commentsInline .commentsFullscreen::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #252a3e;
  }

</style>
