<template>
  <div id="get-comment">
    <div id="caption">
      <div class="caption-text">
        <p>{{caption.text}}</p>
      </div>

      <div class="bot">
        <span>{{likes}} <span id="like">❤</span></span>
        <span class="username">{{caption.username}}</span>
      </div>
    </div>


    <div class="frow">
      <textarea
        class="comment-text"
        id="scrollbar"
        placeholder=" Add comment..."
        v-model="opinion"></textarea>
    </div>
    <div class="frow">
      <button @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'getComments',
  data(){
    return {
      opinion: '',
    }
  },

  props: {
    caption: Object,
    send: Function,
  },

  methods: {
    submit() {
      const time = Date().split(' ').splice(1, 4)
      const date = `${time[0]} ${time[1]}, ${time[2]} ${time[3]}`
      if (this.opinion === '') alert('Comment is empty')
      else {
        const opinion = this.opinion
        this.send({opinion, date})
      }
      this.opinion = ''  
    }
  },

  computed: {
    likes() {
      return this.caption.likes || ''
    },
  }

}
</script>

<style scoped>
  #caption {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin: 15px 0;
  }
  .bot {
    display: flex;
    width: auto;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
  .username {
    color: #cfccd0;
    background-color: #2c3e50;
    padding: 0 8px;
    margin-left: 20px;
    border-radius: 20px;
    font-size: 11px;
  }
  #like {
    color: #FC3939;
  }
  .caption-text {
    /*display: inline-block;*/
    display: flex;
    word-wrap: break-word;
    color: #333333;
    text-align: center;
  }

  #get-comment {
    width: 100%;
    height: auto;
    /*background-color: rgba(45, 71, 42, 0.19);*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .frow .comment-text {
   background-color: rgba(49, 58, 67, 0.84);
   border: none;
   border-radius: 4px;
   box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
   color: #cbc7e5;
   font-size: 14px;
   padding: 5px 10px;
   outline: none;
   width: 340px;
  }
  .frow  input[type=submit],
  .frow  button {
    background-color: #555f77;
    border:  none;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
    color: #fff;
    cursor: pointer;
    display: block;
    margin: 5px auto;
    outline: none;
    padding: 6px 15px;
  }
  .frow .comment-text:focus,
  .frow input[type=submit]:hover,
  .frow button:hover{
    box-shadow: 0 2px 6px rgb(83, 94, 105);
  }
  .frow {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px
  }
  .comment-text {
    min-height: 60px;
    overflow: auto;
  }
  #scrollbar::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 1px;
    width: 5px;
    background-color: #F5F5F5;
  }

  #scrollbar::-webkit-scrollbar
  {
    width: 4px;
    background-color: #fefefe;
  }

  #scrollbar::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #252a3e;
  }

</style>
