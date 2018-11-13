<template>
  <div id="get-comment">
    <div id="caption">
      <div class="caption-text">
        <p>{{ caption.text }}</p>
      </div>

      <div class="bot">
        <span id="like">{{ likes }} ❤</span>
        <span class="username">{{ caption.userName }}</span>
      </div>
    </div>


    <div class="row">
      <textarea
        class="comment-text"
        id="scrollbar"
        placeholder=" Add comment..."
        @keyup.ctrl.enter="submit"
        v-model="opinion"
      />
    </div>
    <div class="row">
      <button @click="submit">Post</button>
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
      console.log(this.caption)
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
    background-color: rgb(42, 44, 50);
    border-radius: 5px;
    width: 90%;
    margin: 30px 0;
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
    justify-content: center;
    word-wrap: break-word;
    color: #D6D6D6;
    text-align: center;
    overflow-x: hidden;
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
  .row .comment-text {
   background-color: rgba(49, 58, 67, 0.84);
   border: none;
   border-radius: 4px;
   box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
   color: #cbc7e5;
   font-size: 12px;
   padding: 5px 10px;
   outline: none;
   width: 340px;
  }


  .row  button {
    background-color: #c0b3a0;
    color: #22252c;
    border:  none;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
    cursor: pointer;
    display: block;
    margin: 5px auto;
    outline: none;
    padding: 6px 15px;
  }
  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px
  }
  
  .row button:hover {
    background-color: #E14F60;
  }

  .comment-text {
    min-height: 60px;
    overflow: auto;
  }
  #scrollbar::-webkit-scrollbar-track
  {
    border-radius: 1px;
    width: 5px;
    background-color: #2c3e50;
  }
  #scrollbar::-webkit-scrollbar
  {
    width: 4px;
    background-color: #2c3e50;
  }

  #scrollbar::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #CACACA;
  }

</style>
