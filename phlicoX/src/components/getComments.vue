<template>
  <div id="comment">  
    <div class="row">
      <textarea
        class="comment-text"
        id="scrollbar"
        placeholder="Add comment..."
        v-model="opinion"></textarea>
    </div>

    <div class="row">
      <button @click="submit">Submit</button>
      <button @click="changeState('card')">return</button>
      <button v-if="deleteShow" @click="changeState('delete')" id="del">Delete</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'getComments',
    data() {
      return {
        opinion: '',
      }
    },
    methods: {
      changeState: function(e) {
        this.$emit('state', e)
      },
      submit: function() {
        const t = Date().split(' ').splice(1, 4)
        const date = `${t[0]} ${t[1]}, ${t[2]} ${t[3]}`
        if (this.opinion === '') alert('Comment is empty')
        else {
          const opinion = this.opinion
          this.send({opinion, date})
        }
        this.$emit('state')
      }
    },

    props: {
      send: Function,
      deleteShow: Boolean,
    }
  }
</script>

<style scoped>
  #comment {
    width: 300px;
    margin: 0 auto 2px auto;
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
    outline: none;
    width: 300px;
  }
  .row  button {
    background-color: #555f77;
    border:  none;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
    color: #fff;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    outline: none;
    font-size: 10px;
    padding: 6px 15px;
  }
  .row .comment-text:focus,
  .row button:hover{
    box-shadow: 0 2px 6px rgb(83, 94, 105);
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
  #del {
    background-color: #E82D2D;
  }

</style>
