(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-29f3"],{"/Z2C":function(t,e,a){"use strict";var i=a("9bSZ");a.n(i).a},"4gtR":function(t,e,a){},"9bSZ":function(t,e,a){},NAyz:function(t,e,a){"use strict";var i=a("oj9+");e.a={data:function(){return{loading:!1,axisOption:{color:["#6ca2ff"],tooltip:{trigger:"axis",formatter:"{b} : {c}元",axisPointer:{type:"shadow"}},grid:{top:"40px",left:"30px",right:"50px",bottom:"40px",containLabel:!0,borderColor:"#fff"},xAxis:[{name:"（元）",type:"value",data:[],axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#BDBDBD",formatter:"{value}"},axisLine:{show:!1}}],yAxis:[{type:"category",axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#BDBDBD"},axisLine:{lineStyle:{color:"#BDBDBD"}},splitLine:{show:!1}}],series:[{type:"bar",label:{normal:{show:!0,position:"right",color:"#333"}},barWidth:20,data:[]}]},axisChart:null,list:[],fieldList:[]}},mixins:[i.a],components:{},props:{},computed:{},watch:{},mounted:function(){},methods:{},deactivated:function(){}}},SgPk:function(t,e,a){"use strict";var i=a("4gtR");a.n(i).a},X8ug:function(t,e,a){"use strict";a.d(e,"c",function(){return s}),a.d(e,"f",function(){return n}),a.d(e,"i",function(){return o}),a.d(e,"e",function(){return l}),a.d(e,"b",function(){return u}),a.d(e,"a",function(){return r}),a.d(e,"h",function(){return c}),a.d(e,"g",function(){return d}),a.d(e,"d",function(){return p});var i=a("t3Un");function s(t){return Object(i.a)({url:"bi/ranking/contract",method:"post",data:t})}function n(t){return Object(i.a)({url:"bi/ranking/receivables",method:"post",data:t})}function o(t){return Object(i.a)({url:"bi/ranking/signing",method:"post",data:t})}function l(t){return Object(i.a)({url:"bi/ranking/product",method:"post",data:t})}function u(t){return Object(i.a)({url:"bi/ranking/addCustomer",method:"post",data:t})}function r(t){return Object(i.a)({url:"bi/ranking/addContacts",method:"post",data:t})}function c(t){return Object(i.a)({url:"bi/ranking/recordNun",method:"post",data:t})}function d(t){return Object(i.a)({url:"bi/ranking/recordCustomer",method:"post",data:t})}function p(t){return Object(i.a)({url:"bi/ranking/examine",method:"post",data:t})}},"gXW+":function(t,e,a){"use strict";var i=a("KTTK"),s=a("UcQx"),n=a("conU"),o=a("uKQN"),l=a("wd/R"),u=a.n(l),r={name:"FiltrateHandleView",components:{timeTypeSelect:o.a},props:{moduleType:{required:!0,type:String},showYearSelect:{default:!1,type:Boolean},showBusinessSelect:{default:!1,type:Boolean},showUserSelect:{default:!0,type:Boolean},showCustomSelect:{default:!1,type:Boolean},customDefault:"",customOptions:{default:function(){return[]},type:Array},showProductSelect:{default:!1,type:Boolean}},data:function(){return{pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}},yearValue:"",timeTypeValue:{},structuresProps:{children:"children",label:"label",value:"id"},deptList:[],structuresSelectValue:"",userOptions:[],userSelectValue:"",businessOptions:[],businessStatusValue:"",productValue:[],productOptions:[],customValue:""}},watch:{},mounted:function(){var t=this;this.showCustomSelect&&(this.customValue=this.customDefault),this.showYearSelect&&(this.yearValue=u()(new Date).year().toString()),this.$emit("load"),this.getDeptList(function(){t.showBusinessSelect?t.getBusinessStatusList(function(){t.postFiltrateValue()}):t.postFiltrateValue()}),this.showProductSelect&&this.getProductCategoryIndex()},beforeDestroy:function(){},methods:{customSelectChange:function(){this.$emit("typeChange",this.customValue)},timeTypeChange:function(t){this.timeTypeValue=t},getDeptList:function(t){var e=this;Object(i.c)({m:"bi",c:this.moduleType,a:"read"}).then(function(a){e.deptList=a.data,a.data.length>0?(e.structuresSelectValue=a.data[0].id,e.showUserSelect&&e.getUserList()):e.structuresSelectValue="",t(!0)}).catch(function(){e.$emit("error")})},structuresValueChange:function(t){this.showUserSelect&&(this.userSelectValue="",this.userOptions=[],this.getUserList())},getUserList:function(){var t=this,e={};e.structure_id=this.structuresSelectValue,Object(i.k)(e).then(function(e){t.userOptions=e.data}).catch(function(){t.$emit("error")})},getBusinessStatusList:function(t){var e=this;Object(s.h)().then(function(a){e.businessOptions=a.data,a.data.length>0&&(e.businessStatusValue=a.data[0].type_id),t(!0)}).catch(function(){e.$emit("error")})},getProductCategoryIndex:function(){var t=this;Object(n.v)({type:"tree"}).then(function(e){t.productOptions=e.data}).catch(function(){})},postFiltrateValue:function(){var t={structure_id:this.structuresSelectValue};this.showUserSelect&&(t.user_id=this.userSelectValue),this.showBusinessSelect&&(t.type_id=this.businessStatusValue),this.showProductSelect&&(t.category_id=this.productValue.length>0?this.productValue[this.productValue.length-1]:""),this.showYearSelect?t.year=this.yearValue:"custom"==this.timeTypeValue.type?(t.start_time=this.timeTypeValue.startTime,t.end_time=this.timeTypeValue.endTime):t.type=this.timeTypeValue.value,this.$emit("change",t)}}},c=(a("/Z2C"),a("KHd+")),d=Object(c.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filtrate-content"},[t.showYearSelect?t._e():a("time-type-select",{on:{change:t.timeTypeChange}}),t._v(" "),t.showYearSelect?a("el-date-picker",{attrs:{clearable:!1,"picker-options":t.pickerOptions,type:"year","value-format":"yyyy",placeholder:"选择年"},model:{value:t.yearValue,callback:function(e){t.yearValue=e},expression:"yearValue"}}):t._e(),t._v(" "),a("el-select",{attrs:{placeholder:"选择部门"},on:{change:t.structuresValueChange},model:{value:t.structuresSelectValue,callback:function(e){t.structuresSelectValue=e},expression:"structuresSelectValue"}},t._l(t.deptList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),t.showUserSelect?a("el-select",{attrs:{clearable:!0,placeholder:"选择员工"},model:{value:t.userSelectValue,callback:function(e){t.userSelectValue=e},expression:"userSelectValue"}},t._l(t.userOptions,function(t){return a("el-option",{key:t.id,attrs:{label:t.realname,value:t.id}})})):t._e(),t._v(" "),t.showBusinessSelect?a("el-select",{attrs:{placeholder:"商机组"},model:{value:t.businessStatusValue,callback:function(e){t.businessStatusValue=e},expression:"businessStatusValue"}},t._l(t.businessOptions,function(t){return a("el-option",{key:t.type_id,attrs:{label:t.name,value:t.type_id}})})):t._e(),t._v(" "),t.showProductSelect?a("el-cascader",{staticStyle:{width:"100%"},attrs:{options:t.productOptions,"show-all-levels":!1,props:{children:"children",label:"label",value:"category_id"},"change-on-select":""},model:{value:t.productValue,callback:function(e){t.productValue=e},expression:"productValue"}}):t._e(),t._v(" "),t.showCustomSelect?a("el-select",{attrs:{placeholder:"图标类型"},on:{change:t.customSelectChange},model:{value:t.customValue,callback:function(e){t.customValue=e},expression:"customValue"}},t._l(t.customOptions,function(t){return a("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})):t._e(),t._v(" "),a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.postFiltrateValue()}}},[t._v("搜索")]),t._v(" "),t._t("default")],2)},[],!1,null,"7c6c0e5c",null);d.options.__file="filtrateHandleView.vue";e.a=d.exports},"oj9+":function(t,e,a){"use strict";var i=a("gXW+");e.a={data:function(){return{chartColors:["#6CA2FF","#6AC9D7","#72DCA2","#48E78D","#FECD51","#DBB375","#FF7474","#F59561","#A3AEBC","#4C84FF","#0DBEB4","#00DEDE","#FFAA00","#C7C116","#F7A57C","#F661AC","#8652EE"]}},components:{filtrateHandleView:i.a},props:{},computed:{},watch:{},mounted:function(){},methods:{},deactivated:function(){}}},u7bZ:function(t,e,a){},uKQN:function(t,e,a){"use strict";var i=a("7Qib"),s={name:"TimeTypeSelect",props:{defaultType:Object},data:function(){return{selectType:{label:"本年",value:"year"},showTypePopover:!1,showCustomContent:!1,sureCustomContent:!1,startTime:"",endTime:"",typeOptions:[{label:"今天",value:"today"},{label:"昨天",value:"yesterday"},{label:"本周",value:"week"},{label:"上周",value:"lastWeek"},{label:"本月",value:"month"},{label:"上月",value:"lastMonth"},{label:"本季度",value:"quarter"},{label:"上季度",value:"lastQuarter"},{label:"本年",value:"year"},{label:"去年",value:"lastYear"}]}},computed:{iconClass:function(){return this.showTypePopover?"arrow-up":"arrow-down"},typeShowValue:function(){return this.sureCustomContent?this.startTime||this.endTime?(this.startTime||"")+"-"+(this.endTime||""):"":this.selectType.label}},mounted:function(){this.defaultType?this.selectType=this.defaultType:this.$emit("change",{type:"default",value:this.selectType.value})},methods:{typeSelectClick:function(t){this.showTypePopover=!1,this.sureCustomContent=!1,this.showCustomContent=!1,this.selectType=t,this.$emit("change",{type:"default",value:this.selectType.value})},customSureClick:function(){this.startTime&&this.endTime&&(this.sureCustomContent=!0,this.showTypePopover=!1,this.$emit("change",{type:"custom",startTime:Object(i.d)(this.startTime),endTime:Object(i.d)(this.endTime)}))}}},n=(a("ubXe"),a("KHd+")),o=Object(n.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-popover",{attrs:{placement:"bottom",width:"200","popper-class":"no-padding-popover",trigger:"click"},model:{value:t.showTypePopover,callback:function(e){t.showTypePopover=e},expression:"showTypePopover"}},[a("div",{staticClass:"type-popper"},[a("div",{staticClass:"type-content"},[t._l(t.typeOptions,function(e,i){return a("div",{key:i,staticClass:"type-content-item",class:{selected:t.selectType.value==e.value&&!t.showCustomContent},on:{click:function(a){t.typeSelectClick(e)}}},[a("div",{staticClass:"mark"}),t._v(t._s(e.label)+"\n      ")])}),t._v(" "),a("div",{staticClass:"type-content-item",class:{selected:t.showCustomContent},on:{click:function(e){t.showCustomContent=!0}}},[a("div",{staticClass:"mark"}),t._v("自定义\n      ")])],2),t._v(" "),t.showCustomContent?a("div",{staticClass:"type-content-custom"},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}}),t._v(" "),a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}}),t._v(" "),a("el-button",{on:{click:t.customSureClick}},[t._v("确定")])],1):t._e()]),t._v(" "),a("el-input",{staticClass:"type-select",attrs:{slot:"reference",readonly:!0,placeholder:"请选择选择"},slot:"reference",model:{value:t.typeShowValue,callback:function(e){t.typeShowValue=e},expression:"typeShowValue"}},[a("i",{class:["el-input__icon","el-icon-"+t.iconClass],attrs:{slot:"suffix"},slot:"suffix"})])],1)},[],!1,null,"7314d766",null);o.options.__file="index.vue";e.a=o.exports},ubXe:function(t,e,a){"use strict";var i=a("u7bZ");a.n(i).a},yRQT:function(t,e,a){"use strict";a.r(e);var i=a("NAyz"),s=a("MT78"),n=a.n(s),o=a("X8ug"),l={name:"RankingSigningStatistics",mixins:[i.a],data:function(){return{}},computed:{},mounted:function(){this.fieldList=[{field:"user_name",name:"签订人"},{field:"structure_name",name:"部门"},{field:"count",name:"签约合同数（个）"}],this.initAxis()},methods:{getDataList:function(t){var e=this;this.loading=!0,Object(o.i)(t).then(function(t){e.loading=!1,e.list=t.data||[];for(var a=[],i=[],s=t.data.length>10?10:t.data.length,n=0;n<s;n++){var o=t.data[n];a.splice(0,0,parseFloat(o.count)),i.splice(0,0,o.user_name)}e.axisOption.yAxis[0].data=i,e.axisOption.series[0].data=a,e.axisChart.setOption(e.axisOption,!0)}).catch(function(){e.loading=!1})},initAxis:function(){this.axisChart=n.a.init(document.getElementById("axismain")),this.axisOption.tooltip.formatter="{b} : {c}个",this.axisOption.xAxis[0].name="（个）",this.axisChart.setOption(this.axisOption,!0)}}},u=(a("SgPk"),a("KHd+")),r=Object(u.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"main-container"},[a("filtrate-handle-view",{staticClass:"filtrate-bar",attrs:{"show-user-select":!1,"module-type":"ranking"},on:{load:function(e){t.loading=!0},change:t.getDataList}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"content-title"},[t._v("签约合同数排行（按实际签订时间）")]),t._v(" "),a("div",{directives:[{name:"empty",rawName:"v-empty",value:0===t.list.length,expression:"list.length === 0"}],staticClass:"axis-content",attrs:{"xs-empty-text":"暂无排行"}},[a("div",{attrs:{id:"axismain"}})]),t._v(" "),a("div",{staticClass:"table-content"},[a("el-table",{attrs:{data:t.list,height:"400",stripe:"",border:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"公司总排名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.$index+1)+"\n          ")]}}])}),t._v(" "),t._l(t.fieldList,function(t,e){return a("el-table-column",{key:e,attrs:{prop:t.field,label:t.name,align:"center","header-align":"center","show-overflow-tooltip":""}})})],2)],1)])],1)},[],!1,null,"742a7335",null);r.options.__file="RankingSigningStatistics.vue";e.default=r.exports}}]);