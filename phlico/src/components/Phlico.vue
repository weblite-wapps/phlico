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
