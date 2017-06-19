!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=31)}([function(module,exports,__webpack_require__){"use strict";function isArray(val){return"[object Array]"===toString.call(val)}function isArrayBuffer(val){return"[object ArrayBuffer]"===toString.call(val)}function isFormData(val){return"undefined"!=typeof FormData&&val instanceof FormData}function isArrayBufferView(val){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(val):val&&val.buffer&&val.buffer instanceof ArrayBuffer}function isString(val){return"string"==typeof val}function isNumber(val){return"number"==typeof val}function isUndefined(val){return void 0===val}function isObject(val){return null!==val&&"object"==typeof val}function isDate(val){return"[object Date]"===toString.call(val)}function isFile(val){return"[object File]"===toString.call(val)}function isBlob(val){return"[object Blob]"===toString.call(val)}function isFunction(val){return"[object Function]"===toString.call(val)}function isStream(val){return isObject(val)&&isFunction(val.pipe)}function isURLSearchParams(val){return"undefined"!=typeof URLSearchParams&&val instanceof URLSearchParams}function trim(str){return str.replace(/^\s*/,"").replace(/\s*$/,"")}function isStandardBrowserEnv(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function forEach(obj,fn){if(null!==obj&&void 0!==obj)if("object"==typeof obj||isArray(obj)||(obj=[obj]),isArray(obj))for(var i=0,l=obj.length;i<l;i++)fn.call(null,obj[i],i,obj);else for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&fn.call(null,obj[key],key,obj)}function merge(){function assignValue(val,key){"object"==typeof result[key]&&"object"==typeof val?result[key]=merge(result[key],val):result[key]=val}for(var result={},i=0,l=arguments.length;i<l;i++)forEach(arguments[i],assignValue);return result}function extend(a,b,thisArg){return forEach(b,function(val,key){a[key]=thisArg&&"function"==typeof val?bind(val,thisArg):val}),a}var bind=__webpack_require__(9),isBuffer=__webpack_require__(35),toString=Object.prototype.toString;module.exports={isArray:isArray,isArrayBuffer:isArrayBuffer,isBuffer:isBuffer,isFormData:isFormData,isArrayBufferView:isArrayBufferView,isString:isString,isNumber:isNumber,isObject:isObject,isUndefined:isUndefined,isDate:isDate,isFile:isFile,isBlob:isBlob,isFunction:isFunction,isStream:isStream,isURLSearchParams:isURLSearchParams,isStandardBrowserEnv:isStandardBrowserEnv,forEach:forEach,merge:merge,extend:extend,trim:trim}},function(module,exports){function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(fun){if(cachedSetTimeout===setTimeout)return setTimeout(fun,0);if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout)return cachedSetTimeout=setTimeout,setTimeout(fun,0);try{return cachedSetTimeout(fun,0)}catch(e){try{return cachedSetTimeout.call(null,fun,0)}catch(e){return cachedSetTimeout.call(this,fun,0)}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout)return clearTimeout(marker);if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout)return cachedClearTimeout=clearTimeout,clearTimeout(marker);try{return cachedClearTimeout(marker)}catch(e){try{return cachedClearTimeout.call(null,marker)}catch(e){return cachedClearTimeout.call(this,marker)}}}function cleanUpNextTick(){draining&&currentQueue&&(draining=!1,currentQueue.length?queue=currentQueue.concat(queue):queueIndex=-1,queue.length&&drainQueue())}function drainQueue(){if(!draining){var timeout=runTimeout(cleanUpNextTick);draining=!0;for(var len=queue.length;len;){for(currentQueue=queue,queue=[];++queueIndex<len;)currentQueue&&currentQueue[queueIndex].run();queueIndex=-1,len=queue.length}currentQueue=null,draining=!1,runClearTimeout(timeout)}}function Item(fun,array){this.fun=fun,this.array=array}function noop(){}var cachedSetTimeout,cachedClearTimeout,process=module.exports={};!function(){try{cachedSetTimeout="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){cachedSetTimeout=defaultSetTimout}try{cachedClearTimeout="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){cachedClearTimeout=defaultClearTimeout}}();var currentQueue,queue=[],draining=!1,queueIndex=-1;process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)args[i-1]=arguments[i];queue.push(new Item(fun,args)),1!==queue.length||draining||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",process.versions={},process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.prependListener=noop,process.prependOnceListener=noop,process.listeners=function(name){return[]},process.binding=function(name){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(dir){throw new Error("process.chdir is not supported")},process.umask=function(){return 0}},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_State=__webpack_require__(30),_State2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_State);__webpack_require__(29);var init=function(){function init(){_classCallCheck(this,init),this.data=null,this.State=_State2.default}return _createClass(init,[{key:"check",value:function(Obj){if(void 0===Obj)return!0;this.obj=Obj,Obj.div=document.createElement("DIV"),Obj.H1=document.createElement("H1"),Obj.H2=document.createElement("H2"),Obj.H3=document.createElement("H3"),Obj.H4=document.createElement("H4"),Obj.P=document.createElement("P"),Obj.A=document.createElement("A"),Obj.UL=document.createElement("UL"),Obj.LI=document.createElement("LI"),Obj.NAV=document.createElement("NAV"),Obj.IMG=document.createElement("IMG")}},{key:"emitt",value:function(){console.log("in the emitt >",res,argg),_State2.default.on("render",function(result){this.data=result})}},{key:"Append",value:function(parent,arr){return Array.isArray(arr)?arr.forEach(function(el,index){parent.appendChild(el)}):(console.log("is not array !!!!!!!!"),parent.appendChild(arr))}},{key:"style",value:function(el,object){if(object)for(var key in object)el.style[key]=object[key]}}]),init}();exports.default=init},function(module,exports,__webpack_require__){"use strict";(function(process){function setContentTypeIfUnset(headers,value){!utils.isUndefined(headers)&&utils.isUndefined(headers["Content-Type"])&&(headers["Content-Type"]=value)}var utils=__webpack_require__(0),normalizeHeaderName=__webpack_require__(26),DEFAULT_CONTENT_TYPE={"Content-Type":"application/x-www-form-urlencoded"},defaults={adapter:function(){var adapter;return"undefined"!=typeof XMLHttpRequest?adapter=__webpack_require__(5):void 0!==process&&(adapter=__webpack_require__(5)),adapter}(),transformRequest:[function(data,headers){return normalizeHeaderName(headers,"Content-Type"),utils.isFormData(data)||utils.isArrayBuffer(data)||utils.isBuffer(data)||utils.isStream(data)||utils.isFile(data)||utils.isBlob(data)?data:utils.isArrayBufferView(data)?data.buffer:utils.isURLSearchParams(data)?(setContentTypeIfUnset(headers,"application/x-www-form-urlencoded;charset=utf-8"),data.toString()):utils.isObject(data)?(setContentTypeIfUnset(headers,"application/json;charset=utf-8"),JSON.stringify(data)):data}],transformResponse:[function(data){if("string"==typeof data)try{data=JSON.parse(data)}catch(e){}return data}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(status){return status>=200&&status<300}};defaults.headers={common:{Accept:"application/json, text/plain, */*"}},utils.forEach(["delete","get","head"],function(method){defaults.headers[method]={}}),utils.forEach(["post","put","patch"],function(method){defaults.headers[method]=utils.merge(DEFAULT_CONTENT_TYPE)}),module.exports=defaults}).call(exports,__webpack_require__(1))},function(module,exports,__webpack_require__){"use strict";(function(process){function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_init2=__webpack_require__(2),_init3=_interopRequireDefault(_init2),_axios=__webpack_require__(11),_axios2=_interopRequireDefault(_axios);__webpack_require__(33),console.log("yooo. ",_init3.default);var Articles=function(_init){function Articles(){_classCallCheck(this,Articles);var _this=_possibleConstructorReturn(this,(Articles.__proto__||Object.getPrototypeOf(Articles)).call(this));return _this.images=["abc-news-au","bbc-news","bbc-sport","business-insider","bloomberg","breitbart-news","buzzfeed","cnbc","entertainment-weekly","fortune","the-huffington-post","ign"],_this}return _inherits(Articles,_init),_createClass(Articles,[{key:"get",value:function(params){var _this2=this;_axios2.default.get(process.env.uRl+params).then(function(data){_this2.State.emit("render",data),window.document.querySelector(".cover").classList.toggle("hide"),console.log(data,"this >>>",_this2)}).catch(function(err){return console.log(err)})}},{key:"Display",value:function(res){var _this3=this;console.log("the process variable >>",process.env.foo);var Art1=new Articles;this.check(Art1);var rs=this.images.map(function(el,index){var Art2=new Articles;return _this3.check(Art2),Art2.IMG.src="/images/"+el+".png",Art2.H1.innerHTML=el,Art2.div.className="block",Art2.Append(Art2.div,[Art2.IMG,Art2.H1]),Art2.div.addEventListener("click",function(e){e.stopPropagation(),window.document.querySelector(".cover").classList.toggle("hide"),Art2.get(el)},!1),Art2.div});return Art1.div.className="Art1",Art1.Append(Art1.div,rs),Art1.div}}]),Articles}(_init3.default),Art=new Articles;exports.default=Art}).call(exports,__webpack_require__(1))},function(module,exports,__webpack_require__){"use strict";(function(process){var utils=__webpack_require__(0),settle=__webpack_require__(18),buildURL=__webpack_require__(21),parseHeaders=__webpack_require__(27),isURLSameOrigin=__webpack_require__(25),createError=__webpack_require__(8),btoa="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||__webpack_require__(20);module.exports=function(config){return new Promise(function(resolve,reject){var requestData=config.data,requestHeaders=config.headers;utils.isFormData(requestData)&&delete requestHeaders["Content-Type"];var request=new XMLHttpRequest,loadEvent="onreadystatechange",xDomain=!1;if("test"===process.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in request||isURLSameOrigin(config.url)||(request=new window.XDomainRequest,loadEvent="onload",xDomain=!0,request.onprogress=function(){},request.ontimeout=function(){}),config.auth){var username=config.auth.username||"",password=config.auth.password||"";requestHeaders.Authorization="Basic "+btoa(username+":"+password)}if(request.open(config.method.toUpperCase(),buildURL(config.url,config.params,config.paramsSerializer),!0),request.timeout=config.timeout,request[loadEvent]=function(){if(request&&(4===request.readyState||xDomain)&&(0!==request.status||request.responseURL&&0===request.responseURL.indexOf("file:"))){var responseHeaders="getAllResponseHeaders"in request?parseHeaders(request.getAllResponseHeaders()):null,responseData=config.responseType&&"text"!==config.responseType?request.response:request.responseText,response={data:responseData,status:1223===request.status?204:request.status,statusText:1223===request.status?"No Content":request.statusText,headers:responseHeaders,config:config,request:request};settle(resolve,reject,response),request=null}},request.onerror=function(){reject(createError("Network Error",config,null,request)),request=null},request.ontimeout=function(){reject(createError("timeout of "+config.timeout+"ms exceeded",config,"ECONNABORTED",request)),request=null},utils.isStandardBrowserEnv()){var cookies=__webpack_require__(23),xsrfValue=(config.withCredentials||isURLSameOrigin(config.url))&&config.xsrfCookieName?cookies.read(config.xsrfCookieName):void 0;xsrfValue&&(requestHeaders[config.xsrfHeaderName]=xsrfValue)}if("setRequestHeader"in request&&utils.forEach(requestHeaders,function(val,key){void 0===requestData&&"content-type"===key.toLowerCase()?delete requestHeaders[key]:request.setRequestHeader(key,val)}),config.withCredentials&&(request.withCredentials=!0),config.responseType)try{request.responseType=config.responseType}catch(e){if("json"!==config.responseType)throw e}"function"==typeof config.onDownloadProgress&&request.addEventListener("progress",config.onDownloadProgress),"function"==typeof config.onUploadProgress&&request.upload&&request.upload.addEventListener("progress",config.onUploadProgress),config.cancelToken&&config.cancelToken.promise.then(function(cancel){request&&(request.abort(),reject(cancel),request=null)}),void 0===requestData&&(requestData=null),request.send(requestData)})}}).call(exports,__webpack_require__(1))},function(module,exports,__webpack_require__){"use strict";function Cancel(message){this.message=message}Cancel.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},Cancel.prototype.__CANCEL__=!0,module.exports=Cancel},function(module,exports,__webpack_require__){"use strict";module.exports=function(value){return!(!value||!value.__CANCEL__)}},function(module,exports,__webpack_require__){"use strict";var enhanceError=__webpack_require__(17);module.exports=function(message,config,code,request,response){var error=new Error(message);return enhanceError(error,config,code,request,response)}},function(module,exports,__webpack_require__){"use strict";module.exports=function(fn,thisArg){return function(){for(var args=new Array(arguments.length),i=0;i<args.length;i++)args[i]=arguments[i];return fn.apply(thisArg,args)}}},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_init2=__webpack_require__(2),_init3=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_init2);__webpack_require__(34);var style={display:"flex","flex-direction":"column",width:"100%",padding:"1%","margin-bottom":"2%"},NewsFeed=function(_init){function NewsFeed(){return _classCallCheck(this,NewsFeed),_possibleConstructorReturn(this,(NewsFeed.__proto__||Object.getPrototypeOf(NewsFeed)).call(this))}return _inherits(NewsFeed,_init),_createClass(NewsFeed,[{key:"Display",value:function(res){var _this2=this;if(res){var y=res.data.articles.map(function(el,index){var Art=new NewsFeed;return _this2.check(Art),Art.IMG.src=""+el.urlToImage,Art.H2.innerHTML=el.title,Art.H3.innerHTML="by "+(el.author||el.url),Art.A.href=el.url,Art.A.rel="noopener noreferrer",Art.A.target="_blank",Art.Append(Art.A,Art.IMG),Art.Append(Art.div,[Art.H2,Art.H3,Art.A]),Art.style(Art.div,style),Art.div}),Art2=new NewsFeed;this.check(Art2);var Art3=new NewsFeed;return this.check(Art3),Art3.H2.innerHTML="REMOVE",Art3.IMG.src="/images/"+res.data.source+".png",Art3.H3.addEventListener("click",function(){window.document.querySelector(".container").removeChild(Art2.div)},!1),Art3.style(Art3.IMG,{width:"120px",margin:"1%"}),Art3.style(Art3.H2,{"font-size":"inherit",margin:"1%"}),Art3.style(Art3.div,{display:"flex","flex-direction":"row",width:"25%","justify-content":"space-between"}),Art2.H1.innerHTML=res.data.source,Art2.style(Art2.H1,{"border-bottom":"1px solid black",height:"100px"}),Art3.Append(Art3.div,[Art3.IMG,Art3.H2]),Art2.Append(Art2.div,[Art3.div,Art2.H1]),Art2.Append(Art2.div,y),Art2.div.className="feeds",Art2.div}}}]),NewsFeed}(_init3.default),News=new NewsFeed;exports.default=News},function(module,exports,__webpack_require__){module.exports=__webpack_require__(12)},function(module,exports,__webpack_require__){"use strict";function createInstance(defaultConfig){var context=new Axios(defaultConfig),instance=bind(Axios.prototype.request,context);return utils.extend(instance,Axios.prototype,context),utils.extend(instance,context),instance}var utils=__webpack_require__(0),bind=__webpack_require__(9),Axios=__webpack_require__(14),defaults=__webpack_require__(3),axios=createInstance(defaults);axios.Axios=Axios,axios.create=function(instanceConfig){return createInstance(utils.merge(defaults,instanceConfig))},axios.Cancel=__webpack_require__(6),axios.CancelToken=__webpack_require__(13),axios.isCancel=__webpack_require__(7),axios.all=function(promises){return Promise.all(promises)},axios.spread=__webpack_require__(28),module.exports=axios,module.exports.default=axios},function(module,exports,__webpack_require__){"use strict";function CancelToken(executor){if("function"!=typeof executor)throw new TypeError("executor must be a function.");var resolvePromise;this.promise=new Promise(function(resolve){resolvePromise=resolve});var token=this;executor(function(message){token.reason||(token.reason=new Cancel(message),resolvePromise(token.reason))})}var Cancel=__webpack_require__(6);CancelToken.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},CancelToken.source=function(){var cancel;return{token:new CancelToken(function(c){cancel=c}),cancel:cancel}},module.exports=CancelToken},function(module,exports,__webpack_require__){"use strict";function Axios(instanceConfig){this.defaults=instanceConfig,this.interceptors={request:new InterceptorManager,response:new InterceptorManager}}var defaults=__webpack_require__(3),utils=__webpack_require__(0),InterceptorManager=__webpack_require__(15),dispatchRequest=__webpack_require__(16),isAbsoluteURL=__webpack_require__(24),combineURLs=__webpack_require__(22);Axios.prototype.request=function(config){"string"==typeof config&&(config=utils.merge({url:arguments[0]},arguments[1])),config=utils.merge(defaults,this.defaults,{method:"get"},config),config.method=config.method.toLowerCase(),config.baseURL&&!isAbsoluteURL(config.url)&&(config.url=combineURLs(config.baseURL,config.url));var chain=[dispatchRequest,void 0],promise=Promise.resolve(config);for(this.interceptors.request.forEach(function(interceptor){chain.unshift(interceptor.fulfilled,interceptor.rejected)}),this.interceptors.response.forEach(function(interceptor){chain.push(interceptor.fulfilled,interceptor.rejected)});chain.length;)promise=promise.then(chain.shift(),chain.shift());return promise},utils.forEach(["delete","get","head","options"],function(method){Axios.prototype[method]=function(url,config){return this.request(utils.merge(config||{},{method:method,url:url}))}}),utils.forEach(["post","put","patch"],function(method){Axios.prototype[method]=function(url,data,config){return this.request(utils.merge(config||{},{method:method,url:url,data:data}))}}),module.exports=Axios},function(module,exports,__webpack_require__){"use strict";function InterceptorManager(){this.handlers=[]}var utils=__webpack_require__(0);InterceptorManager.prototype.use=function(fulfilled,rejected){return this.handlers.push({fulfilled:fulfilled,rejected:rejected}),this.handlers.length-1},InterceptorManager.prototype.eject=function(id){this.handlers[id]&&(this.handlers[id]=null)},InterceptorManager.prototype.forEach=function(fn){utils.forEach(this.handlers,function(h){null!==h&&fn(h)})},module.exports=InterceptorManager},function(module,exports,__webpack_require__){"use strict";function throwIfCancellationRequested(config){config.cancelToken&&config.cancelToken.throwIfRequested()}var utils=__webpack_require__(0),transformData=__webpack_require__(19),isCancel=__webpack_require__(7),defaults=__webpack_require__(3);module.exports=function(config){return throwIfCancellationRequested(config),config.headers=config.headers||{},config.data=transformData(config.data,config.headers,config.transformRequest),config.headers=utils.merge(config.headers.common||{},config.headers[config.method]||{},config.headers||{}),utils.forEach(["delete","get","head","post","put","patch","common"],function(method){delete config.headers[method]}),(config.adapter||defaults.adapter)(config).then(function(response){return throwIfCancellationRequested(config),response.data=transformData(response.data,response.headers,config.transformResponse),response},function(reason){return isCancel(reason)||(throwIfCancellationRequested(config),reason&&reason.response&&(reason.response.data=transformData(reason.response.data,reason.response.headers,config.transformResponse))),Promise.reject(reason)})}},function(module,exports,__webpack_require__){"use strict";module.exports=function(error,config,code,request,response){return error.config=config,code&&(error.code=code),error.request=request,error.response=response,error}},function(module,exports,__webpack_require__){"use strict";var createError=__webpack_require__(8);module.exports=function(resolve,reject,response){var validateStatus=response.config.validateStatus;response.status&&validateStatus&&!validateStatus(response.status)?reject(createError("Request failed with status code "+response.status,response.config,null,response.request,response)):resolve(response)}},function(module,exports,__webpack_require__){"use strict";var utils=__webpack_require__(0);module.exports=function(data,headers,fns){return utils.forEach(fns,function(fn){data=fn(data,headers)}),data}},function(module,exports,__webpack_require__){"use strict";function E(){this.message="String contains an invalid character"}function btoa(input){for(var block,charCode,str=String(input),output="",idx=0,map=chars;str.charAt(0|idx)||(map="=",idx%1);output+=map.charAt(63&block>>8-idx%1*8)){if((charCode=str.charCodeAt(idx+=.75))>255)throw new E;block=block<<8|charCode}return output}var chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";E.prototype=new Error,E.prototype.code=5,E.prototype.name="InvalidCharacterError",module.exports=btoa},function(module,exports,__webpack_require__){"use strict";function encode(val){return encodeURIComponent(val).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var utils=__webpack_require__(0);module.exports=function(url,params,paramsSerializer){if(!params)return url;var serializedParams;if(paramsSerializer)serializedParams=paramsSerializer(params);else if(utils.isURLSearchParams(params))serializedParams=params.toString();else{var parts=[];utils.forEach(params,function(val,key){null!==val&&void 0!==val&&(utils.isArray(val)&&(key+="[]"),utils.isArray(val)||(val=[val]),utils.forEach(val,function(v){utils.isDate(v)?v=v.toISOString():utils.isObject(v)&&(v=JSON.stringify(v)),parts.push(encode(key)+"="+encode(v))}))}),serializedParams=parts.join("&")}return serializedParams&&(url+=(-1===url.indexOf("?")?"?":"&")+serializedParams),url}},function(module,exports,__webpack_require__){"use strict";module.exports=function(baseURL,relativeURL){return relativeURL?baseURL.replace(/\/+$/,"")+"/"+relativeURL.replace(/^\/+/,""):baseURL}},function(module,exports,__webpack_require__){"use strict";var utils=__webpack_require__(0);module.exports=utils.isStandardBrowserEnv()?function(){return{write:function(name,value,expires,path,domain,secure){var cookie=[];cookie.push(name+"="+encodeURIComponent(value)),utils.isNumber(expires)&&cookie.push("expires="+new Date(expires).toGMTString()),utils.isString(path)&&cookie.push("path="+path),utils.isString(domain)&&cookie.push("domain="+domain),!0===secure&&cookie.push("secure"),document.cookie=cookie.join("; ")},read:function(name){var match=document.cookie.match(new RegExp("(^|;\\s*)("+name+")=([^;]*)"));return match?decodeURIComponent(match[3]):null},remove:function(name){this.write(name,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(module,exports,__webpack_require__){"use strict";module.exports=function(url){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)}},function(module,exports,__webpack_require__){"use strict";var utils=__webpack_require__(0);module.exports=utils.isStandardBrowserEnv()?function(){function resolveURL(url){var href=url;return msie&&(urlParsingNode.setAttribute("href",href),href=urlParsingNode.href),urlParsingNode.setAttribute("href",href),{href:urlParsingNode.href,protocol:urlParsingNode.protocol?urlParsingNode.protocol.replace(/:$/,""):"",host:urlParsingNode.host,search:urlParsingNode.search?urlParsingNode.search.replace(/^\?/,""):"",hash:urlParsingNode.hash?urlParsingNode.hash.replace(/^#/,""):"",hostname:urlParsingNode.hostname,port:urlParsingNode.port,pathname:"/"===urlParsingNode.pathname.charAt(0)?urlParsingNode.pathname:"/"+urlParsingNode.pathname}}var originURL,msie=/(msie|trident)/i.test(navigator.userAgent),urlParsingNode=document.createElement("a");return originURL=resolveURL(window.location.href),function(requestURL){var parsed=utils.isString(requestURL)?resolveURL(requestURL):requestURL;return parsed.protocol===originURL.protocol&&parsed.host===originURL.host}}():function(){return function(){return!0}}()},function(module,exports,__webpack_require__){"use strict";var utils=__webpack_require__(0);module.exports=function(headers,normalizedName){utils.forEach(headers,function(value,name){name!==normalizedName&&name.toUpperCase()===normalizedName.toUpperCase()&&(headers[normalizedName]=value,delete headers[name])})}},function(module,exports,__webpack_require__){"use strict";var utils=__webpack_require__(0);module.exports=function(headers){var key,val,i,parsed={};return headers?(utils.forEach(headers.split("\n"),function(line){i=line.indexOf(":"),key=utils.trim(line.substr(0,i)).toLowerCase(),val=utils.trim(line.substr(i+1)),key&&(parsed[key]=parsed[key]?parsed[key]+", "+val:val)}),parsed):parsed}},function(module,exports,__webpack_require__){"use strict";module.exports=function(callback){return function(arr){return callback.apply(null,arr)}}},function(module,exports,__webpack_require__){"use strict";(function(process){process.env.foo="bar",process.env.uRl="http://localhost:3000/api/",process.env.key="apiKey=0d3eb745c28248c9a28e0fe615dde5e5"}).call(exports,__webpack_require__(1))},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _events=__webpack_require__(32),_Articles=__webpack_require__(4),EV=(function(obj){obj&&obj.__esModule}(_Articles),new _events.EventEmitter);EV.on("render",function(method){}),exports.default=EV},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _Articles=__webpack_require__(4),_Articles2=_interopRequireDefault(_Articles),_NewsFeed=__webpack_require__(10),_NewsFeed2=_interopRequireDefault(_NewsFeed),_init=__webpack_require__(2),_init2=_interopRequireDefault(_init);window.addEventListener("load",function(){function side(e){console.log("scrolling"),window.document.body.scrollTop>A1+200&&(window.document.querySelector(".Art1").classList.toggle("sideBar"),window.document.querySelectorAll(".Art1 h1").forEach(function(el){return el.classList.toggle("hide")}),window.removeEventListener("scroll",side,!1),window.addEventListener("scroll",normal,!1))}function normal(e){console.log("scrolling"),window.document.body.scrollTop<A1+100&&(window.document.querySelector(".Art1").classList.toggle("sideBar"),window.document.querySelectorAll(".Art1 h1").forEach(function(el){return el.classList.toggle("hide")}),window.removeEventListener("scroll",normal,!1),window.addEventListener("scroll",side,!1))}var styles={width:"100vw",display:"flex","flex-direction":"column","align-items":"center"},Con=document.querySelector(".container");console.log("yo",Con);var ind=new _init2.default;ind.State.on("render",function(method){console.log("news. display"),ind.Append(Con,_NewsFeed2.default.Display(method)),ind.style(Con,styles)}),ind.Append(Con,_Articles2.default.Display()),ind.style(Con,styles),window.addEventListener("scroll",side,!1);var A1=window.document.querySelector(".Art1").offsetHeight})},function(module,exports){function EventEmitter(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function isFunction(arg){return"function"==typeof arg}function isNumber(arg){return"number"==typeof arg}function isObject(arg){return"object"==typeof arg&&null!==arg}function isUndefined(arg){return void 0===arg}module.exports=EventEmitter,EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._maxListeners=void 0,EventEmitter.defaultMaxListeners=10,EventEmitter.prototype.setMaxListeners=function(n){if(!isNumber(n)||n<0||isNaN(n))throw TypeError("n must be a positive number");return this._maxListeners=n,this},EventEmitter.prototype.emit=function(type){var er,handler,len,args,i,listeners;if(this._events||(this._events={}),"error"===type&&(!this._events.error||isObject(this._events.error)&&!this._events.error.length)){if((er=arguments[1])instanceof Error)throw er;var err=new Error('Uncaught, unspecified "error" event. ('+er+")");throw err.context=er,err}if(handler=this._events[type],isUndefined(handler))return!1;if(isFunction(handler))switch(arguments.length){case 1:handler.call(this);break;case 2:handler.call(this,arguments[1]);break;case 3:handler.call(this,arguments[1],arguments[2]);break;default:args=Array.prototype.slice.call(arguments,1),handler.apply(this,args)}else if(isObject(handler))for(args=Array.prototype.slice.call(arguments,1),listeners=handler.slice(),len=listeners.length,i=0;i<len;i++)listeners[i].apply(this,args);return!0},EventEmitter.prototype.addListener=function(type,listener){var m;if(!isFunction(listener))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",type,isFunction(listener.listener)?listener.listener:listener),this._events[type]?isObject(this._events[type])?this._events[type].push(listener):this._events[type]=[this._events[type],listener]:this._events[type]=listener,isObject(this._events[type])&&!this._events[type].warned&&(m=isUndefined(this._maxListeners)?EventEmitter.defaultMaxListeners:this._maxListeners)&&m>0&&this._events[type].length>m&&(this._events[type].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[type].length),"function"==typeof console.trace&&console.trace()),this},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.once=function(type,listener){function g(){this.removeListener(type,g),fired||(fired=!0,listener.apply(this,arguments))}if(!isFunction(listener))throw TypeError("listener must be a function");var fired=!1;return g.listener=listener,this.on(type,g),this},EventEmitter.prototype.removeListener=function(type,listener){var list,position,length,i;if(!isFunction(listener))throw TypeError("listener must be a function");if(!this._events||!this._events[type])return this;if(list=this._events[type],length=list.length,position=-1,list===listener||isFunction(list.listener)&&list.listener===listener)delete this._events[type],this._events.removeListener&&this.emit("removeListener",type,listener);else if(isObject(list)){for(i=length;i-- >0;)if(list[i]===listener||list[i].listener&&list[i].listener===listener){position=i;break}if(position<0)return this;1===list.length?(list.length=0,delete this._events[type]):list.splice(position,1),this._events.removeListener&&this.emit("removeListener",type,listener)}return this},EventEmitter.prototype.removeAllListeners=function(type){var key,listeners;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[type]&&delete this._events[type],this;if(0===arguments.length){for(key in this._events)"removeListener"!==key&&this.removeAllListeners(key);return this.removeAllListeners("removeListener"),this._events={},this}if(listeners=this._events[type],isFunction(listeners))this.removeListener(type,listeners);else if(listeners)for(;listeners.length;)this.removeListener(type,listeners[listeners.length-1]);return delete this._events[type],this},EventEmitter.prototype.listeners=function(type){return this._events&&this._events[type]?isFunction(this._events[type])?[this._events[type]]:this._events[type].slice():[]},EventEmitter.prototype.listenerCount=function(type){if(this._events){var evlistener=this._events[type];if(isFunction(evlistener))return 1;if(evlistener)return evlistener.length}return 0},EventEmitter.listenerCount=function(emitter,type){return emitter.listenerCount(type)}},function(module,exports){},function(module,exports){},function(module,exports){function isBuffer(obj){return!!obj.constructor&&"function"==typeof obj.constructor.isBuffer&&obj.constructor.isBuffer(obj)}function isSlowBuffer(obj){return"function"==typeof obj.readFloatLE&&"function"==typeof obj.slice&&isBuffer(obj.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
module.exports=function(obj){return null!=obj&&(isBuffer(obj)||isSlowBuffer(obj)||!!obj._isBuffer)}}]);