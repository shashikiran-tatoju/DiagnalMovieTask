(this.webpackJsonpdiagnal=this.webpackJsonpdiagnal||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n(0),r=n.n(i),a=n(7),s=n.n(a),p=n(4),g=n(3),m=n(2),c={page:{title:"Romantic Comedy","total-content-items":"54","page-num-requested":"1","page-size-requested":"20","page-size-returned":"20","content-items":{content:[{name:"The Birds","poster-image":"poster1.jpg"},{name:"Rear Window","poster-image":"poster2.jpg"},{name:"Family Pot","poster-image":"poster3.jpg"},{name:"Family Pot","poster-image":"poster2.jpg"},{name:"Rear Window","poster-image":"poster1.jpg"},{name:"The Birds","poster-image":"poster3.jpg"},{name:"Rear Window","poster-image":"poster3.jpg"},{name:"The Birds","poster-image":"poster2.jpg"},{name:"Family Pot","poster-image":"poster1.jpg"},{name:"The Birds","poster-image":"poster1.jpg"},{name:"The Birds","poster-image":"poster1.jpg"},{name:"Rear Window","poster-image":"poster2.jpg"},{name:"Family Pot","poster-image":"poster3.jpg"},{name:"Family Pot","poster-image":"poster2.jpg"},{name:"Rear Window","poster-image":"poster1.jpg"},{name:"The Birds","poster-image":"poster3.jpg"},{name:"Rear Window","poster-image":"poster3.jpg"},{name:"The Birds","poster-image":"poster2.jpg"},{name:"Family Pot","poster-image":"poster1.jpg"},{name:"The Birds","poster-image":"poster1.jpg"}]}}},d={title:"Romantic Comedy","total-content-items":"54","page-num-requested":"2","page-size-requested":"20","page-size-returned":"20","content-items":{content:[{name:"Rear Window","poster-image":"poster5.jpg"},{name:"Family Pot","poster-image":"poster6.jpg"},{name:"Family Pot","poster-image":"poster5.jpg"},{name:"Rear Window","poster-image":"poster4.jpg"},{name:"The Birds","poster-image":"poster6.jpg"},{name:"Rear Window","poster-image":"poster6.jpg"},{name:"The Birds","poster-image":"poster5.jpg"},{name:"Family Pot","poster-image":"poster4.jpg"},{name:"The Birds","poster-image":"poster4.jpg"},{name:"Rear Window","poster-image":"poster5.jpg"},{name:"Rear Window","poster-image":"poster5.jpg"},{name:"Family Pot","poster-image":"poster6.jpg"},{name:"Family Pot","poster-image":"poster5.jpg"},{name:"Rear Window","poster-image":"poster4.jpg"},{name:"The Birds","poster-image":"poster6.jpg"},{name:"Rear Window","poster-image":"poster6.jpg"},{name:"The Birds","poster-image":"poster5.jpg"},{name:"Family Pot","poster-image":"poster4.jpg"},{name:"The Birds","poster-image":"poster4.jpg"},{name:"Rear Window","poster-image":"poster5.jpg"}]}},l={title:"Romantic Comedy","total-content-items":"54","page-num-requested":"3","page-size-requested":"20","page-size-returned":"14","content-items":{content:[{name:"Family Pot","poster-image":"poster9.jpg"},{name:"Family Pot","poster-image":"poster8.jpg"},{name:"Rear Window","poster-image":"poster7.jpg"},{name:"The Birds","poster-image":"poster9.jpg"},{name:"Rear Window","poster-image":"poster9.jpg"},{name:"The Birds","poster-image":"poster8.jpg"},{name:"Family Pot","poster-image":"poster7.jpg"},{name:"Family Pot","poster-image":"poster9.jpg"},{name:"Family Pot","poster-image":"poster8.jpg"},{name:"Rear Window","poster-image":"poster7.jpg"},{name:"The Birds with an Extra Long Title","poster-image":"poster9.jpg"},{name:"Rear Window","poster-image":"poster9.jpg"},{name:"The Birds","poster-image":"poster8.jpg"},{name:"Family Pot","poster-image":"posterthatismissing.jpg"}]}},h=[].concat(Object(m.a)(c.page["content-items"].content),Object(m.a)(d["content-items"].content),Object(m.a)(l["content-items"].content)),u={search:"",data:c.page["content-items"].content},j=Object(g.b)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"READ":if(1==t.payload){var n=e.search,o=(e.data,c.page["content-items"].content);return null!=n&&n.length>0&&(o=o.filter((function(e,t){return-1!=e.name.toLowerCase().indexOf(n.toLowerCase())}))),{search:n,data:o}}if(2==t.payload){var i=e.search,r=(e.data,[].concat(Object(m.a)(c.page["content-items"].content),Object(m.a)(d["content-items"].content)));return null!=i&&i.length>0&&(r=r.filter((function(e,t){return-1!=e.name.toLowerCase().indexOf(i.toLowerCase())}))),{search:i,data:r}}var a=e.search,s=(e.data,[].concat(Object(m.a)(c.page["content-items"].content),Object(m.a)(d["content-items"].content),Object(m.a)(l["content-items"].content)));return null!=a&&a.length>0&&(s=s.filter((function(e,t){return-1!=e.name.toLowerCase().indexOf(a.toLowerCase())}))),{search:a,data:s};case"SEARCH":var p=t.payload,g=h;return null!=p&&p.length>0&&(g=g.filter((function(e,t){return-1!=e.name.toLowerCase().indexOf(p.toLowerCase())}))),{search:p,data:g};default:return console.log("I ma in default"),u}}}),w=Object(g.c)(j),f=(n(44),n(9));n(45);var T=Object(p.b)(null,(function(e){return{searchMovies:function(t){return e({type:"SEARCH",payload:t})}}}))((function(e){e.dimensions[0];var t=e.dimensions[1]/7,n=t/3.5,r=n/2,a={height:t,backgroundColor:"transparent",zIndex:1,position:"absolute"},s={flexDirection:"row",display:"flex",position:"absolute",top:-10,left:0,right:0,height:t,alignItems:"center",backgroundColor:"transparent"},p={flexGrow:1,height:n,marginLeft:r,marginRight:r},g={color:"white",flexGrow:1,marginLeft:r,fontFamily:"Titillium Web",fontWeight:"bold",fontSize:t/4},m={marginRight:r},c={marginLeft:r},d=Object(i.useState)(!1),l=Object(f.a)(d,2),h=l[0],u=l[1];return Object(o.jsxs)("div",{style:a,children:[Object(o.jsx)("img",{width:window.innerWidth,height:t,src:"/DiagnalMovieTask/assets/nav_bar.png",alt:"image missing"}),Object(o.jsxs)("div",{style:s,children:[Object(o.jsx)("img",{onClick:function(){u(!1),e.searchMovies(null)},style:c,width:n,height:n,src:"/DiagnalMovieTask/assets/Back.png",alt:"image missing"}),h?Object(o.jsx)("input",{style:p,placeholder:"Search movie here...",onChange:function(t){console.log(t.target.value),e.searchMovies(t.target.value)}}):Object(o.jsx)("p",{style:g,children:"Romantic Comedy"}),Object(o.jsx)("img",{onClick:function(){u((function(e){return!e}))},style:m,width:n,height:n,src:"/DiagnalMovieTask/assets/search.png",alt:"image missing"})]})]})})),v=n(30),y=n(31),b=n(33),R=n(32),E=n(10),I={showsVerticalScrollIndicator:!1},H=function(e){Object(b.a)(n,e);var t=Object(R.a)(n);function n(e){var i;return Object(v.a)(this,n),(i=t.call(this,e)).init=function(){i.WIDTH=i.props.dimensions[0],i.HEIGHT=i.props.dimensions[1],i.HEADER_HEIGHT=i.HEIGHT/7,i.TEXT_SIZE=i.HEADER_HEIGHT/5.5,i.CARD_WIDTH=i.WIDTH/3.1,i.CARD_HEIGHT=3.5*i.CARD_WIDTH/2+i.TEXT_SIZE,i.PADDINGLEFT=.016*i.WIDTH,i.IMAGE_WIDTH=i.CARD_WIDTH-12,i.IMAGE_HEIGHT=3*i.IMAGE_WIDTH/2,i.BACK_AND_SEARCH_SIZE=i.HEADER_HEIGHT/3,i.MARGIN_LEFT=i.BACK_AND_SEARCH_SIZE/2,i.MARGIN_RIGHT=i.MARGIN_LEFT,i.rowRendererDivStyle={flexDirection:"column",display:"flex",alignItems:"center"},i.rowRendererTextStyle={width:i.IMAGE_WIDTH,margin:0,fontFamily:"Titillium Web",fontSize:i.TEXT_SIZE,color:"white",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},i.listViewDivStyle={height:i.HEIGHT,width:i.WIDTH,paddingLeft:i.PADDINGLEFT,backgroundColor:"transparent",paddingTop:i.HEADER_HEIGHT/1.6}},i.onImageError=function(e){e.target.onError=null,e.target.src="/DiagnalMovieTask/assets/placeholder_for_missing_posters.png"},i.rowRenderer=function(e,t){switch(e){case 0:return Object(o.jsxs)("div",{style:i.rowRendererDivStyle,children:[Object(o.jsx)("img",{width:i.IMAGE_WIDTH,src:"/DiagnalMovieTask/assets/"+t["poster-image"],onError:i.onImageError,alt:"Image is missing"}),Object(o.jsx)("p",{style:i.rowRendererTextStyle,children:t.name})]});default:return null}},i.onEndReached=function(){console.log("pagenum",i.pagenum),i.pagenum=i.pagenum+1,i.pagenum>=3&&(i.pagenum=3),i.props.readMovies(i.pagenum)},i.dataProvider=new E.DataProvider((function(e,t){return e!==t})),i.pagenum=1,i._layoutProvider=new E.LayoutProvider((function(e){return 0}),(function(e,t){switch(e){case 0:t.width=i.CARD_WIDTH,t.height=i.CARD_HEIGHT;break;default:t.width=0,t.height=0}})),i.init(),i}return Object(y.a)(n,[{key:"componentWillUpdate",value:function(){this.init()}},{key:"render",value:function(){return console.log("render"),Object(o.jsx)("div",{style:this.listViewDivStyle,children:Object(o.jsx)(E.RecyclerListView,{layoutProvider:this._layoutProvider,dataProvider:this.dataProvider.cloneWithRows(this.props.movies.data),rowRenderer:this.rowRenderer,scrollViewProps:I,onEndReached:this.onEndReached,onEndReachedThreshold:.7})})}}]),n}(r.a.Component),O=Object(p.b)((function(e){return console.log("hello redux",e),{movies:e.movies}}),(function(e){return{readMovies:function(t){return e({type:"READ",payload:t})}}}))(H),D=window.innerWidth,W={backgroundColor:"black",flex:1,height:window.innerHeight,width:D,overflow:"hidden"};var x=function(){var e=Object(i.useState)([window.innerWidth,window.innerHeight]),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(i.useLayoutEffect)((function(){var e=function(){r([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(o.jsxs)("div",{style:W,children:[Object(o.jsx)(T,{dimensions:n}),Object(o.jsx)(O,{dimensions:n})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),r(e),a(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(p.a,{store:w,children:Object(o.jsx)(x,{})})}),document.getElementById("root")),C()}},[[68,1,2]]]);
//# sourceMappingURL=main.93b830b1.chunk.js.map