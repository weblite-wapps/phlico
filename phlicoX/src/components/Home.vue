<template>
  <div class="home">
    <phlico
      v-for="(item, index) in phlicoz"
      :key="index"
      :imageName="item.imageName"
      :comments="item.comments"/>

    <uploader
      @save="save"
      />

  </div>

</template>

<script>
import phlico from './phlico.vue'
import uploader from './uploader.vue'
import request from 'superagent'
// helper
import webliteHandler from '../helper/function/weblite.api'
//
import config from '../config'
// W
const { W } = window

export default {
  name: 'Home',

  data() {
    return {
      wisid: (W && W.wisId) || '1',
      username: 'amirhe',
      userid: (W && W.user.id) || '1'
    }
  },

  components: {
    phlico,
    uploader,
  },

  props: {
    phlicoz: Object,
    webliteInfo: Object,
  },

  methods: {
    save: function(info) {
      const formData = new FormData();
      const domain = 'http://localhost:3000'

      formData.append("wisid", this.wisid);
      formData.append("userid", this.userid);
      formData.append("username", this.username);

      formData.append("caption", info.caption);
      formData.append("image", info.file);

      request
        .post(domain + '/upload')
        .send(formData)
        .then((res) => {
          //Do thing show an animation or check thing play sound
          console.log('photo sent')
        })
        .catch((err) => {
          //Do opposite
          console.log(err)
        })
    },
  }

}
</script>

<style scoped>
  .home {
    overflow: auto;
  }
	/*#plus-sign {*/
		/*display: block;*/
		/*z-index: 20;*/
		/*cursor: pointer;*/
		/*margin: 0 auto;*/
		/*width: 70px;*/
		/*height: 70px;*/
	/*}*/

</style>
