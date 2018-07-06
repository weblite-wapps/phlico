<template>
  <div>
    <div v-for="(comment, key) in userComments" >
      <single-comment :comment="comment" :theme="selectTheme(key)"/>
    </div>

  </div>
</template>

<script>
  import Comment from './Comment.vue'
  export default {
    name: "comments",
    data: function() {
      return {
        themes:['dark', 'blue', 'light', 'red']
      }
    },
    props: {
      userComments: {
        type: Object,
        required: true,
      },
    },
    components: {
      'single-comment': Comment,
    },
    methods: {
      selectTheme: function(key) {
        return this.themes[(key+Math.floor(Math.random()*100))%this.themes.length]+'-theme'
      }
    }
  }
</script>

<style scoped>.
.container {
  display: flex;

}
.user-profile {
  background-color: deepskyblue;
  border-radius: 50px;
  font-size: 8px;

}
  .comment-text {
    margin-top: 0;
    background-color: deepskyblue;
    border-radius: 50px;
    font-size: 10px;
    padding: 5px;
  }
</style>
