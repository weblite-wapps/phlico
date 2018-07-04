<template>
  <div id="r">
    <photo-stylized :picture="phlico.picture"/>
  </div>
</template>

<script>
import Photo from './Photo.vue'
import PhotoStylized from "./Photo";


export default {
  name: "phlico",
  data: function() {
    return {
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
        },
        comments: {
          /*user_id = {comment: '', liked: boolean} */
          8894180130: {
            comment: "i like it",
            liked: true,
          },
          8745787602: {
            comment: "exelent work",
            liked: true,
          },
          9983107031: {
            comment: "exelent work",
            liked: true,
          },
          6235753942: {
            comment: "exelent work",
            liked: false,
          },
          8858433968: {
            comment: "no more thing to say hooo",
            liked: false,
          },
          9076760622: {
            comment: "no more thing to say hooo",
            liked: false,
          },
          5032806901: {
            comment: "i like it",
            liked: false,
          },
          2178225339: {
            comment: "i like it",
            liked: true,
          },
          5465803619: {
            comment: "i like it",
            liked: true,
          },
          7324732715: {
            comment: "no more thing to say hooo",
            liked: false,
          },
        },
      },
      show: {
        picture: true,
        comments: false,
      }
    };
  },
  methods: {},
  components: {
    'photo-stylized': Photo,
  }
}
</script>

<style scoped>
#r {
  background-color: khaki;
}
</style>
