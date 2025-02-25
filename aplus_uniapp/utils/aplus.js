// #ifdef MP
// import aplus_mini from './aplus_mini_cloud_um.js'; //1.x 版本 sdk
import { initQTSDK } from './qt_mini.umd.js';
let trackerInfo = {};
try {
  trackerInfo = uni.getStorageSync('__trackerInfo');
  console.log('trackerInfo === ', trackerInfo);
} catch (e) {
  console.log('error === ', e);
}
function getRandom(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
};
const random = getRandom(1, 1000);
const aplusConfig = {
  metaInfo: {
   'appKey': trackerInfo.appKey,
   'appInfoId': trackerInfo.appInfoId,
   'trackDomain': trackerInfo.aplusRhostV || 'log-api.aplus.emas-poc.com',
   'aplus-vt-cfg-url': trackerInfo.aplusVtCfgUrl, // 已发布的配置地址
   'aplus-api-host': trackerInfo.aplusApiHost, // 采集管理系统域名，用于可视化埋点验证


   'DEBUG': true,
   // 'aplus-waiting': 'MAN', //关闭自动pv
   '_anony_id': 'testOpenId_' + random, // 'testOpenId', //必填
   'globalproperty': {
      from: 'uniapp'
   },
   'aplus-auto-exp': [{
		'cssSelector':'.banner_item' ,
		'logkey':'test_auto_exp_banner',
		'props': ['data-index'], 
   }, {
	   'cssSelector':'.exposure-grid-item',
	   'logkey':'test_auto_exp_grid',
	   'props': ['data-index', 'data-name'], 
   }],
   'aplus-auto-clk': [{
		'cssSelector':'.test_auto_clk',
		'logkey':'test_auto_clk',
		'props': ['data-product', 'data-productColor', 'data-productId'], 
   }],
   '_user_id': 'testUserId_' + random,
   '_user_nick': 'testUserNick',
   // 设置每个页面的page_name
   'pageConfig': {
  		'pages/index/index': {
  		  'pageName': 'home_page'
  		},
      'pages/vt/vtdemo1': {
        'pageName': 'vtdemo_page'
      },
  		'pages/click/click': {
  		  'pageName': 'clickevent_page'
  		},
  		'pages/pv/pv': {
  			'pageName': 'manpv_page'
  		},
  		'pages/setting/index': {
  			'pageName': 'setting_page'
  		},
      'pages/exposure/exposure': {
        'pageName': 'exp_page'
      },
      'pages/custom/custom': {
        'pageName': 'customevent_page'
      },
      'pages/integrate/integrate': {
        'pageName': 'integrate_page'
      },
      'pages/car/shop': {
        'pageName': 'carshop_page'
      }
    }
  }
};

// const aplus = aplus_mini(aplusConfig);
const aplus = initQTSDK(aplusConfig).ctx.aplus;

aplus.install = function(Vue) {
	Vue.prototype.$aplus = aplus;
}
export default aplus;
// #endif


