<template>
	<div>
		<router-link tag="div" to="/" class="header-abs" v-show="this.showAbs">
		   <span class="header-abs-back"><i class="iconfont">&#xe624;</i></span>
		</router-link>

		<div class="header-fixed"
		v-show="!this.showAbs"
		:style="opacityStyle"
		>
			<router-link tag="div" to="/">
				<div class="header-back iconfont">&#xe624;</div>
			</router-link>
		景点详情
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailHeader',
	data () {
		return {
			showAbs : true,
			opacityStyle:{
				opacity: 0
			}
		}
	},
	methods :{
		handleScroll () {
			const top = document.documentElement.scrollTop
			if(top > 60  ){
				let opacity = top/140
				opacity = opacity > 1 ? 1 : opacity
				this.opacityStyle = {opacity}
				this.showAbs = false
			}else{
				this.showAbs = true
			}
		}
	},
	mounted () {
		window.addEventListener('scroll', this.handleScroll)
	},
	unmounted () {
		window.removeEventListener('scroll', this.handleScroll)
	}
}	
</script>
<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
	.header-abs
		position: absolute
		top:0
		left:0
		height: .8rem
		line-height: .8rem
		width: .8rem
		background: rgba(0,0,0,.8)
		border-radius: .4rem
		margin:.2rem
		font-size: .4rem
		text-align: center
		.header-abs-back
			color: #fff
	.header-fixed
		z-index:5
		position: fixed
		top:0
		height: $headerHeight
		line-height: $headerHeight
		text-align: center
		color: #fff
		background:$bgColor
		font-size: .32rem
		width:100%
		.header-back
			text-align:left
			position:absolute
			top:0
			left:0
			width:.64rem
			text-align:center
			font-size:.4rem
			color:#fff
</style>