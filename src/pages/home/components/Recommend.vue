<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom"  v-for="item of recommendList" :key="item.id">
				<img  class="item-img" :src="item.imgUrl" >		
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
		<div class="all-product">
			<p class="product-text">查看所有产品</p>
		</div>
	</div>
</template>

<script>
export default {
	name :'HomeRecommend',
	props:{
		recommendList:Array
	}
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'
	.title
		margin-top: .2rem
		line-height:.8rem
		background:  #eee
		text-index: .2rem
	.all-product
		margin-top:.2rem
		font-size:.32rem
		height:.4rem
		.product-text
			line-height:.4rem
			color:#00afc7
			text-align:center
			verticle:middle
	.item
		overflow: hidden
		display: flex
		height: 1.9rem
		.item-img
			height:1.7rem
			width:1.7rem
			padding:.1rem
		.item-info
			flex:1
			padding:.1rem
			min-width:0
			.item-title
				line-height:.54rem
				font-size:.32rem
				ellipsis()
			.item-desc
				line-height:.4rem
				color:#ccc
				ellipsis()
			.item-button
				line-height:.44rem
				margin-top:.16rem
				background:#ff9300
				padding: 0 .1rem
				border-radius: .06rem
				color:#fff
</style>