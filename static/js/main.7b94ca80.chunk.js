(this["webpackJsonpflayvor-theme-builder"]=this["webpackJsonpflayvor-theme-builder"]||[]).push([[0],{15:function(e,t,a){e.exports=a(24)},20:function(e,t,a){},21:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(12),f=a.n(c),l=(a(20),a(8)),i=a(2),r=a(3),s=a(5),u=a(4),d=a(1),b=a(6),p=(a(21),function(e){return n.a.createElement("div",null,n.a.createElement("div",{id:"css"},n.a.createElement("style",{dangerouslySetInnerHTML:{__html:"flayvor-top-app-bar {\n            background: ".concat(e.bgColor,";\n            color: ").concat(e.fontColor,';\n            font-family:"').concat(e.font,'";\n        }')}})),n.a.createElement("div",{id:"markup",className:"apply-font"},!0===e.showMenuIcon?n.a.createElement("flayvor-top-app-bar",{title:e.title,position:"static",menuicon:e.menuIcon,type:e.layout},e.buttonsBuilt.length>0?e.buttonsBuilt.map((function(e,t){return n.a.createElement("button",{key:t,slot:"right","data-index":t,className:"material-icons mdc-icon-button mdc-top-app-bar__action-item"},e)})):n.a.createElement("div",null)):n.a.createElement("flayvor-top-app-bar",{title:e.title,position:"static",type:e.layout,hideMenu:!0},e.buttonsBuilt.length>0?e.buttonsBuilt.map((function(e,t){return n.a.createElement("button",{key:t,slot:"right","data-index":t,className:"material-icons mdc-icon-button mdc-top-app-bar__action-item"},e)})):n.a.createElement("div",null))))}),m=function(e){return n.a.createElement("div",{className:"selection"},n.a.createElement("span",null,"Options:"),n.a.createElement("nav",null,n.a.createElement("ul",null,e.options.map((function(t,a){return n.a.createElement("li",{key:a},n.a.createElement("button",{onClick:e.onClick,"data-text":t,id:t.replace(/\s/g,""),className:e.optionSelected===t?"active":""},t))})))))},h=function(e){return n.a.createElement("fieldset",null,n.a.createElement("div",{className:"control-group"},e.options.map((function(t,a){return n.a.createElement(o.Fragment,{key:a},n.a.createElement("label",{className:"control control-radio"},t,n.a.createElement("input",{onChange:e.onChange,id:t,type:"radio",name:"radio",checked:e.layout===t.toLowerCase()}),n.a.createElement("div",{className:"control_indicator"})))}))))},y=a(14),g=a(7),v=a(13),C=a.n(v),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a.colorArr=[],a}return Object(b.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=this;Object.keys(g).forEach((function(t){Object.keys(g[t]).forEach((function(a){var o={};o.hue=t,o.shade=a,o.hex=g[t][a],e.colorArr.push(o)}))}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"color-palatte"},this.colorArr.map((function(t){return"500"===t.shade?n.a.createElement("button",{key:C()(),className:"color",style:{backgroundColor:t.hex},onClick:e.props.setBgColor,"data-id":t.hex}):n.a.createElement(o.Fragment,null)})))}}]),t}(o.Component),k=function(e){return n.a.createElement("div",{className:"output"},n.a.createElement("span",null,"Layout"===e.optionSelected?"Select a layout":"Typography"===e.optionSelected?"Select a font family":"Color"===e.optionSelected?"Select your color scheme":"Menu icon"===e.optionSelected?"Change your menu icon":"Title"===e.optionSelected?"Change your title":"Add items"===e.optionSelected?"Add menu buttons":"Generate your HTML & CSS Code"),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"description"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan, neque id congue fermentum, sapien nisi vehicula neque, id pharetra orci erat quis velit.")),"Layout"===e.optionSelected?n.a.createElement(h,{layout:e.layout,onChange:e.setLayout,options:e.layoutOptions}):"Typography"===e.optionSelected?n.a.createElement(y.a,{activeFontFamily:e.font,onChange:e.setFont,apiKey:"AIzaSyAMJM5phI4GbCGR8Dcu8rIlxFxOermsVDM"}):"Color"===e.optionSelected?n.a.createElement(E,{setBgColor:e.setBgColor}):n.a.createElement(o.Fragment,null)))},O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={optionSelected:"Color"},a.selectOption=a.selectOption.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return this.props!==e||this.state!==t}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillReceiveProps",value:function(){}},{key:"selectOption",value:function(e){this.setState({optionSelected:e.nativeEvent.target.getAttribute("data-text")})}},{key:"render",value:function(){return n.a.createElement("div",{className:"selection-and-output"},n.a.createElement(m,{options:this.props.options,onClick:this.selectOption,optionSelected:this.state.optionSelected}),n.a.createElement(k,{optionSelected:this.state.optionSelected,layoutOptions:this.props.layoutOptions,setLayout:this.props.setLayout,layout:this.props.layout,setFont:this.props.setFont,font:this.props.font,setBgColor:this.props.setBgColor}))}}]),t}(o.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={colorType:"primary",menuIcon:"menu",primaryColorData:{},secondaryColorData:{},showMenuIcon:!0,input:"",buttonsBuilt:[],font:"Open Sans",layout:"standard",bgColor:""},a.config={options:["Layout","Typography","Color","Menu icon","Title","Add items","Generate code"],layout:["Standard","Dense","Prominent","Collapsed","Short","Fixed"]},a.setLayout=a.setLayout.bind(Object(d.a)(a)),a.setFont=a.setFont.bind(Object(d.a)(a)),a.setBgColor=a.setBgColor.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return this.props!==e||this.state!==t}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillReceiveProps",value:function(){}},{key:"setBgColor",value:function(e){this.setState({bgColor:e.target.getAttribute("data-id")})}},{key:"setLayout",value:function(e){this.setState({layout:e.target.id.toLocaleLowerCase()})}},{key:"setFont",value:function(e){this.setState({font:e.family})}},{key:"render",value:function(){var e;return n.a.createElement("div",{className:"theme-builder"},n.a.createElement("div",{className:"component-container"},n.a.createElement(p,(e={font:this.state.activeFontFamily,buttonsBuilt:this.state.buttonsBuilt,title:"App Bar",showMenuIcon:this.state.showMenuIcon,bgColor:this.state.primaryColorData.selectedHex,fontColor:this.state.secondaryColorData.selectedHex,menuIcon:this.state.menuIcon,layout:this.state.layout},Object(l.a)(e,"font",this.state.font),Object(l.a)(e,"bgColor",this.state.bgColor),e))),n.a.createElement(O,{options:this.config.options,layoutOptions:this.config.layout,setLayout:this.setLayout,layout:this.state.layout,setFont:this.setFont,font:this.state.font,setBgColor:this.setBgColor}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));f.a.render(n.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e){e.exports=JSON.parse('{"red":{"50":"#ffebee","100":"#ffcdd2","200":"#ef9a9a","300":"#e57373","400":"#ef5350","500":"#f44336","600":"#e53935","700":"#d32f2f","800":"#c62828","900":"#b71c1c","a100":"#ff8a80a1","a200":"#ff5252a2","a400":"#ff1744a4","a700":"#d50000a7"},"pink":{"50":"#fce4ec","100":"#f8bbd0","200":"#f48fb1","300":"#f06292","400":"#ec407a","500":"#e91e63","600":"#d81b60","700":"#c2185b","800":"#ad1457","900":"#880e4f","a100":"#ff80aba1","a200":"#ff4081a2","a400":"#f50057a4","a700":"#c51162a5"},"purple":{"50":"#f3e5f5","100":"#e1bee7","200":"#ce93d8","300":"#ba68c8","400":"#ab47bc","500":"#9c27b0","600":"#8e24aa","700":"#7b1fa2","800":"#6a1b9a","900":"#4a148c","a100":"#ea80fca1","a200":"#e040fba2","a400":"#d500f9a4","a700":"#aa00ffa7"},"deeppurple":{"50":"#ede7f6","100":"#d1c4e9","200":"#b39ddb","300":"#9575cd","400":"#7e57c2","500":"#673ab7","600":"#5e35b1","700":"#512da8","800":"#4527a0","900":"#311b92","a100":"#b388ffa1","a200":"#7c4dffa2","a400":"#651fffa4","a700":"#6200eaa7"},"indigo":{"50":"#e8eaf6","100":"#c5cae9","200":"#9fa8da","300":"#7986cb","400":"#5c6bc0","500":"#3f51b5","600":"#3949ab","700":"#303f9f","800":"#283593","900":"#1a237e","a100":"#8c9effa1","a200":"#536dfea2","a400":"#3d5afea4","a700":"#304ffea7"},"blue":{"50":"#e3f2fd","100":"#bbdefb","200":"#90caf9","300":"#64b5f6","400":"#42a5f5","500":"#2196f3","600":"#1e88e5","700":"#1976d2","800":"#1565c0","900":"#0d47a1","a100":"#82b1ffa1","a200":"#448affa2","a400":"#2979ffa4","a700":"#2962ffa7"},"lightblue":{"50":"#e1f5fe","100":"#b3e5fc","200":"#81d4fa","300":"#4fc3f7","400":"#29b6f6","500":"#03a9f4","600":"#039be5","700":"#0288d1","800":"#0277bd","900":"#01579b","a100":"#80d8ffa1","a200":"#40c4ffa2","a400":"#00b0ffa4","a700":"#0091eaa7"},"cyan":{"50":"#e0f7fa","100":"#b2ebf2","200":"#80deea","300":"#4dd0e1","400":"#26c6da","500":"#00bcd4","600":"#00acc1","700":"#0097a7","800":"#00838f","900":"#006064","a100":"#84ffffa1","a200":"#18ffffa2","a400":"#00e5ffa4","a700":"#00b8d4a7"},"teal":{"50":"#e0f2f1","100":"#b2dfdb","200":"#80cbc4","300":"#4db6ac","400":"#26a69a","500":"#009688","600":"#00897b","700":"#00796b","800":"#00695c","900":"#004d40","a100":"#a7ffeba1","a200":"#64ffdaa2","a400":"#1de9b6a4","a700":"#00bfa5a7"},"green":{"50":"#e8f5e9","100":"#c8e6c9","200":"#a5d6a7","300":"#81c784","400":"#66bb6a","500":"#4caf50","600":"#43a047","700":"#388e3c","800":"#2e7d32","900":"#1b5e20","a100":"#b9f6caa1","a200":"#69f0aea2","a400":"#00e676a4","a700":"#00c853a7"},"lightgreen":{"50":"#f1f8e9","100":"#dcedc8","200":"#c5e1a5","300":"#aed581","400":"#9ccc65","500":"#8bc34a","600":"#7cb342","700":"#689f38","800":"#558b2f","900":"#33691e","a100":"#ccff90a1","a200":"#b2ff59a2","a400":"#76ff03a4","a700":"#64dd17a7"},"lime":{"50":"#f9fbe7","100":"#f0f4c3","200":"#e6ee9c","300":"#dce775","400":"#d4e157","500":"#cddc39","600":"#c0ca33","700":"#afb42b","800":"#9e9d24","900":"#827717","a100":"#f4ff81a1","a200":"#eeff41a2","a400":"#c6ff00a4","a700":"#aeea00a7"},"yellow":{"50":"#fffde7","100":"#fff9c4","200":"#fff59d","300":"#fff176","400":"#ffee58","500":"#ffeb3b","600":"#fdd835","700":"#fbc02d","800":"#f9a825","900":"#f57f17","a100":"#ffff8da1","a200":"#ffff00a2","a400":"#ffea00a4","a700":"#ffd600a7"},"amber":{"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00","a100":"#ffe57fa1","a200":"#ffd740a2","a400":"#ffc400a4","a700":"#ffab00a7"},"orange":{"50":"#fff3e0","100":"#ffe0b2","200":"#ffcc80","300":"#ffb74d","400":"#ffa726","500":"#ff9800","600":"#fb8c00","700":"#f57c00","800":"#ef6c00","900":"#e65100","a100":"#ffd180a1","a200":"#ffab40a2","a400":"#ff9100a4","a700":"#ff6d00a7"},"deeporange":{"50":"#fbe9e7","100":"#ffccbc","200":"#ffab91","300":"#ff8a65","400":"#ff7043","500":"#ff5722","600":"#f4511e","700":"#e64a19","800":"#d84315","900":"#bf360c","a100":"#ff9e80a1","a200":"#ff6e40a2","a400":"#ff3d00a4","a700":"#dd2c00a7"},"brown":{"50":"#efebe9","100":"#d7ccc8","200":"#bcaaa4","300":"#a1887f","400":"#8d6e63","500":"#795548","600":"#6d4c41a1","700":"#5d4037a2","800":"#4e342ea4","900":"#3e2723a7"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575a1","700":"#616161a2","800":"#424242a4","900":"#212121a7"},"bluegrey":{"50":"#eceff1","100":"#cfd8dc","200":"#b0bec5","300":"#90a4ae","400":"#78909c","500":"#607d8b","600":"#546e7aa1","700":"#455a64a2","800":"#37474fa4","900":"#263238a7"},"black":{"500":"#000000"},"white":{"500":"#ffffff"}}')}},[[15,1,2]]]);
//# sourceMappingURL=main.7b94ca80.chunk.js.map