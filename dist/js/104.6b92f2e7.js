"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[104],{3104:function(a,t,s){s.r(t),s.d(t,{default:function(){return g}});var e=function(){var a=this,t=a._self._c;return t("div",[t("TypeNav"),t("div",{staticClass:"main"},[t("div",{staticClass:"py-container"},[t("div",{staticClass:"bread"},[a._m(0),t("ul",{staticClass:"fl sui-tag"},[a.searchParams.categoryName?t("li",{staticClass:"with-x"},[a._v(" "+a._s(a.searchParams.categoryName)+" "),t("i",{on:{click:a.removeCategoryName}},[a._v("×")])]):a._e(),a.searchParams.keyword?t("li",{staticClass:"with-x"},[a._v(" "+a._s(a.searchParams.keyword)+" "),t("i",{on:{click:a.removeCategoryKeyword}},[a._v("×")])]):a._e(),a.searchParams.trademark?t("li",{staticClass:"with-x"},[a._v(" "+a._s(a.searchParams.trademark.split(":")[1])+" "),t("i",{on:{click:a.removeTrademark}},[a._v("×")])]):a._e(),a._l(a.searchParams.props,(function(s,e){return a.searchParams.props?t("li",{key:e,staticClass:"with-x"},[a._v(" "+a._s(s.split(":")[1])+" "),t("i",{on:{click:function(t){return a.removeAttrInfo(e)}}},[a._v("×")])]):a._e()}))],2)]),t("SearchSelector",{on:{trademarkInfo:a.trademarkInfo,attrInfo:a.attrInfo}}),t("div",{staticClass:"details clearfix"},[t("div",{staticClass:"sui-navbar"},[t("div",{staticClass:"navbar-inner filter"},[t("ul",{staticClass:"sui-nav"},[t("li",{class:{active:a.isOne},on:{click:function(t){return a.changeOrder(1)}}},[t("a",[a._v("综合 "),t("span",{directives:[{name:"show",rawName:"v-show",value:a.isOne,expression:"isOne"}],staticClass:"iconfont",class:a.orderType})])]),t("li",{class:{active:a.isTwo},on:{click:function(t){return a.changeOrder(2)}}},[t("a",[a._v("价格 "),t("span",{directives:[{name:"show",rawName:"v-show",value:a.isTwo,expression:"isTwo"}],staticClass:"iconfont",class:a.orderType})])])])])]),t("div",{staticClass:"goods-list"},[t("ul",{staticClass:"yui3-g"},a._l(a.goodsList,(function(s){return t("li",{key:s.id,staticClass:"yui3-u-1-5"},[t("div",{staticClass:"list-wrap"},[t("div",{staticClass:"p-img"},[t("router-link",{attrs:{to:`/detail/${s.id}`}},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.defaultImg,expression:"item.defaultImg"}]})])],1),t("div",{staticClass:"price"},[t("strong",[t("span",[a._v("¥")]),t("span",[a._v(a._s(s.price))])])]),t("div",{staticClass:"attr"},[t("a",{attrs:{target:"_blank",href:"item.html",title:"促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"}},[a._v(" "+a._s(s.title))])]),a._m(1,!0),a._m(2,!0)])])})),0)]),t("Pagination",{attrs:{pageNo:this.searchParams.pageNo,pageSize:this.searchParams.pageSize,total:a.total,continues:5},on:{getPageNo:a.getPageNo}})],1)],1)])],1)},r=[function(){var a=this,t=a._self._c;return t("ul",{staticClass:"fl sui-breadcrumb"},[t("li",[t("a",{attrs:{href:"#"}},[a._v("全部结果")])])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"commit"},[t("i",{staticClass:"command"},[a._v("已有"),t("span",[a._v("2000")]),a._v("人评价")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"operate"},[t("a",{staticClass:"sui-btn btn-bordered btn-danger",attrs:{href:"success-cart.html",target:"_blank"}},[a._v("加入购物车")]),t("a",{staticClass:"sui-btn btn-bordered",attrs:{href:"javascript:void(0);"}},[a._v("收藏")])])}],i=(s(7658),s(3822)),c=function(){var a=this,t=a._self._c;return t("div",{staticClass:"clearfix selector"},[t("div",{staticClass:"type-wrap logo"},[t("div",{staticClass:"fl key brand"},[a._v("品牌")]),t("div",{staticClass:"value logos"},[t("ul",{staticClass:"logo-list"},a._l(a.trademarkList,(function(s){return t("li",{key:s.tmId,on:{click:function(t){return a.trademarkHandler(s)}}},[a._v(a._s(s.tmName))])})),0)]),a._m(0)]),a._l(a.attrsList,(function(s){return t("div",{key:s.attrId,staticClass:"type-wrap"},[t("div",{staticClass:"fl key"},[a._v(a._s(s.attrName))]),t("div",{staticClass:"fl value"},a._l(s.attrValueList,(function(e,r){return t("ul",{key:r,staticClass:"type-list",on:{click:function(t){return a.attrInfo(s.attrId,e,s.attrName)}}},[t("li",[t("a",[a._v(a._s(e))])])])})),0),t("div",{staticClass:"fl ext"})])}))],2)},o=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"ext"},[t("a",{staticClass:"sui-btn",attrs:{href:"javascript:void(0);"}},[a._v("多选")]),t("a",{attrs:{href:"javascript:void(0);"}},[a._v("更多")])])}],n={name:"SearchSelector",computed:{...(0,i.Se)(["trademarkList","attrsList"])},methods:{trademarkHandler(a){this.$emit("trademarkInfo",a)},attrInfo(a,t,s){this.$emit("attrInfo",a,t,s)}}},l=n,h=s(1001),d=(0,h.Z)(l,c,o,!1,null,"64c11522",null),m=d.exports,u=s(2517),v={name:"Search",components:{SearchSelector:m,Pagination:u.Z},data(){return{searchParams:{category1Id:"",category2Id:"",category3Id:"",categoryName:"",keyword:"",order:"1:desc",pageNo:1,pageSize:10,props:[],trademark:""}}},watch:{$route(){this.searchParams.category1Id="",this.searchParams.category2Id="",this.searchParams.category3Id="",Object.assign(this.searchParams,this.$route.query,this.$route.params),this.getDate()}},beforeMount(){Object.assign(this.searchParams,this.$route.query,this.$route.params)},mounted(){this.getDate()},computed:{...(0,i.Se)(["goodsList"]),...(0,i.rn)({total:a=>a.search.searchList.total}),isOne(){return-1!==this.searchParams.order.indexOf("1")},isTwo(){return-1!==this.searchParams.order.indexOf("2")},isDesc(){return-1!==this.searchParams.order.indexOf("desc")},isAsc(){return-1!==this.searchParams.order.indexOf("asc")},orderType(){return-1!==this.searchParams.order.indexOf("desc")?"icon-long-arrow-down":"icon-long-arrow-up"}},methods:{getDate(){this.$store.dispatch("getSearchList",this.searchParams)},removeCategoryName(){this.searchParams.categoryName="",this.$router.push({name:"search",params:this.$route.params})},removeCategoryKeyword(){this.searchParams.keyword="",this.$router.push({name:"search",query:this.$route.query})},trademarkInfo(a){this.searchParams.trademark=`${a.tmId}:${a.tmName}`,this.getDate()},removeTrademark(){this.searchParams.trademark=void 0,this.getDate()},attrInfo(a,t,s){let e=`${a}:${t}:${s}`;-1===this.searchParams.props.indexOf(e)&&this.searchParams.props.push(e),this.getDate()},removeAttrInfo(a){this.searchParams.props.splice(a,1),this.getDate()},changeOrder(a){this.searchParams.order=-1!==this.searchParams.order.indexOf("desc")?`${a}:asc`:`${a}:desc`,this.getDate()},getPageNo(a){this.searchParams.pageNo=a,this.getDate()}}},p=v,f=(0,h.Z)(p,e,r,!1,null,"2b774bea",null),g=f.exports}}]);