<template>
  <div class="i">
    
    <div class="comment-box">
      <!-- :class="{'like': (like)}" -->
      <div class="comment-like"><span v-if="!like">⚪</span><span v-else>🔴</span></div>
      <div class="comment-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip 
      </div>
      <div class="comment-footer">
        <div class="comment-info">
          <span class="comment-autor">
            <a href="">Amirhe</a>
          </span>
            <span class="comment-date">Feb 2, 2013 11:32:04 PM</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commen',
  data() {
    return {
      like: false,
    }
  },
}
</script>

<style scoped>
.comment-box {
  background-color: #fcfcfc;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
  min-height: 60px;
  padding: 15px;
}
.comment-text {
  color: #555f77;
  font-size: 15px;
  margin-bottom: 15px;
}
.comment-footer {
  color: #abc4c2;
  font-size: 13px;
}
.comment-footer  a {
  text-decoration: none;
  cursor: default;
  color: #555f77;
}
.comment-info {
  display: flex;
  justify-content: space-between;  
  align-items: center;
}
.comment-date {
  margin: 0 10px;
}
.comment-box::before {
  content: '';
  height: 0;
  width: 0;
  position: relative;
  display: block;
  border-width: 10px 12px 10px 0;
  border-style: solid;
  border-color: transparent #fcfcfc;
  top: 8px;
  left: -27px;  
}
.comment-like {
  font-size: 10px;
  position: relative;
  right: -300px;
  top: -20px;
}
.state {
  padding: 0;
  margin: 0;
}
</style>
