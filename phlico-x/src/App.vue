<template>
  <div id="app">
    
    <phlico
      v-for="(item, index) in phlicoz"
      :key="index"
      :imageName="item.imageName"
      :caption="item.caption"
      :comments="item.comments"
      :userInfo="{userid, username}"
      :likeState="item.likeState"
      :del="deletePhoto"/>

    <spliter v-if="hasPhoto">upload</spliter> 

    <uploader 
      :send="sendPhoto({wisid, userid, username})"
      />
<!-- @state="init" -->
  </div>
</template>

<script>
  import phlico from './components/phlico'
  import uploader from './components/uploader'
  import spliter from './components/spliter'

  // helper
  import webliteHandler from './helper/function/weblite.api'
  import {savePhoto, deletePhoto, getAll} from './helper/function/requestHandler'
  const { W, R } = window


  export default {
    name: 'App',

    data() {
      return {
        wisid: (W && W.wisid) || '1',
        userid: '1',
        username: "amirhe",
        phlicoz: [],
        hasPhoto: false,
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
      init: function() {
        getAll(this.wisid)
          .then((body) => {
            console.log("body", body)
            this.phlicoz = R.map(item => ({
              imageName: item.imagename,
              comments: item.comments,
              caption: {
                username: item.username,
                likes: R.length(R.uniq((item.likes))),
                text: item.caption,
              },
              likeState: R.findIndex(R.equals(this.userid), item.likes) !== -1,
            }), body)
            this.hasPhoto = (R.length(this.phlicoz) !== 0)
          })
          .catch(err => console.log("Xmode[A]-getAll[F]-APP[vue]", err))
      },

      sendPhoto(info) {
        return photo => {
          savePhoto(info, photo)
            .then((res) => { 
              this.phlicoz = R.append(res.body.doc, this.phlicoz)
              this.hasPhoto = true })
            .catch((err) => console.log(err))
        }
      },

      deletePhoto(info) {
        deletePhoto(info)
          .then(({body: {imagename}}) => {
            this.phlicoz.splice(R.indexOf(R.propEq('imagename', imagename), this.phlicoz), 1)
            this.hasPhoto = (R.length(this.phlicoz) !== 0) })
          .catch((err) => console.log(err))
      },
    },
  }
</script>

<style scoped>
	#app {
		width:  350px;
		height: 100%;
		border: 1px solid #ccc;
    background-color: #F0E8FB;
    overflow: auto;
	}
  #app::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 1px;
    width: 5px;
    background-color: #F5F5F5;
  }

  #app::-webkit-scrollbar
  {
    width: 4px;
    background-color: #fefefe;
  }

  #app::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #252a3e;
  }
</style>
