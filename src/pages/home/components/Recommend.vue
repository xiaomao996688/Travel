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
	data () {
		return {
			recommendList:[{
			id:'0001',
			imgUrl:'http://img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_200x200_9b0d2dc4.jpg',
			title:'西安必游TOP10',
			desc:'寻长安梦，开启穿越的圆梦之旅'
			},{
				id:'0002',
				imgUrl:'http://img1.qunarzz.com/sight/p0/1412/84/f696c67a8052bb60e6fc51b0f9ba7388.water.jpg_200x200_865e6045.jpg',
				title:'金龙峡',
				desc:'这个周末，呼吸呼吸新鲜空气'
			},{
				id:'0003',
				imgUrl:'http://img1.qunarzz.com/sight/p0/1704/a3/a3e4f87ebd5c55a1a3.water.jpg_200x200_f1fc0289.jpg',
				title:'西安幻太奇梦幻海洋馆',
				desc:''
			},{
				id:'0004',
				imgUrl:'http://img1.qunarzz.com/sight/p0/1505/12/1207d28c272c5864.water.jpg_200x200_30119788.jpg',
				title:'翠华山',
				desc:'太乙真人修炼地，李世民避暑消夏'
			},{
				id:'0005',
				imgUrl:'http://img1.qunarzz.com/sight/p0/1610/2d/2d6480f93f464e0a3.img.jpg_200x200_51908dc5.jpg',
				title:'白鹿原影视城',
				desc:'这里最近很火哦，好多人都在点评它呢！'
			}]
		}
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