<template>
  <div class="notfound">
      <h4>404 Page Not Found</h4>
      <button class="btn btn-primary mt-3" @click="$router.back()">Back</button>
  </div>
</template>
<script>
export default {
  methods:{
    back(){
      this.$router.push({name:"HomeAdmin"})
    }
  }
}
</script>

<style>
.notfound{
    margin: 200px auto;
    width: 300px;
    text-align: center;
    overflow: hidden;
}
body{
  height:0;
}
</style>