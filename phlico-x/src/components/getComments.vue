<template>
  <div id="comment">  
    <div class="row">
      <textarea
        class="comment-text"
        id="scrollbar"
        placeholder="Add comment..."
        @keyup.ctrl.enter="submit"
        v-model="opinion"></textarea>
    </div>

    <div class="row">
      <button @click="submit">Post</button>
      <button @click="changeState">Back</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'getComments',
 
    props: {
      send: Function,
    },

    data() {
      return {
        opinion: '',
      }
    },

    methods: {
      changeState() {
        this.$emit('state', 'card')
      },
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
  }
</script>

<style scoped>
  #comment {
    width: 300px;
    margin: 0 auto 2px auto;
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
    outline: none;
    width: 300px;
  }
  .row  button {
    background-color: #c0b3a0;
    border:  none;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
    color: black;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    outline: none;
    font-size: 10px;
    padding: 6px 15px;
  }
  .row button:hover{
    background-color: #E14F60;
    box-shadow: 0 1px 2px rgb(51, 56, 67);
  }
  .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px
  }
  .comment-text {
    min-height: 60px;
  }
  #scrollbar::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
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
  #del {
    background-color: #E82D2D;
  }

</style>
