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
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Demo/index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=style!./src/Demo/index.ux?uxType=page":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=style!./src/Demo/index.ux?uxType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".tutorial-page": {
    "flex": 1,
    "flexDirection": "column"
  },
  ".div-tabs": {
    "flex": 1,
    "flexDirection": "column"
  },
  ".div-tabs .head-logo": {
    "height": "100px",
    "marginTop": "0px",
    "marginRight": "10px",
    "marginBottom": "0px",
    "marginLeft": "10px",
    "paddingTop": "0px",
    "paddingRight": "10px",
    "paddingBottom": "0px",
    "paddingLeft": "10px",
    "backgroundColor": "#333333",
    "display": "flex",
    "justifyContent": "space-between",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "div-tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "head-logo"
        }
      ]
    }
  },
  ".div-tabs .head-logo image": {
    "width": "200px",
    "height": "100px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "div-tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "head-logo"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".div-tabs .head-logo text": {
    "color": "#ffffff",
    "fontSize": "40px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "div-tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "head-logo"
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
  ".div-tabbar": {
    "marginTop": "0px",
    "marginRight": "10px",
    "marginBottom": "0px",
    "marginLeft": "10px",
    "backgroundColor": "#333333"
  },
  ".div-tabbar list": {
    "flexDirection": "row",
    "height": "100px",
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
          "n": "list"
        }
      ]
    }
  },
  ".div-tabbar text": {
    "color": "#80bd01",
    "marginTop": "25px",
    "marginRight": "10px",
    "marginBottom": "20px",
    "marginLeft": "10px",
    "paddingTop": "5px",
    "paddingRight": "10px",
    "paddingBottom": "5px",
    "paddingLeft": "10px",
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
  ".div-tabbar list-item .text_actived": {
    "backgroundColor": "#80bd01",
    "color": "#ffffff",
    "borderRadius": "5px",
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
          "n": "list-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text_actived"
        }
      ]
    }
  },
  ".div-tabcontent": {
    "flexDirection": "column",
    "flex": 1,
    "backgroundColor": "#ffffff",
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px",
    "borderRadius": "5px"
  },
  ".div-tabcontent list": {
    "flexDirection": "column",
    "columns": 1,
    "flex": 1,
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
          "t": "t",
          "n": "list"
        }
      ]
    }
  },
  ".div-tabcontent .cell": {
    "backgroundColor": "#eeeeee",
    "display": "flex",
    "alignItems": "center",
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px",
    "marginBottom": "10px",
    "height": "200px",
    "width": "100%",
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
  },
  ".cell image": {
    "width": "100px",
    "height": "100px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cell"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".div-tabcontent .cell .reply_count": {
    "width": "80px",
    "fontSize": "16px",
    "paddingTop": "0px",
    "paddingRight": "10px",
    "paddingBottom": "0px",
    "paddingLeft": "10px",
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
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "reply_count"
        }
      ]
    }
  },
  ".div-tabcontent .cell .topic_title_wrapper": {
    "paddingLeft": "10px",
    "flexDirection": "column",
    "flex": 1,
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
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic_title_wrapper"
        }
      ]
    }
  },
  ".cell .topic_title_wrapper .title": {
    "fontWeight": "bold",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cell"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic_title_wrapper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title"
        }
      ]
    }
  },
  ".cell .topic_comment": {
    "paddingTop": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cell"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic_comment"
        }
      ]
    }
  },
  ".cell .topic_comment .tabtype": {
    "backgroundColor": "#eeeeee",
    "paddingTop": "0px",
    "paddingRight": "10px",
    "paddingBottom": "0px",
    "paddingLeft": "10px",
    "borderRadius": "5px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cell"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic_comment"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tabtype"
        }
      ]
    }
  },
  ".cell .topic_comment text": {
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cell"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic_comment"
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
  ".cell .topic_comment .dot": {
    "paddingTop": "5px",
    "paddingRight": "10px",
    "paddingBottom": "5px",
    "paddingLeft": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cell"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic_comment"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "dot"
        }
      ]
    }
  },
  ".next_btn": {
    "flexDirection": "column",
    "height": "230px",
    "width": "80px",
    "position": "fixed",
    "right": "0px",
    "bottom": "300px",
    "backgroundColor": "#ffffff",
    "color": "#808080",
    "textAlign": "center",
    "paddingTop": "10px",
    "paddingRight": "25px",
    "paddingBottom": "10px",
    "paddingLeft": "25px",
    "borderTopLeftRadius": "30px",
    "borderBottomLeftRadius": "30px"
  },
  ".next_btn text": {
    "fontSize": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "next_btn"
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
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=template!./src/Demo/index.ux?uxType=page&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=template!./src/Demo/index.ux?uxType=page& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
            "head-logo"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Common/cnode_title.jpg"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "cnode 社区"
              }
            }
          ]
        },
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
              "children": [
                {
                  "type": "block",
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
                          "classList": function () {return [this.$item.key===this.type?'text_actived':'text_tab']},
                          "events": {
                            "click": function (evt) {this.showContent(this.$item.key,evt)}
                          }
                        }
                      ]
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
                          "events": {
                            "click": function (evt) {this.toDetail(this.$item.id,this.$item.title,evt)}
                          },
                          "children": [
                            {
                              "type": "image",
                              "attr": {
                                "src": function () {return this.$item.author.avatar_url},
                                "alt": function () {return this.$item.author.loginname}
                              }
                            },
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "topic_title_wrapper"
                              ],
                              "children": [
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.$item.title}
                                  },
                                  "classList": [
                                    "title"
                                  ]
                                },
                                {
                                  "type": "div",
                                  "attr": {},
                                  "classList": [
                                    "topic_comment"
                                  ],
                                  "children": [
                                    {
                                      "type": "text",
                                      "attr": {
                                        "value": function () {return this.TabType[this.$item.tab]}
                                      },
                                      "classList": [
                                        "tabtype"
                                      ]
                                    },
                                    {
                                      "type": "text",
                                      "attr": {
                                        "value": "•"
                                      },
                                      "classList": [
                                        "dot"
                                      ]
                                    },
                                    {
                                      "type": "text",
                                      "attr": {
                                        "value": function () {return this.$item.author.loginname}
                                      }
                                    },
                                    {
                                      "type": "text",
                                      "attr": {
                                        "value": "•"
                                      },
                                      "classList": [
                                        "dot"
                                      ]
                                    },
                                    {
                                      "type": "text",
                                      "attr": {},
                                      "children": [
                                        {
                                          "type": "span",
                                          "attr": {
                                            "value": function () {return this.$item.reply_count}
                                          }
                                        },
                                        {
                                          "type": "span",
                                          "attr": {
                                            "value": function () {return '' + '/' + (this.$item.visit_count)}
                                          }
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
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "next_btn"
      ],
      "events": {
        "click": function (evt) {this.loadNext(evt)}
      },
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "预加载下一页"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/webpack/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=E:\\quickApp\\Test\\node_modules\\hap-toolkit\\packager\\lib\\webpack\\loader\\jsx-loader.js&comments=false!./node_modules/hap-toolkit/packager/lib/webpack/loader/access-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./src/Demo/index.ux?uxType=page":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/webpack/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/module-loader.js!./node_modules/babel-loader/lib?plugins[]=E:/quickApp/Test/node_modules/hap-toolkit/packager/lib/webpack/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/packager/lib/webpack/loader/access-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./src/Demo/index.ux?uxType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _config = _interopRequireDefault(__webpack_require__(/*! ../config.js */ "./src/config.js"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.webview"));

var _system4 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = {
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
    TabType: {
      'all': '全部',
      'good': '精华',
      'share': '分享',
      'ask': '问答',
      'job': '招聘'
    },
    list: [],
    page: 1
  },
  onInit: function onInit() {
    console.log(_config.default.Prefix);
    this.showContent();
  },
  onMenuPress: function onMenuPress() {
    this.$app.showMenu();
  },
  showContent: function showContent(key) {
    var _this = this;

    _this.type = key || 'all';

    _system2.default.fetch({
      url: _config.default.Prefix + '/topics',
      data: {
        tab: key || 'all'
      },
      success: function success(res) {
        res = res.data;
        res = JSON.parse(res);
        _this.list = res.data;
        console.log(JSON.stringify(_this.list));
      },
      fail: function fail(data, code) {
        console.log(data, code);
        console.info('fail');

        _system4.default.showToast({
          message: 'error' + data
        });
      },
      complete: function complete() {
        console.info('complete');
      }
    });
  },
  toDetail: function toDetail(id, title) {
    _system.default.push({
      uri: 'DetailPage',
      params: {
        id: id,
        title: title
      }
    });
  },
  loadNext: function loadNext() {
    var page = this.page + 1;
    var data = {
      tab: this.type,
      page: page
    };

    var _this = this;

    _system2.default.fetch({
      url: _config.default.Prefix + '/topics',
      data: data,
      success: function success(res) {
        res = res.data;
        res = JSON.parse(res);
        var list = res.data;

        var newList = _this.list.concat(list);

        _this.list = newList;
        console.log(JSON.stringify(_this.list));
      },
      fail: function fail(data, code) {
        console.log(data, code);
        console.info('fail');

        _system4.default.showToast({
          message: 'error' + data
        });
      },
      complete: function complete() {
        console.info('complete');
      }
    });
  }
};
exports.default = _default;
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
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "./src/Demo/index.ux?uxType=page":
/*!***************************************!*\
  !*** ./src/Demo/index.ux?uxType=page ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/webpack/loader/json-loader.js!../../node_modules/hap-toolkit/packager/lib/webpack/loader/template-loader.js!../../node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "./node_modules/hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=template!./src/Demo/index.ux?uxType=page&")
var $app_style$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/webpack/loader/json-loader.js!../../node_modules/hap-toolkit/packager/lib/webpack/loader/style-loader.js?index=0&type=style!../../node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./node_modules/hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/style-loader.js?index=0&type=style!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=style!./src/Demo/index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/webpack/loader/script-loader.js!../../node_modules/hap-toolkit/packager/lib/webpack/loader/module-loader.js!../../node_modules/babel-loader?plugins[]=E:/quickApp/Test/node_modules/hap-toolkit/packager/lib/webpack/loader/jsx-loader.js&comments=false!../../node_modules/hap-toolkit/packager/lib/webpack/loader/access-loader.js!../../node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./node_modules/hap-toolkit/packager/lib/webpack/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=E:\\quickApp\\Test\\node_modules\\hap-toolkit\\packager\\lib\\webpack\\loader\\jsx-loader.js&comments=false!./node_modules/hap-toolkit/packager/lib/webpack/loader/access-loader.js!./node_modules/hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./src/Demo/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var Prefix = 'https://cnodejs.org/api/v1';
var Web = 'https://cnodejs.org/topic/';
var _default = {
  Prefix: Prefix,
  Web: Web
};
exports.default = _default;

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map