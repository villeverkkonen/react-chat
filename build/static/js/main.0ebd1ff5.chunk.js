(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(41)},41:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(11),r=a.n(c),i=a(13),m=a(14),u=a(17),o=a(15),l=a(18),p=function(e){var t=e.messages;return s.a.createElement("div",{className:"message-list",id:"message-list"},t.map(function(e){return s.a.createElement("div",{className:"message-item",key:e.timestamp},s.a.createElement("h3",null,"From: ",e.user),s.a.createElement("p",null,e.message))}))},d=function(e){var t=e.nickname,a=e.message,n=e.sendMessage,c=e.updateMessage,r=e.updateNickname;function i(){n(a)}return s.a.createElement("div",{className:"chat-form"},s.a.createElement("input",{id:"nickname-input",value:t,onChange:r}),s.a.createElement("br",null),s.a.createElement("input",{id:"chat-input",value:a,onChange:c,onKeyPress:function(e){"Enter"===e.key&&i()},className:"chat-input",placeholder:"Type a message..."}),s.a.createElement("button",{onClick:i,id:"send-message-btn"},"Send"))},g="SEND_MESSAGE";var h=a(16),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={message:"",nickname:""},a.updateNickname=function(e){a.setState({nickname:e.currentTarget.value})},a.updateMessage=function(e){a.setState({message:e.currentTarget.value})},a.sendMessage=function(e){a.props.sendMessage({user:a.state.nickname,message:e,timestamp:(new Date).getTime()}),a.setState({message:""})},a}return Object(l.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.sendMessage({user:"Chat Bot",message:"Hello!",timestamp:(new Date).getTime()});var e="Guest"+Math.floor(1001*Math.random());this.setState({nickname:e})}},{key:"render",value:function(){return s.a.createElement("div",{className:"parent"},s.a.createElement(p,{messages:this.props.chat.messages}),s.a.createElement(d,{nickname:this.state.nickname,message:this.state.message,sendMessage:this.sendMessage,updateMessage:this.updateMessage,updateNickname:this.updateNickname}))}}]),t}(s.a.Component),v=Object(h.b)(function(e){return{chat:e.chat}},{sendMessage:function(e){return{type:g,payload:e}}})(f),E=function(){return s.a.createElement("h1",null,"Not found")},b=a(26),k=a(8),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement(b.a,null,s.a.createElement("div",null,s.a.createElement(k.c,null,s.a.createElement(k.a,{exact:!0,path:"/",component:v}),s.a.createElement(k.a,{component:E}))))}}]),t}(s.a.Component),M=a(9),j=a(28),O=a(29),w=a(30),N={messages:[]};var S=Object(M.combineReducers)({chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{messages:[].concat(Object(w.a)(e.messages),[t.payload])};default:return e}}});var C=function(){var e=[j.a],t=M.applyMiddleware.apply(void 0,e);return Object(M.createStore)(S,Object(O.composeWithDevTools)(t))}();r.a.render(s.a.createElement(h.a,{store:C},s.a.createElement(y,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.0ebd1ff5.chunk.js.map