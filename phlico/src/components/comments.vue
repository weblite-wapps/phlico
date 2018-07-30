<template>
  <div class="comments">
    <img
      src="../assets/logo/close.png"
      alt="close logo"
      class="top-left"
      @click="changeState">

    <get-comment
      :caption="caption"
      @state="changeState"
      :send="send"/>

    <spliter>Commments</spliter>

    <comment
        v-for="(comment, index) in comments"
        :key="index"
        :comment="comment"></comment>
  </div>
</template>

<script>
  import comment from './comment'
  import spliter from './spliter'
  import getComment from './getComment'

  export default {
    name: "comments",

    props: {
      comments:Array,
      caption: Object,
      send: Function,
    },

    components: {
      comment,
      spliter,
      'get-comment': getComment,
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
  .comments {
    height: 400px;
    width: 400px;
    overflow: auto;
    background-color: #22252c;

    /* background-color: rgba(45, 71, 42, 0.19); */
  }

  .comments::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 1px;
    width: 5px;
    background-color: #F5F5F5;
  }

  .comments::-webkit-scrollbar
  {
    width: 4px;
    background-color: #fefefe;
  }

  .comments::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #252a3e;
  }

</style>
