(function(t){function e(e){for(var n,r,o=e[0],u=e[1],l=e[2],m=0,h=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(h.length)h.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,o=1;o<s.length;o++){var u=s[o];0!==i[u]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},i={app:0},a=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},1:function(t,e){},"1e3e":function(t,e,s){},"4e2d":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.visible?t._e():s("div",{staticClass:"reg"},[s("div",{staticClass:"line"},[s("label",{attrs:{for:"text-name"}},[t._v("Никнейм")]),s("b-form-input",{attrs:{id:"text-name",placeholder:"Enter your name"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),s("div",{staticClass:"line"},[s("label",{attrs:{for:"text-password"}},[t._v("Пароль")]),s("b-form-input",{attrs:{type:"password",id:"text-password","aria-describedby":"password-help-block"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("b-form-text",{attrs:{id:"password-help-block"}})],1),s("div",{staticClass:"buttonwrap"},[s("b-button",{attrs:{variant:"success"},on:{click:t.login}},[t._v("Вход")]),s("b-button",{attrs:{variant:"success"},on:{click:t.reg}},[t._v("Регистрация")])],1)]),s("router-view")],1)},a=[],r=(s("f9e3"),s("2dd8"),{data:function(){return{username:"",visible:!1,userId:"",messages:[],users:[],textMessage:"",lobbies:"",myLobby:"",password:""}},sockets:{},methods:{login:function(){var t=this;this.$socket.emit("login",{username:this.username,password:this.password},(function(e){"string"===typeof e?alert(e):(t.visible=!t.visible,t.$router.push("/chatgame"))}))},reg:function(){this.$socket.emit("registration",{username:this.username,password:this.password},(function(t){"string"===typeof t&&alert(t)}))}}}),o=r,u=(s("034f"),s("2877")),l=Object(u["a"])(o,i,a,!1,null,null,null),c=l.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"maincontainer"},[s("game"),s("chat")],1)},h=[],d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gamewrap"},[s("div",{staticClass:"boardwrap"},[s("p",{staticClass:"username"},[t._v(t._s(t.username))]),s("div",{staticClass:"board"},t._l(9,(function(e,n){return s("div",{key:n,class:t.myClass,attrs:{id:n},on:{click:t.PlayerTurn}})})),0)]),s("div",{staticClass:"statswrap"},[s("b-list-group",[s("b-list-group-item",[t._v("Матчей:"+t._s(t.games))]),s("b-list-group-item",[t._v("Побед:"+t._s(t.win))]),s("b-list-group-item",[t._v("Ничьих:"+t._s(t.draws))])],1)],1),s("div",{staticClass:"middlewrap"},[t.createVisible?s("b-button",{attrs:{variant:"warning"},on:{click:t.createLobby}},[t._v("Найти оппонента")]):t._e(),t.createVisible||t.ingame?t._e():s("b-button",{attrs:{variant:"warning"},on:{click:t.deleteLobby}},[t._v("Отменить поиск")]),t.youWin||t.youLose||t.Draw?s("b-button",{attrs:{variant:"warning"},on:{click:t.startOver}},[t._v("Выйти из поединка")]):t._e(),t.ingame?s("figure",[s("figcaption",[t._v(" Вы играете за ")]),s("p",[s("img",{attrs:{src:t.url,alt:"img.descr"}})])]):t._e(),t.ingame?s("p",[t._v(t._s(t.turnText))]):t._e()],1),s("div",{staticClass:"rightwrap"},[s("p",{staticClass:"listname"},[t._v("Cписок лобби:")]),s("b-list-group",t._l(t.lobbies,(function(e,n){return s("b-list-group-item",{key:n},[s("span",[t._v(t._s(e.username)+" VS "+t._s(e.username2))]),e.username2?t._e():s("b-button",{attrs:{variant:"success"},on:{click:function(s){return t.joinLobby(e.username)}}},[t._v("Присоединиться")])],1)})),1)],1)])},f=[],g={data:function(){return{createVisible:!0,ingame:!1,myClass:"td",myTurn:"",myUnit:"",username:"",userId:"",lobbies:"",myLobby:"",youWin:!1,youLose:!1,Draw:!1,games:"",win:"",draws:""}},sockets:{youWin:function(){this.youWin=!0,console.log("youWin"),this.games++,this.win++},youLose:function(){this.youLose=!0,console.log("youLose"),this.games++},Draw:function(){this.Draw=!0,console.log("youLose"),this.games++,this.draws++},getLobbies:function(t){this.lobbies=t},loggedIn:function(t){this.username=t.username,this.games=t.games,this.win=t.win,this.draws=t.draws,this.userId=t.id},PlayerTurn:function(t){this.myTurn=!this.myTurn,document.getElementById(t.path).className=t.unit},setOponent:function(t){t.unit?this.myUnit="zero":this.myUnit="krest",t.turn?this.myTurn=1:this.myTurn=0,this.myLobby=t.lobbyname},gameStart:function(){this.ingame=!0}},methods:{PlayerTurn:function(t){if(1==this.myTurn){if(console.log("мой ход"),"td"==t.target.className){t.target.className=this.myUnit;var e=document.querySelectorAll(".td").length;this.$socket.emit("PlayerTurn",{path:t.target.id,unit:this.myUnit,lobbyName:this.myLobby,drawTrigger:e}),this.myTurn=!this.myTurn,console.log(t.target)}}else console.log("не мой ход")},createLobby:function(){var t=this;this.$socket.emit("createLobby",this.username,(function(e){t.myLobby=e.lobby,e.unit?t.myUnit="zero":t.myUnit="krest",e.turn?t.myTurn=1:t.myTurn=0,console.log(t.myUnit,t.myTurn),t.createVisible=!1}))},joinLobby:function(t){t!=this.username&&(this.ingame||(this.createVisible=!1,this.$socket.emit("joinLobby",{username:t,username2:this.username})))},deleteLobby:function(){this.$socket.emit("deleteLobby",this.username),this.myLobby="",this.createVisible=!0},startOver:function(){for(var t=document.querySelectorAll(".board div"),e=0;e<t.length;e++)t[e].className="td";this.createVisible=!0,this.ingame=!1,this.myTurn="",this.myUnit="",this.myLobby="",this.youWin=!1,this.youLose=!1,this.Draw=!1}},computed:{url:function(){return"zero"==this.myUnit?"img/zero.png":"img/krest.png"},turnText:function(){return this.youLose||this.youWin?this.youLose?"Вы проиграли :(":"Вы выиграли!!":this.Draw?"Победила дружба!Ничья!":this.ingame?0==this.myTurn?"Ожидаем хода Вашего соперника":"Ваш ход":"Ищем оппонента..."}}},b=g,p=(s("68e4"),Object(u["a"])(b,d,f,!1,null,null,null)),y=p.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mainwrap"},[s("div",{staticClass:"chatwrap"},[s("div",{staticClass:"textarea"},[s("b-list-group",t._l(t.messages,(function(e,n){return s("b-list-group-item",{key:n,attrs:{variant:t.getvariant(e.username)}},[t._v(t._s(e.time)+"|"),s("span",{staticStyle:{"font-weight":"900"}},[t._v(t._s(e.username))]),t._v(": "+t._s(e.text))])})),1)],1),s("div",{staticClass:"input"},[s("b-form-input",{class:t.getInputClass,attrs:{type:"text",id:"myInput",autofocus:"",value:t.value},model:{value:t.textMessage,callback:function(e){t.textMessage=e},expression:"textMessage"}}),s("b-button",{attrs:{variant:"dark",id:"myBtn"},on:{click:t.sendMessage}},[t._v("Отправить")])],1)]),s("div",{staticClass:"usersList"},[s("p",{staticClass:"listname"},[t._v("Список игроков:")]),s("b-list-group",t._l(t.users,(function(e,n){return s("b-list-group-item",{key:n},[t._v(t._s(e.username))])})),1)],1)])},w=[],_={data:function(){return{username:"",visible:!1,userId:"",messages:[],users:[],textMessage:"",ingame:""}},sockets:{loggedIn:function(t){this.username=t.username,this.userId=t.id},newMessage:function(t){this.messages.push(t),console.log(this.messages)},getUsers:function(t){this.users=t},gameStart:function(){this.ingame=!0,this.textMessage=this.value},youWin:function(){this.ingame=!1,this.textMessage=this.value},youLose:function(){this.ingame=!1,this.textMessage=this.value},Draw:function(){this.ingame=!1,this.textMessage=this.value}},methods:{sendMessage:function(){this.$socket.emit("sendMessage",{username:this.username,textMessage:this.textMessage}),this.textMessage=this.value},getvariant:function(t){return"admin"==t?"warning":t==this.username?"info":"light"}},computed:{value:function(){return this.ingame?"/":""},getInputClass:function(){return{toAllBG:!this.ingame&&this.textMessage.length<1,fightInputBG:this.ingame&&this.textMessage.length<2}}},updated:function(){this.$nextTick((function(){var t=document.querySelector(".textarea");t.scrollTop=t.scrollHeight}))},mounted:function(){var t=document.getElementById("myInput");t.addEventListener("keyup",(function(t){13===t.keyCode&&(t.preventDefault(),document.getElementById("myBtn").click())}))}},k=_,x=(s("f196"),Object(u["a"])(k,v,w,!1,null,null,null)),L=x.exports,C={data:function(){return{}},components:{game:y,chat:L}},T=C,M=(s("76f7"),Object(u["a"])(T,m,h,!1,null,null,null)),O=M.exports,j=s("5132"),I=s.n(j),$=s("8055"),S=s.n($),P=s("8c4f"),U=s("5f5b"),E=s("b1e0");n["default"].use(U["a"]),n["default"].use(E["a"]),n["default"].config.devtools=!0,n["default"].use(P["a"]);var D=[{path:"/chatgame",component:O}],V=new P["a"]({routes:D,mode:"history"});n["default"].use(new I.a({debug:!0,connection:S()("http://localhost:8080",{transport:["polling","websocket"]})})),new n["default"]({router:V,render:function(t){return t(c)}}).$mount("#app")},"68e4":function(t,e,s){"use strict";s("4e2d")},"76f7":function(t,e,s){"use strict";s("9681")},"85ec":function(t,e,s){},9681:function(t,e,s){},f196:function(t,e,s){"use strict";s("1e3e")}});
//# sourceMappingURL=app.32298d33.js.map