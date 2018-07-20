<template>
  <div>
    <form 
      action=""
      class="form"
      name="form">
      <div class="form-row">
        <textarea
          class="comment-text"
          placeholder="Add comment..."
          required></textarea>
      </div>
      <div class="form-row">
        <input type="submit" name="Add Comment">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'comments',
  data() {return {}}
}
</script>

<style scoped>
.form .form-row .comment-text {
 background-color: #FCFCFC;
 border: none;
 border-radius: 4px;
 box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
 color: #555f77;
 font-size: 14px;
 padding: 5px 10px;
 outline: none;
 /* width: 100%;  */
 width: 350px; 
}
.form .form-row  input[type=submit] {
  background-color: #555f77;
  border:  none;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
  color: #fff;
  cursor: pointer;
  display: block;
  margin-left: auto;
  outline: none;
  padding: 6px 15px;
}
.form .form-row .comment-text:focus,
.form .form-row input[type=submit]:hover {
  box-shadow: 0 2px 6px rgba(121, 137, 148, .55);
}
.form-row {
  margin-bottom: 30px
}
.comment-text {
  min-height: 190px;
}
</style>
