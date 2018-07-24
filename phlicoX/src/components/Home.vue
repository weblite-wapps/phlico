<template>
  <div class="home">
    <phlico
      v-for="(item, index) in phlicoz"
      :key="index"
      :imageName="item.imageName"
      :comments="item.comments"/>

    <uploader></uploader>

  </div>

</template>

<script>
import phlico from './phlico.vue'
import uploader from './uploader.vue'

export default {
  name: 'Home',

  components: {
    phlico,
    uploader
  },

  props: {
    phlicoz: Object,
    webliteInfo: Object,
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
