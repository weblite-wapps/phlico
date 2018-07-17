<template>
  <div id="r">
    <photo-stylized
      v-if="show === 'phlico'"
      :picture="phlico.picture"/>
    <comments
      v-if="show === 'comments'"
      :user-comments="phlico.comments"/>
  </div>
</template>

<script>
import Photo from './Photo.vue'
import Comments from './Comments.vue'

export default {
  name: "phlico",
  data: function() {
    return {
      show: 'comments',
      phlico: {
        information: {
          /*User info*/
          useer_name: "AmirHosein Ebrahimi",
          user_id: 1231564657,
          /*Theme*/
          theme_mode: 'dark',
          /*Wapp info*/
          wis: 213456489714516,
        },
        picture: {
          /*Image info*/
          image_name: "Kicking 2018 logo design",
          url: "https://scontent-vie1-1.cdninstagram.com/vp/79073e104d73f7b3ba169a294f062f0f/5BDCA960/t51.2885-15/e35/33794025_2034314766882139_6965428212323057664_n.jpg?efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV9pZyJ9%20640w,https://scontent-vie1-1.cdninstagram.com/vp/79073e104d73f7b3ba169a294f062f0f/5BDCA960/t51.2885-15/e35/33794025_2034314766882139_6965428212323057664_n.jpg?efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV9pZyJ9%20750w,https://scontent-vie1-1.cdninstagram.com/vp/79073e104d73f7b3ba169a294f062f0f/5BDCA960/t51.2885-15/e35/33794025_2034314766882139_6965428212323057664_n.jpg?efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV9pZyJ9%201080w",
          caption: "this is new logo design for 2018 i made this in illustrator"
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
        },
      },
    }
  },
  mounted: function() {
    this.$on('SHOW_COMMENTS', (caption) => {
      alert(caption)
      this.show = 'comments'
    })
  },
  methods: {},
  components: {
    'photo-stylized': Photo,
    'comments': Comments,
  }
}
</script>

<style scoped>
#r {
  background-color: darkkhaki;
  width: 650px;
  height: 650px;
  width: 100%;
  height: 100%;
}
</style>
