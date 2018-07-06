<template>
  <div class="app" >
    <img
      class="photo-post"
      :alt="picture.image_name"
      :srcset="picture.url"
      :src="picture.url"
      @mouseover="showCaption = !showCaption">

    <div
      v-show="showCaption"
      class="caption-like-container">
        <span class="caption">{{ captionPresent(picture.caption) }}</span>
      <lable
        class="comment"
        @click="showComments(1)">🔖</lable>
      <lable
          :class="[{'liked': (isLiked)}, 'heart']"
          @click="isLiked = !isLiked">❤</lable>

    </div>
    <!--<input id="toggle-heart" type="checkbox" />-->
    <!--<label for="toggle-heart">❤</label>-->



  </div>
</template>

<script>
  export default {
    name: "photo",
    data: function() {
      return {
        isLiked: false,
        showCaption: false,
      }
    },
    methods: {
      captionPresent: function(caption) {
        if (caption.length < 50) return caption
        return caption.substring(0, 47) + '...'
      },
      showComments: (caption) => {
        console.log(caption)
        this.$emit('SHOW_COMMENTS', caption)
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
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
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

  .caption-like-container {
    display: flex;
    position: absolute;
    z-index: 3;
    justify-content: space-between;
    align-items: baseline;
    max-width: 300px;
    max-height: 300px;
    width: 100%;
    height: 5%;
    background-color: rgba(0,0,0,0.7);
  }

  .caption {
    font-size: 12px;
    align-item: flex-end;
    align-self: center;
    color:white;
    margin-top: 4px;
    margin-left: 5px;
    max-width: 80%;
    /*justify-content: space-around;*/
    /*align-items: baseline;*/
    /*align-item: flex-end;*/
    /*text-align: center;*/
  }

  .comment {
    cursor: pointer;
  }

  .heart {
    color: white;
    align-item: flex-end;
    margin-right: 5px;
    align-self: center;
    cursor: pointer;
  }

  .liked {
    /*display: inline-block;*/
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    color: red;
  }


</style>
