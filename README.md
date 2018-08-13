# travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
#
  ##这项目由三个大组件，Home,City，Detil。分别对应首页，城市、和详情页。此外还有一个公共组件，本项目应用了vue2.x版本。应用了vue框架的知识点下面将会逐步介绍各个知识点还有技术插件##
###文件配置说明
-main.js配置-
##main.js是vue的入口文件,主要作用是初始化实例并使用需要的插件，App.vue是主组件，所有的页面都是在App.vue下进行切换的##
-项目初始化介绍-
##├── src
├── main.js
├── App.vue
├── assets
│		└── styles 存储css样式
│				└── iconfont   # 存放icon字体图标
│				└── border.css # 解决1手机端1px
│				└── reset.css  # 样式初始化
│				└── ...
├── pages
│	   └── home   # 首页
│	   │     └── component   # 拆分组件
│	   │	 │    └── HomeHeader.vue      # 头部组件
│	   │	 │    └── HomeRecommend.vue   # 热门推荐
│	   │	 │    └── Swiper  		      # 轮播组件
│	   │	 │    └── ...   			  # 其他组件
│	   │	 └── Home.vue   # 首页组件
│	   └── city   # 城市
│	   │     └── component   # 拆分组件
│	   │	 │    └── Alphabte.vue        # 侧边栏组件
│	   │	 │    └── List.vue   		  # 城市列表
│	   │	 │    └── search  		      # 搜索组件
│	   │	 │    └── ...   			  # 其他组件
│	   │	 └── City.vue   # 城市组件
│	   └── detail  # 详情页
│	        └── component   # 拆分组件
│	    	 │    └── Banner.vue    	  # 头部组件
│	    	 │    └── list.vue   		  # 热门推荐
│	    	 │    └── ...   			  # 其他组件
│	    	 └── Detail.vue   # 详情页组件
│
│
├── router
│		└── index.js 路由配置
├── store
│   └── index.js # vuex配置
│   └── mutaions # vuex配置文件
│   └── state.js # vuex配置文件

##