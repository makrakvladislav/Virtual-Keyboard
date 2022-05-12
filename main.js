(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var i=a.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=[{en:[{code:"Backquote",value:"`",shift:"~"},{code:"Digit1",value:"1",shift:"!"},{code:"Digit2",value:"2",shift:"@"},{code:"Digit3",value:"3",shift:"#"},{code:"Digit4",value:"4",shift:"$"},{code:"Digit5",value:"5",shift:"%"},{code:"Digit6",value:"6",shift:"^"},{code:"Digit7",value:"7",shift:"&"},{code:"Digit8",value:"8",shift:"*"},{code:"Digit9",value:"9",shift:"("},{code:"Digit0",value:"0",shift:")"},{code:"Minus",value:"-",shift:"_"},{code:"Equal",value:"=",shift:"+"},{code:"Backspace",value:"Backspace",shift:null},{code:"Tab",value:"Tab",shift:null},{code:"KeyQ",value:"q",shift:"Q"},{code:"KeyW",value:"w",shift:"W"},{code:"KeyE",value:"e",shift:"E"},{code:"KeyR",value:"r",shift:"R"},{code:"KeyT",value:"t",shift:"T"},{code:"KeyY",value:"y",shift:"Y"},{code:"KeyU",value:"u",shift:"U"},{code:"KeyI",value:"i",shift:"I"},{code:"KeyO",value:"o",shift:"O"},{code:"KeyP",value:"p",shift:"P"},{code:"BracketLeft",value:"[",shift:"{"},{code:"BracketRight",value:"]",shift:"}"},{code:"Backslash",value:"\\",shift:"|"},{code:"Delete",value:"Del",shift:null},{code:"CapsLock",value:"CapsLock",shift:null},{code:"KeyA",value:"a",shift:"A"},{code:"KeyS",value:"s",shift:"S"},{code:"KeyD",value:"d",shift:"D"},{code:"KeyF",value:"f",shift:"F"},{code:"KeyG",value:"g",shift:"G"},{code:"KeyH",value:"h",shift:"H"},{code:"KeyJ",value:"j",shift:"J"},{code:"KeyK",value:"k",shift:"K"},{code:"KeyL",value:"l",shift:"L"},{code:"Semicolon",value:";",shift:":"},{code:"Quote",value:"'",shift:'"'},{code:"Enter",value:"Enter",shift:null},{code:"ShiftLeft",value:"Shift",shift:null},{code:"KeyZ",value:"z",shift:"Z"},{code:"KeyX",value:"x",shift:"X"},{code:"KeyC",value:"c",shift:"C"},{code:"KeyV",value:"v",shift:"V"},{code:"KeyB",value:"b",shift:"B"},{code:"KeyN",value:"n",shift:"N"},{code:"KeyM",value:"m",shift:"M"},{code:"Comma",value:",",shift:"<"},{code:"Period",value:".",shift:">"},{code:"Slash",value:"/",shift:"?"},{code:"ShiftRight",value:"Shift",shift:null},{code:"ControlLeft",value:"Ctrl",shift:null},{code:"MetaLeft",value:"Win",shift:null},{code:"AltLeft",value:"Alt",shift:null},{code:"Space",value:" ",shift:null},{code:"AltRight",value:"Alt",shift:null},{code:"ControlRight",value:"Ctrl",shift:null},{code:"ArrowLeft",value:"⇦",shift:null},{code:"ArrowUp",value:"⇧",shift:null},{code:"ArrowDown",value:"⇩",shift:null},{code:"ArrowRight",value:"⇨",shift:null}],ru:[{code:"Backquote",value:"ё",shift:"Ё"},{code:"Digit1",value:"1",shift:"!"},{code:"Digit2",value:"2",shift:'"'},{code:"Digit3",value:"3",shift:"№"},{code:"Digit4",value:"4",shift:";"},{code:"Digit5",value:"5",shift:"%"},{code:"Digit6",value:"6",shift:":"},{code:"Digit7",value:"7",shift:"?"},{code:"Digit8",value:"8",shift:"*"},{code:"Digit9",value:"9",shift:"("},{code:"Digit0",value:"0",shift:")"},{code:"Minus",value:"-",shift:"_"},{code:"Equal",value:"=",shift:"+"},{code:"Backspace",value:"Backspace",shift:null},{code:"Tab",value:"Tab",shift:null},{code:"KeyQ",value:"й",shift:"Й"},{code:"KeyW",value:"ц",shift:"Ц"},{code:"KeyE",value:"у",shift:"У"},{code:"KeyR",value:"к",shift:"К"},{code:"KeyT",value:"е",shift:"Е"},{code:"KeyY",value:"н",shift:"Н"},{code:"KeyU",value:"г",shift:"Г"},{code:"KeyI",value:"ш",shift:"Ш"},{code:"KeyO",value:"щ",shift:"Щ"},{code:"KeyP",value:"з",shift:"З"},{code:"BracketLeft",value:"х",shift:"Х"},{code:"BracketRight",value:"ъ",shift:"Ъ"},{code:"Backslash",value:"\\",shift:"/"},{code:"Delete",value:"Del",shift:null},{code:"CapsLock",value:"CapsLock",shift:null},{code:"KeyA",value:"ф",shift:"Ф"},{code:"KeyS",value:"ы",shift:"Ы"},{code:"KeyD",value:"в",shift:"В"},{code:"KeyF",value:"а",shift:"А"},{code:"KeyG",value:"п",shift:"П"},{code:"KeyH",value:"р",shift:"Р"},{code:"KeyJ",value:"о",shift:"О"},{code:"KeyK",value:"л",shift:"Л"},{code:"KeyL",value:"д",shift:"Д"},{code:"Semicolon",value:"ж",shift:"Ж"},{code:"Quote",value:"э",shift:"Э"},{code:"Enter",value:"Enter",shift:null},{code:"ShiftLeft",value:"Shift",shift:null},{code:"KeyZ",value:"я",shift:"Я"},{code:"KeyX",value:"ч",shift:"Ч"},{code:"KeyC",value:"с",shift:"С"},{code:"KeyV",value:"м",shift:"М"},{code:"KeyB",value:"и",shift:"И"},{code:"KeyN",value:"т",shift:"Т"},{code:"KeyM",value:"ь",shift:"Ь"},{code:"Comma",value:"б",shift:"Б"},{code:"Period",value:"ю",shift:"Ю"},{code:"Slash",value:".",shift:","},{code:"ShiftRight",value:"Shift",shift:null},{code:"ControlLeft",value:"Ctrl",shift:null},{code:"MetaLeft",value:"Win",shift:null},{code:"AltLeft",value:"Alt",shift:null},{code:"Space",value:" ",shift:null},{code:"AltRight",value:"Alt",shift:null},{code:"ControlRight",value:"Ctrl",shift:null},{code:"ArrowLeft",value:"⇦",shift:null},{code:"ArrowUp",value:"⇧",shift:null},{code:"ArrowDown",value:"⇩",shift:null},{code:"ArrowRight",value:"⇨",shift:null}]}],a=function(e,t,a,i,l){if("key-button"===t){var o=document.createElement(e);o.classList.add(t);var s=document.createElement("span");s.classList.add("key-value"),s.innerHTML=a,o.append(s),o.value=i;var n=document.createElement("span");return n.classList.add("key-shift"),n.innerHTML=l,o.append(n),o}var u=document.createElement(e);return u.classList.add(t),u.innerHTML=a,u.value=i,u};function i(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const l=function(){function e(a,i,l){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.keyCode=a,this.lang=i,this.data=[],this.textArea=l,t[0][this.lang].forEach((function(){o.data=t[0][o.lang].find((function(e){return e.code===a}))}))}var l,o;return l=e,(o=[{key:"createKey",value:function(){return this.key=a("button","key-button",this.data.value,this.keyCode,""),this.key}},{key:"click",value:function(e){this.print(e)}},{key:"keyDown",value:function(e){var t=e.getModifierState&&e.getModifierState("CapsLock"),a=e.getModifierState&&e.getModifierState("Shift");this.print(e,t,a),this.key.classList.add("active"),"ShiftLeft"!==this.keyCode&&"ShiftRight"!==this.keyCode&&"ShiftLeft"!==e.target.value&&"ShiftRight"!==e.target.value||(this.shift=!0,this.keyboard.changeLanguage()),this.caps=t,this.keyboard.changeLanguage()}},{key:"keyUp",value:function(){this.key.classList.remove("active"),"ShiftLeft"!==this.keyCode&&"ShiftRight"!==this.keyCode&&"ShiftLeft"!==this.key.value&&"ShiftRight"!==this.key.value||(this.shift=!1,this.keyboard.changeLanguage())}},{key:"print",value:function(e,t,a){var i=this.textArea,l=i.value,o=i.selectionStart,s=i.selectionEnd;"Tab"===this.key.value?i.value+="    ":"Enter"===this.keyCode?i.value+="\n":"Backspace"===this.keyCode?(i.value=l.substring(0,o-1)+l.substring(s),i.setSelectionRange(o-1,o-1)):"Delete"===this.keyCode?(i.value=l.substring(0,o)+l.substring(o+1),i.setSelectionRange(o,o)):e.shiftKey||a||"ShiftLeft"===this.key.value||"ShifRight"===this.key.value?null!==this.data.shift&&(i.value+=this.data.shift):"AltLeft"===this.keyCode||"ControlLeft"===this.keyCode||"ControlRight"===this.keyCode||"AltRight"===this.keyCode||"MetaLeft"===this.keyCode?i.textContent+="":"CapsLock"===this.key.value?i.value+="":i.value+=t?this.data.value.toUpperCase():this.data.value}},{key:"changeLanguage",value:function(){var e=this,a=this.keyboard,i=a.lang,l=a.shift,o=a.caps;t[0][i].forEach((function(){e.data=t[0][i].find((function(t){return t.code===e.keyCode}))})),o&&null!==this.data.shift?this.key.innerHTML='<span class="key-value">'.concat(this.data.value.toUpperCase(),"</span>"):l&&null!==this.data.shift?this.key.innerHTML='<span class="key-value">'.concat(this.data.shift,"</span>"):l||(this.key.innerHTML='<span class="key-value">'.concat(this.data.value,"</span>")),o&&l&&null!==this.data.shift&&(this.key.innerHTML='<span class="key-value">'.concat(this.data.shift,"</span>")),localStorage.setItem("language",i)}}])&&i(l.prototype,o),Object.defineProperty(l,"prototype",{writable:!1}),e}();function o(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const s=function(){function e(t,a,i,l,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.lang=t,this.textArea=a,this.shift=i,this.shiftValue=l,this.caps=o}var t,i;return t=e,(i=[{key:"generateKeyboard",value:function(){var e=this;this.template=[["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"],["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete"],["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"],["ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight"],["ControlLeft","MetaLeft","AltLeft","Space","AltRight","ControlRight","ArrowLeft","ArrowDown","ArrowRight"]];var t=document.body,i=a("div","container","","");t.append(i);var o=a("div","keyboard-wrapper","",""),s=a("textarea","keyboard__input","","");i.append(s),i.append(o),this.keys={},this.template.forEach((function(t){var a=document.createElement("div");a.classList.add("keyboard__row"),t.forEach((function(t){var i=new l(t,e.lang,s);return e.keys[t]=i,i.keyboard=e,a.append(i.createKey()),i})),o.append(a)})),o.addEventListener("mousedown",(function(t){return e.eventHandler(t)})),o.addEventListener("mouseup",(function(t){return e.eventHandler(t)})),document.addEventListener("keydown",(function(t){return e.eventHandler(t)})),document.addEventListener("keyup",(function(t){return e.eventHandler(t)}))}},{key:"eventHandler",value:function(e){e.preventDefault(),e.stopPropagation();var t=localStorage.getItem("language"),a=this.keys,i=e.code;if("mousedown"===e.type){if(!e.target.closest(".key-button"))return;this.lang=t;var l=e.target.closest(".key-button").value;"ShiftLeft"!==l&&"ShiftRight"!==l||(this.shift=!0,this.shiftValue=a[e.target.value].data.shift,a[l].keyDown(e)),a[l].click(e)}if("mouseup"===e.type){if(!e.target.closest(".key-button"))return;var o=e.target.closest(".key-button").value;a[o].keyUp(e),"ShiftLeft"!==e.target.value&&"ShiftRight"!==e.target.value||(this.shift=!1),a[o].keyUp(e)}if("keydown"===e.type){if(this.lang=t,"ShiftLeft"!==i&&"ShiftRight"!==i||(this.shift=!0,this.shiftValue=a[i].data.shift,a[i].keyDown(e)),"CapsLock"===i){var s=e.getModifierState&&e.getModifierState("CapsLock");this.caps=s,a[i].keyDown(e)}a[i]&&a[i].keyDown(e)}if("keyup"===e.type&&a[i]){if(a[i].keyUp(e),"ShiftLeft"===i||"ShiftRight"===i||"CapsLock"===i){var n=e.getModifierState&&e.getModifierState("CapsLock");this.shift=!1,this.caps=n}a[i].keyUp(e)}e.ctrlKey&&e.altKey&&(t="ru"===t?"en":"ru",this.lang=t,this.changeLanguage())}},{key:"changeLanguage",value:function(){var e=this;Object.keys(this.keys).forEach((function(t){e.keys[t].changeLanguage()}))}}])&&o(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();window.onload=function(){var e="en";localStorage.getItem("language")?e=localStorage.getItem("language"):localStorage.setItem("language","en");var t=document.body,i=a("header","header","",""),l=a("h1","header-title","RSS Virtual Keyboard",""),o=a("h3","header-subtitle","Клавиатура создана в операционной системе Windows </br>","");t.append(i),i.append(l),i.append(o),o.innerHTML+="Для переключения языка комбинация: левыe ctrl + alt",new s(e).generateKeyboard()},e.p})();
//# sourceMappingURL=main.js.map