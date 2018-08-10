<template>
	<div>
		<home-header></home-header>
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
import { mapState }   from 'vuex'
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
			lastCity:'',
			list:[],
			icons:[],
			recommendList:[],
			weekend:[]
		}
	},
	computed:{
     ...mapState({
     	City:'city'
     })
	},
	methods:{
		getHomeInfo () {
			//?city=vuex里面储存的当前所在城市
			//，所以引入vuex
			axios.get('/api/index.json?city=' + this.City)
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
		}
	},
	mounted (){
		this.lastCity = this.City
		this.getHomeInfo()
	},
	activated () {
		if(this.lastCity !== this.City){
			this.lastCity = this.City
			this.getHomeInfo()
		}
	}
	

}
</script>
<style>
	
</style>