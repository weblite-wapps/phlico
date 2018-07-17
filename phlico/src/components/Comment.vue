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
    box-shadow: 0px 2px 20px #666;
    max-width: 650px;
    display: flex;
    align-items: center;
    justify-content: baseline;
    margin-top: 5px;
    transition: all 0.3s ease-in;
    transform: translateY(2px);
  }
  .comment-container:hover {
    background-color: rgba(0, 0, 0, .1);
    transform: translateY(5px);
  }
  .user-profile{
    display:  flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    min-width: 40px;
    height: 40px;
    border-radius: 50px;
    font-family: "Segoe UI Light";
    font-size: 10px;
  }
  .user-comment {
    flex-wrap: wrap;
    margin-left: 12px;
  }
  /* Theme */
  .red-theme {
    background-color: #E53C3C;
    color: #050000;
  }
  .blue-theme {
    background-color: #2E67E9;
    color: #FFA200;
  }
  .dark-theme {
    background-color: #0B0E13;
    color: white;
  }
  .light-theme {
    background-color: #7F7979;
    color: #FFFFFF;
  }

</style>
