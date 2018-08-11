<template>
	<div>
		<div class="item"
		v-for="(item,index) of list"
		:key="index"
		>
			<div class="item-title border-bottom">
				<span class="item-title-icon"></span>
				{{item.title}}
			</div>
			<div v-if="item.children" class="item-children">
				<div v-if="item.content" class="item-content">
					<detail-list
					:list="item.content"
					></detail-list>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailList',
	props:{
		list: Array
	}
}	
</script>
<style lang="stylus" scoped>
	.item-title-icon
		position:relative
		top:.06rem
		display: inline-block
		width: .36rem
		height: .36rem
		background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.5rem no-repeat
		background-size: .4rem 3.3rem
	.item-title
		height: .8rem
		font-size: .32rem
		padding: .2rem
	.item-children
		padding: 0 .2rem
	.item-content
		position:relative
		right:0
		left:0
		margin:0
		padding:0
		min-width:1.3rem
		line-height: .36rem
		font-size:.24rem
		text-indent:.6rem
		.item-title
			padding:0
			margin:0
		.item-title-icon
			width:0
			background-image:none
		
			
		
   

		   
</style>