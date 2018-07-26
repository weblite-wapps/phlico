<template>
  <div id="app">
    <phlico
      v-for="(item, index) in phlicoz"
      :key="index"
      :imageName="item.imageName"
      :caption="item.caption"
      :comments="item.comments"
      :userInfo="{userid, username}"/>

    <uploader 
      :send="sendPhoto({wisid, userid, username})"
      @state="init"/>

  </div>
</template>

<script>
  import phlico from './components/phlico'
  import uploader from './components/uploader'

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
      }
    },
    
    created: function() { W && webliteHandler(this) },

    mounted: function() { this.init() },

    methods: {

      init: function() {
        /*-rm*/
        console.log("ramda", R)

        getAll(this.wisid)
          .then((body) => {
            this.phlicoz = R.map(item => ({
              imageName: item.imagename,
              comments: item.comments,
              caption: {
                username: item.username,
                likes: R.length(R.uniq((item.likes))),
                text: item.caption,
              },
            }), body)
          })
          .catch(err => console.log("Xmode[A]-getAll[F]-APP[vue]", err))
      },

      sendPhoto: function(info) {
        return photo => {
          savePhoto(info, photo)
            /*Fix Promise Working for load initialization*/
            .then((res) => {
              this.phlicoz = R.append(res.body.doc, this.phlicoz)
            })
            .catch((err) => console.log(err))
        }
      },
    },

    components: {
      uploader,
      phlico
    }
  }
</script>

<style scoped>
	#app {
		/* sizing */
		width:  350px;
		height: 100%;
		border: 1px solid #ccc;
    overflow: auto;
	}
  /* scrollbar */
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
