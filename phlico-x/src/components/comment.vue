<template>
  <div class="comment">
    <div class="comment-box">
      <div dir="auto" class="comment-text">{{comment.opinion}}</div>
      <div class="comment-footer">
        <div class="comment-info">
          <span class="comment-autor">
            <a href>{{comment.author}}</a>
          </span>
          <span class="comment-date">{{comment.date}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',

  data() {
    return {
      like: true,
    }
  },

  props: {
    comment: Object,
  },
}
</script>

<style scoped>
.comment-box {
  background-color: rgb(76, 84, 91);
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  padding: 5px;
  overflow-x: hidden;
}
.comment-text {
  color: #e8dfe8;
  font-size: 12px;
  margin-bottom: 10px;
}
.comment-footer {
  font-size: 12px;
}
.comment-footer a {
  text-decoration: none;
  cursor: default;
  color: rgb(255, 176, 87);
}
.comment-info {
  display: flex;
  justify-content: space-between;
  /*align-items: center;*/
}
.comment-date {
  color: #95aeac;
  margin: 0 10px;
}
.comment {
  width: 300px;
  margin: 5px auto;
}
</style>
