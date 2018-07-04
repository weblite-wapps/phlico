<template>
  <div class="app" >
    <img
      class="photo-post"
      :alt="picture.image_name"
      :srcset="picture.url"
      :src="picture.url"
      @mouseover="show.icons = true"
      @mouseleave="show.icons = false">

    <!--<input id="toggle-heart" type="checkbox" />-->
    <!--<label for="toggle-heart">❤</label>-->

    <lable
      id="heart"
      :class="{'liked': (liked)}">❤</lable>

  </div>
</template>

<script>
  export default {
    name: "photo",
    data: function() {
      return {
        liked: false,
        show: {
          icons: false,
          liked: false,
        }
      }
    },
    methods: {
      test() {
        // console.log("test is ready")
      }
    },
    props: {
      picture: Object,
    }
  }
</script>

<style scoped>
  .app {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  .photo-post {
    max-width: 300px;
    max-height: 300px;
    width: 100%;
    height: 100%;
  }
  .photo-post:hover {
    cursor: pointer;
  }

  #heart {
    cursor: pointer;
    color: #aab8c2;
    transition: 200ms ease-in;
    transform: scale(1);
  }

  #heart:hover {
    transition: 200ms ease-in-out;
    transform: scale(1.4) ;
  }

  .liked{
    cursor: pointer;
    color: #e2264d;
  }

  normalHeart {
    color: #aab8c2;
  }

  #heart
  [id='toggle-heart'] {
    position: absolute;
    left: -100vw;
  }

  [for='toggle-heart'] {
    color: #aab8c2;
  }

  [id='toggle-heart']:checked + label {
    color: #e2264d;
    animation: heart 1s cubic-bezier(.17, .89, .32, 1.49);
  }

  [for='toggle-heart'] {
    font-size: 2em;
    cursor: pointer;
  }

  [for='toggle-heart'] {
    align-self: flex-end;
  }
  @keyframes heart { 0%, 17.5% { font-size: 0; } }

  [id='toggle-heart']:checked + label {
    will-change: font-size;
    animation: heart 1s cubic-bezier(.17, .89, .32, 1.49);
  }

</style>
