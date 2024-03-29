/**
 * 显示菜单
 */
function showMenu () {
  var prompt = require('@system.prompt');
  var router = require('@system.router');
  var appInfo = require('@system.app').getInfo()
  prompt.showContextMenu({
    itemList: ['关于'],
    success: function (ret) {
      console.log(JSON.stringify(ret), 'ffff')
      switch (ret.index) {
      // case 0:
      //   // 保存桌面
      //   createShortcut()
      //   break
      case 0:
        // 关于
        router.push({
          uri: '/About',
          params: { name: appInfo.name, icon: appInfo.icon }
        })
        break
      // case 2:
      //   // 取消
      //   break
      default:
        prompt.showToast({ message: 'error' })
      }
    }
  })
}
/**
 * 详情页菜单
 * 
 */
function showDetailMenu(obj){
  var prompt = require('@system.prompt');
  var router = require('@system.router');
  var appInfo = require('@system.app').getInfo()
  prompt.showContextMenu({
    itemList: [ '分享','关于'],
    success: function (ret) {
      switch (ret.index) {
      case 0:
        shareContent(obj)
        break
      case 1:
        // 关于
        router.push({
          uri: '/About',
          params: { name: appInfo.name, icon: appInfo.icon }
        })
        break      
      default:
        prompt.showToast({ message: 'error' })
      }
    }
  })  
}
/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */
function createShortcut () {
  var prompt = require('@system.prompt');
  var shortcut = require('@system.shortcut');
  shortcut.hasInstalled({
    success: function (ret) {
      if (ret){
        prompt.showToast({ message: '已创建桌面图标' })
      } else {
        shortcut.install({
          success: function () {
            prompt.showToast({ message: '成功创建桌面图标' })
          },
          fail: function (errmsg, errcode) {
            prompt.showToast({ message: 'error: ' + errcode + '---' + errmsg })
          }
        })
      }
    }
  })
}
/**
 * 分享内容 todo
 */
function shareContent(obj){
  const share = require('@system.share');
  share.share({
    type: 'text/html',
    data: obj && obj.data || 'http://hapjs.org/app/cnode',
    success: function(data) {
      console.log(data,'handling success')
    },
    fail: function(data, code) {
      console.log(`handling fail, code = ${code}`)
    }
  })  
}

export default {
  showMenu,
  createShortcut,
  showDetailMenu
}
