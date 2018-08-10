<template>
	<div class="header">
		<div class="header-left">
			<span><i class="iconfont">&#xe624;</i></span>
		</div>
		<div class="header-input">
			<span><i class="iconfont">&#xe632;</i>输入城市\景点、游玩主题</span>
		</div>
    <router-link to="/city">
  		<div class="header-right">
  			{{this.doubleCity}}<span><i class="iconfont arrow-icon">&#xe64a;</i></span>
  		</div>
    </router-link>
	</div>
</template>
<script >
  import {mapState,mapGetters} from 'vuex'
	export default{
		name :'HomeHeader',
    computed:{
      //把vuex的数据隐射到computed计算属性里
      //把city隐射到这计算属性之中所以这个city变成这组件的数据可以用this
      ...mapState(['city']),
      ...mapGetters(['doubleCity'])
    }
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header
     heigth: $headerHeight
     line-height: $headerHeight
     background:$bgColor
     color:#fff
     display:flex
  	.header-left
  		width:.64rem
  		float:left
  		text-align:center
  	.header-right
      min-width:1.4rem
      padding:0 .1rem
      float:right
      text-align:center  
      color:#fff 
  		.arrow-icon
  			font-size:.24rem
  			margin-left:.1rem
  	.header-input
  		flex:1
  		background:#fff
  		line-height:.64rem
  		height:.64rem
  		margin-top:.12rem
  		margin-bottom:.12rem
  		margin-left:.2rem
  		padding-left:.2rem
  		color:#ccc
  		border-radius:.1rem
  		
</style>