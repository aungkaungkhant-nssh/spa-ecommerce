<template>
  <div>
	<!-- Header -->
	<public-header v-if="bar"></public-header>
	<!--/ End Header -->
	<router-view ></router-view>	
	<!-- <vue-progress-bar></vue-progress-bar> -->
	<!-- Start Footer Area -->
	<public-footer v-if="bar"></public-footer>
	<!-- /End Footer Area -->

  </div>
</template>

<script>
import PublicFooter from '../PublicFooter.vue'
import PublicHeader from '../PublicHeader.vue'

export default {
  	components: { PublicHeader, PublicFooter },
	computed:{  
		bar(){
			if(this.$route.path=="/register" || this.$route.path=="/login"){
				return false;
			}else{
				return true;
			}
		}
	}
	

}
</script>

<style>
    #nprogress .bar {
      background: #F7941D !important;
    }
	#nprogress .spinner-icon {
	border-top-color: #F7941D;
	border-left-color: #F7941D;
	}
</style>