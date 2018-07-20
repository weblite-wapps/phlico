<template>
  <div>
    <home/>  
  </div>
</template>

<script>
import home from './components/home.vue'
export default {
  name: 'App',
  data() {return {
  		mode: 'photos',
  		user_comment: {
  			like: false,
  			comment: '',
  		},

      comments: {
          /*user_id = {comment: '', liked: boolean} */
          8894180130: {
            user_name: "jack Tracy",
            comment_text: "i like it",
            liked: true,
          },
          8745787602: {
            user_name: "jhon",
            comment_text: "exelent work",
            liked: true,
          },
          9983107031: {
            user_name: "Zack Mondeloce",
            comment_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
              "\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
              "\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
            liked: true,
          },
          6235753942: {
            user_name: "Jessica",
            comment_text: "exelent work",
            liked: false,
          },
          8858433968: {
            user_name: "Taylor",
            comment_text: "no more thing to say hooo",
            liked: false,
          },
          9076760622: {
            user_name: "Clay",
            comment_text: "no more thing to say hooo",
            liked: false,
          },
          5032806901: {
            user_name: "Bryce",
            comment_text: "i like it",
            liked: false,
          },
          2178225339: {
            user_name: "Sky",
            comment_text: "i like it",
            liked: true,
          },
          5465803619: {
            user_name: "Tony",
            comment_text: "i like it",
            liked: true,
          },
          7324732715: {
            user_name: "HANNA",
            comment_text: "no more thing to say hooo",
            liked: false,
          },
        },}},
  components: {
    home
  },
}
</script>

<style>
  #app {
    /* sizing */
    width:  350px;
    height: 460px;
  }
</style>
