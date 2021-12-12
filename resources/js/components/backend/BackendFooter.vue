<template>
  <footer class="main-footer">
    <strong>Copyright &copy; {{years}}</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>SPA Ecommerce</b> 
    </div>
  </footer>
</template>

<script>
export default {
    data(){
        return {
            years:new Date().getFullYear()
        }
    }
}
</script>

<style>

</style>