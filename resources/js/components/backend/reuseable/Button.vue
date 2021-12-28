<template>
    <button :class="color" @click="handleClick">
        <i class="mr-1" :class="icon"></i> 
        <span><slot /></span>
    </button>
</template>

<script>
export default {
  props:["color","icon"],
  methods:{
      handleClick(){
          this.$emit("handleClick");
      }
  }
}
</script>

<style>

</style>