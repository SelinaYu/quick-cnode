(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(4)
	var $app_style$ = __webpack_require__(5)
	var $app_script$ = __webpack_require__(6)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.2'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "tutorial-page"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "div-tabs"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "div-tabbar"
	          ],
	          "children": [
	            {
	              "type": "list",
	              "attr": {},
	              "repeat": function () {return this.menu},
	              "children": [
	                {
	                  "type": "list-item",
	                  "attr": {
	                    "type": "menu"
	                  },
	                  "classList": [
	                    "content-item"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.$item.value}
	                      },
	                      "events": {
	                        "click": function (evt) {this.showContent(this.$item.key,evt)}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "div-tabcontent"
	          ],
	          "children": [
	            {
	              "type": "list",
	              "attr": {},
	              "children": [
	                {
	                  "type": "block",
	                  "attr": {},
	                  "repeat": function () {return this.list},
	                  "children": [
	                    {
	                      "type": "list-item",
	                      "attr": {
	                        "type": "item"
	                      },
	                      "children": [
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "cell"
	                          ],
	                          "children": [
	                            {
	                              "type": "a",
	                              "attr": {
	                                "href": function () {return '/user/' + (this.$item.author.loginname)}
	                              },
	                              "classList": [
	                                "user_avatar",
	                                "pull-left"
	                              ],
	                              "children": [
	                                {
	                                  "type": "image",
	                                  "attr": {
	                                    "src": function () {return this.$item.author.avatar_url}
	                                  }
	                                }
	                              ]
	                            },
	                            {
	                              "type": "div",
	                              "attr": {},
	                              "classList": [
	                                "reply_count",
	                                "pull-left"
	                              ],
	                              "children": [
	                                {
	                                  "type": "div",
	                                  "attr": {},
	                                  "classList": [
	                                    "count_of_replies"
	                                  ]
	                                },
	                                {
	                                  "type": "div",
	                                  "attr": {},
	                                  "classList": [
	                                    "count_seperator"
	                                  ]
	                                },
	                                {
	                                  "type": "div",
	                                  "attr": {},
	                                  "classList": [
	                                    "count_of_visits"
	                                  ]
	                                }
	                              ]
	                            },
	                            {
	                              "type": "div",
	                              "attr": {},
	                              "classList": [
	                                "topic_title_wrapper"
	                              ],
	                              "children": [
	                                {
	                                  "type": "div",
	                                  "attr": {},
	                                  "classList": [
	                                    "put_top"
	                                  ],
	                                  "shown": function () {return this.$item.top==='True'}
	                                },
	                                {
	                                  "type": "a",
	                                  "attr": {
	                                    "href": function () {return '/topic/+' + (this.$item.id)},
	                                    "value": function () {return this.$item.title}
	                                  },
	                                  "classList": [
	                                    "topic_title"
	                                  ]
	                                }
	                              ]
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  ".tutorial-page": {
	    "flex": 1,
	    "flexDirection": "column"
	  },
	  ".div-tabcontent": {
	    "flex": 1,
	    "backgroundColor": "#eeeeee",
	    "paddingTop": "20px",
	    "paddingRight": "20px",
	    "paddingBottom": "20px",
	    "paddingLeft": "20px"
	  },
	  ".div-tabs": {
	    "flex": 1,
	    "flexDirection": "column"
	  },
	  ".div-tabbar": {
	    "height": "50px"
	  },
	  ".div-tabbar text": {
	    "marginTop": "0px",
	    "marginRight": "10px",
	    "marginBottom": "0px",
	    "marginLeft": "10px",
	    "color": "#80bd01",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "div-tabbar"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  },
	  ".div-tabcontent .cell": {
	    "paddingRight": "10px",
	    "backgroundColor": "#ffffff",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "div-tabcontent"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "cell"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.fetch');
	
	var _system4 = _interopRequireDefault(_system3);
	
	var _config = __webpack_require__(7);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: {
	    type: 'all',
	    menu: [{
	      "key": "all",
	      "value": "全部"
	    }, {
	      "key": "good",
	      "value": "精华"
	    }, {
	      "key": "share",
	      "value": "分享"
	    }, {
	      "key": "ask",
	      "value": "问答"
	    }, {
	      "key": "job",
	      "value": "招聘"
	    }],
	    list: []
	  },
	  onInit: function onInit() {
	    console.log(_config2.default.Prefix);
	    this.showContent();
	  },
	  showContent: function showContent(key) {
	    var _this = this;
	    _system4.default.fetch({
	      url: _config2.default.Prefix + '/topics',
	      success: function success(res) {
	        res = res.data;
	        res = JSON.parse(res);
	        _this.list = res.data;
	        console.log(JSON.stringify(_this.list + 'FFFF'));
	      },
	      fail: function fail(data, code) {
	        console.log(data, code);
	        console.info('fail');
	      },
	      complete: function complete() {
	        console.info('complete');
	      }
	    });
	  }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Prefix = 'https://cnodejs.org/api/v1';
	exports.default = {
	    Prefix: Prefix
	};

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map