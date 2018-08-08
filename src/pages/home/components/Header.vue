<template>
	<div class="header">
		<div class="header-left">
			<span><i class="iconfont">&#xe624;</i></span>
		</div>
		<div class="header-input">
			<span><i class="iconfont">&#xe632;</i>输入城市\景点、游玩主题</span>
		</div>
		<div class="header-right">
			城市<span><i class="iconfont arrow-icon">&#xe64a;</i></span>
		</div>
	</div>
</template>
<script >
	export default{
		name :'HomeHeader'
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header
     heigth:.86rem
     line-height:.86rem
     background:$bgColor
     color:#fff
     display:flex
  	.header-left
  		width:.64rem
  		float:left
  		text-align:center
  	.header-right
  		width:1.4rem
  		float:right
  		text-align:center
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