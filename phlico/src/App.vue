<template>
  <div id="app">
    <card
      imageName="1532501605334.jpg"
      v-if="state === 'card'"
      @state="changeState"/>

    <comments
      v-else-if="state === 'comments'"
      @state="changeState"
      :comments="comments"
      :caption="caption"/>

  </div>
</template>

<script>
import card from './components/card.vue'
import comments from './components/comments.vue'

export default {
  name: 'App',
  data() {
    return {
      state: 'card',
      comments: [
        {
          author: "amirhe",
          text: "length ;length alignSelf = flex-start",
          time: "2 Feb"
        },
        {
          author: "amirhe",
          text: "length ;length alignSelf = flex-start",
          time: "2 Feb"
        },
        {
          author: "amirhe",
          text: "length ;length alignSelf = flex-start",
          time: "2 Feb"
        }
      ],
      caption: {
        username: "Amirhe",
        likes: 156,
        text: "\n" +
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
        "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
        "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
        "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
        "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
        "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      }
    }
  },

  methods: {
    changeState(event) {
      this.state = event
    }
  },

  components: {
    card,
    comments
  },
}
</script>

<style>
  #app {
    /* sizing */
    width:  400px;
    height: 400px;
  }
</style>
