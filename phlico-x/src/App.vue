<template>
  <div id="app">
    <phlico
      v-for="(item, index) in phlicoz"
      :key="index"
      :imageName="item.imageName"
      :caption="item.caption"
      :creator="item.creator"
      :likes="item.likes"
      :comments="item.comments"
      :userInfo="{ userId, username }"
      :likeState="item.likeState"
      :del="deletePhoto"
    />

    <spliter v-if="this.phlicoz.length">upload</spliter>

    <uploader :send="addPhoto" />
  </div>
</template>

<script>
  import phlico from './components/phlico'
  import uploader from './components/uploader'
  import spliter from './helper/components/spliter'
  // helper
  import webliteHandler from './helper/function/weblite.api'
  import { savePhoto, deletePhoto, getAll, addLike } from './helper/function/requestHandler'
  const { W, R } = window


  export default {
    name: 'App',

    data() {
      return {
        wisId: (W && W.wisId) || '1',
        userId: '2',
        username: "ali",
        phlicoz: [],
      }
    },

    components: {
      uploader,
      phlico,
      spliter
    },

    created() { W && webliteHandler(this) },

    mounted() { this.init() },

    methods: {
      init() {
        getAll(this.wisId)
          .then((body) => {
            if (body) {
              this.phlicoz = R.map(({ imageName, comments, creator, likes, caption }) => ({
                imageName,
                comments,
                creator,
                caption,
                likes: R.length(R.uniq((likes))),
                likeState: R.findIndex(R.equals(this.userId), likes) !== -1,
              }), body)
            }
          })
      },

      addPhoto(photo) {
        const info = { wisId: this.wisId, userId: this.userId, creator: this.username }

        savePhoto(info, photo)
          .then((res) => this.phlicoz = R.append(res.body.doc, this.phlicoz))
          .catch(console.log)
      },

      deletePhoto(info) {
        deletePhoto(info)
          .then(res => {
            this.phlicoz = R.reject(R.propEq('imageName', res.body.imageName), this.phlicoz)
          })
      },
    },
  }
</script>

<style scoped>
  #app {
    width:  350px;
    height: 100%;
    border: 1px solid #ccc;
    background-color: #22252c;
    overflow: auto;
  }

  #app::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 1px;
    width: 5px;
    background-color: #F5F5F5;
  }

  #app::-webkit-scrollbar {
    width: 4px;
    background-color: #fefefe;
  }

  #app::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #252a3e;
  }
</style>
