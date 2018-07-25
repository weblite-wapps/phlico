<template>
  <div id="app">
    <phlico
      v-for="(item, index) in phlicoz"
      :key="index"
      :imageName="item.imageName"
      :caption="item.caption"
      :comments="item.comments"
      />

    <uploader
      @save="save"
    />

  </div>
</template>

<script>
  import phlico from './components/phlico'
  import uploader from './components/uploader'

  // helper
  import webliteHandler from './helper/function/weblite.api'
  import requestHandler from './helper/function/requestHandler'
  const { W } = window


export default {
  name: 'App',

  data() {
    return {
      wisid: (W && W.wisid) || '1',
      userid: 1,
      username: "amirhe",
      phlicoz: [
        {
          imageName: "1532495363561.jpeg",
          caption: {
            likes: 11,
            username: "amirhe",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" ,
          },
          comments:
            [{
            author: "@mirhe",
            time: 'Feb 2, 2018 22:30pm',
            text: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n",
            },
            {
            author: "@mirhe",
            time: 'Feb 2, 2018 22:30pm',
            text: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n",
            },
              {
                author: "@mirhe",
                time: 'Feb 2, 2018 22:30pm',
                text: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n",
              },
              {
                author: "@mirhe",
                time: 'Feb 2, 2018 22:30pm',
                text: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n",
              },
              {
                author: "@mirhe",
                time: 'Feb 2, 2018 22:30pm',
                text: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n",
              },
              {
                author: "@mirhe",
                time: 'Feb 2, 2018 22:30pm',
                text: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n",
              }]
        },
        {
          imageName: "1532500411040.gif",
          caption: {
            likes: 11,
            username: "amirhe",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" ,
          },
          comments:
            [{
              author: "@mirhe",
              time: 'Feb 2, 2018 22:30pm',
              text: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n",
            },
              {
                author: "@mirhe",
                time: 'Feb 2, 2018 22:30pm',
                text: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n",
              },
              {
                author: "@mirhe",
                time: 'Feb 2, 2018 22:30pm',
                text: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n",
              },
              {
                author: "@mirhe",
                time: 'Feb 2, 2018 22:30pm',
                text: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n",
              },
              {
                author: "@mirhe",
                time: 'Feb 2, 2018 22:30pm',
                text: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n",
              },
              {
                author: "@mirhe",
                time: 'Feb 2, 2018 22:30pm',
                text: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n",
              }]
        }
      ],
    }
  },
  created: function() { W && webliteHandler(this) },
  mounted: function() { this.init() },

  methods: {
    init: function() {
      requestHandler.getAll(this.wisid)
    },

    save: function(info) {
      requestHandler.savePhoto({
        ...info,
        wisid: this.wisid,
        userid: this.userid,
        username: this.username,
      })
    }
  //  get all thing from data base and make them acceptable for phlico
  //   update phlico and weblite.api
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

</style>
