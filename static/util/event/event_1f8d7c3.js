define("modules/util/event/event.es",function(e,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=e("components/zepto/main"),u=t(o),a=function(){function e(){r(this,e),this.eventMonitor=u["default"]({})}return i(e,[{key:"addListener",value:function(e,n){return this.eventMonitor.on(e,n),this}},{key:"removeListener",value:function(e){return this.eventMonitor.off(e),this}},{key:"emit",value:function(e){for(var n,t=arguments.length,r=Array(t>1?t-1:0),i=1;t>i;i++)r[i-1]=arguments[i];return(n=this.eventMonitor).trigger.apply(n,[e].concat(r)),this}},{key:"on",value:function(){return this.addListener.apply(this,arguments)}},{key:"off",value:function(){return this.removeListener.apply(this,arguments)}},{key:"once",value:function(e,n){return this.eventMonitor.once(e,n),this}}]),e}(),s=new a;n.EventEmitter=a,n.event=s});