<template>
  <div class="comment">
    <div class="comment-box">
      <!-- :class="{'like': (like)}" -->
      <!--<div class="comment-like"><span v-if="!like">⚪</span><span v-else>🔴</span></div>-->
      <div class="comment-text">
        {{comment.text}}
      </div>
      <div class="comment-footer">
        <div class="comment-info">
          <span class="comment-autor"><a href="">{{ comment.author }}</a></span>
            <span class="comment-date">2fev</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment',
  data() {
    return {
      like: true,
    }
  },

  methods: {
    comment_time: function() {
      const t = Date().split(' ').splice(1, 4)
      return `${t[0]} ${t[1]}, ${t[2]} ${t[3]}`
    }
  },

  created() {
    //  all data from database should be catch and re store
  },

  props: {
    comment: Object,
  }
}
</script>

<style scoped>
  .comment-box {
    background-color: rgb(76, 84, 91);
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
    /*min-height: 60px;*/
    padding: 15px;
  }
  .comment-text {
    color: #e8dfe8;
    font-size: 15px;
    margin-bottom: 15px;
  }
  .comment-footer {
    color: #95aeac;
    font-size: 13px;
  }
  .comment-footer  a {
    text-decoration: none;
    cursor: default;
    color: rgb(255, 176, 87);
  }
  .comment-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .comment-date {
    margin: 0 10px;
    color: rgb(129, 158, 240);

  }
  .comment {
    margin: 5px 10px;
  }
</style>
