<template>
  <div class="comment-container">
    <div class="user-profile" :class="theme">
      <h2 v-if="!hasPhoto"
        class="user-short-name">{{ userShortName(comment.user_name) }}</h2>
      <img
        v-else
        src="../assets/logo.png" alt="#">
    </div>
    <div class="user-comment">
      <p>{{comment.comment_text}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "comment",
    data: function() {
      return {
        userName: "",
        hasPhoto: false,
      }
    },

    methods:{
      userShortName: function(userName) {
        let splittedname = userName.split(' ')
        if (splittedname.length > 1) {
          return (splittedname[0].charAt(0) + '.' + splittedname[splittedname.length - 1].charAt(0)).toUpperCase();
        } else {
          return userName.toUpperCase().substring(0, 2)
        }
      }
    },
    props: {
      comment: {
        type: Object,
        required: true,
        vlidator: function(value) {
          return value != ''
        }
      },
      theme: {
        type: String,
        default: 'dark_theme',
        required: false,
      }
    },
  }
</script>

<style scoped>
  .comment-container {
    display: flex;
    justify-content: baseline;
  }
  .user-profile{
    display:  flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    height: 40px;
    border-radius: 50px;
    font-family: "Segoe UI Light";
    font-size: 10px;
  }
  .user-comment {
    flex-wrap: wrap;
    margin-left: 10px;
  }
  /* Theme */
  .red-theme {
    background-color: red;
    color: #00F7FF;
  }
  .blue-theme {
    background-color: #3E92E0;
    color: #D20246;
  }
  .dark-theme {
    background-color: black;
    color: white;
  }
  .light-theme {
    background-color: #ccc;
    color: black;
  }

</style>
