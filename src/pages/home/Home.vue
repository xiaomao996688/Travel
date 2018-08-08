<template>
	<div>
		<home-header :city="city"></home-header>
		<home-swiper :list="list"></home-swiper>
		<home-icons  :list="icons"></home-icons>
		<home-recommend :recommendList="recommendList"></home-recommend>
		<home-weekend :list="weekend"></home-weekend>
	</div>
</template>
<script >
import HomeHeader     from './components/Header'
import HomeSwiper     from './components/Swiper'
import HomeIcons  	  from './components/Icons'
import HomeRecommend  from './components/Recommend'
import HomeWeekend    from './components/Weekend'
import axios		  from 'axios'
export default{
	name :'Home',
	components:{
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend
	},
	data () {
		return {
			city:'',
			list:[],
			icons:[],
			recommendList:[],
			weekend:[]
		}
	},
	methods:{
		getHomeInfo () {
			axios.get('/api/index.json')
			.then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc (res) {
			res = res.data
			if(res.ret && res.data){
				const  data = res.data
				this.city = data.city
				this.list = data.swiperList
				this.icons = data.iconList
				this.recommendList = data.recommendList
				this.weekend = data.weekendList
			}
			console.log(res)
		}
	},
	mounted (){
		this.getHomeInfo()
	}
}
</script>
<style>
	
</style>