<template>
  <div class="card">
    <!--<img src="../assets/images/- (1).jpg" alt="">-->
    <div :style="card">

      <a :href="getOriginalPhoto()">
      <img
        src="../assets/icons/download.png"
        alt="downlaod-logo"
        class="logo"></a>


    </div>
  </div>
</template>

<script>
  import request from 'superagent'
export default {
  name: 'card',

  data() {
  	return {
  	  name: '',
  	  card: {},
  	}
  },

  created() {
    this.name = '1532431044404.jpg'
    this.card = {
      'backgroundImage': `url('${this.getPhoto()}')`,
      'backgroundSize': 'Contain',
      'backgroundRepeat': 'no-repeat',
      'width': '320px',
      'height': '320px',
      'boxShadow': '0 1px 1px rgba(0,0,0, .3)',
      'margin': '10px 0',
    }
  },

  methods: {
    getPhoto: function() {
      const domain = "http://localhost:3000/img/"
      return `${domain}Sqr_${this.name}`
    },

    getOriginalPhoto() {
      const domain = "http://localhost:3000/img/"
      return `${domain}${this.name}`
    },
  },

  props: {
    imageName: String,
  }
}
</script>
<style scoped>
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo {
    margin: 5px 0 0 5px;
    width: 40px;
    height: 40px;
    transition: transform .3s ease-in-out;
    transform: scale(1);
  }
  .logo:hover {
    transform: scale(1.1);
  }
</style>
