<template>
	<div>
		<div class="banner"  @click="handleBannerClick">
			<img class="banner-img" :src="bannerImg" >
			<div class="banner-info">
				<div class="banner-title">{{this.sightName}}</div>
				<div class="banner-number">
					<span class="iconfont  banner-icon">&#xe61e;</span>
					39
				</div>
			</div>
		</div>
		<fade-animation>
			<common-gallary :imgs="gallaryImgs"
			 v-show="showGallary"
			 @close="handleCloseGallary"
			 ></common-gallary>
		 </fade-animation>
	</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
	name: 'DetailBanner',
	props:{
		sightName:String,
		bannerImg:String,
		gallaryImgs:Array
	},
	data () {
		return {
			showGallary: false,
		}
	},
	components:{
		CommonGallary,
		FadeAnimation
	},
	methods: {
		handleBannerClick () {
			this.showGallary=true
		},
		handleCloseGallary (){
			this.showGallary= false
		}
	}
}
</script>
<style lang="stylus" scoped>
.banner
	height:0
	padding-bottom: 55%
	overflow:hidden
	position: relative
	.banner-img
		 width: 100%
	.banner-info
		display: flex
		height: .64rem
		line-height: .64rem
		position: absolute
		left: 0
		right: 0
		bottom: 0
		color: #fff
		background:linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
		.banner-title
			flex:1
			padding:0 .2rem
			font-size: .32rem
		.banner-number
			height: .32rem
			line-height: .32rem
			margin-top:.14rem
			padding: 0 .4rem
			background:rgba(0,0,0,.8)
			border-radius: .1rem
			font-size: .24rem
			.banner-icon
				font-size: .24rem
</style>