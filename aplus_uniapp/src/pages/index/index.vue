<template>
	<div class="uniapp">
		<view class="uniapp-view">
			<!-- #ifdef APP-PLUS -->
			<!--  #endif -->
			<section class="uni-left">SDK引入&_anony_id引入</section>
			<section class="uni-right">
				<p class="uni-tip">非常重要,<br />直接影响数据是否发送</p>
				<button type="primary" class="uni-viewcode" @tap="navigateToCode">点击查看集成代码</button>
			</section>
		</view>
		<view class="uniapp-view">
			<section class="uni-left">根据埋点方案进行事件埋点</section>
			<section class="uni-right">
				<button type="primary" @tap="navigateToPv">页面浏览事件</button>
				<button type="primary" @tap="navigateToClick">点击事件</button>
				<!-- #ifdef H5 -->
				<button type="primary" @tap="navigateToExposure">曝光事件</button>
				<!-- #endif -->
				<button type="primary" @tap="navigateToCustom">自定义事件</button>
				<!-- uniapp构建的微信小程序、支付宝小程序不支持可视化埋点 -->
				<!-- #ifdef H5 -->
				<button type="primary" @tap="navigateToVT">去看可视化demo</button>
				<!-- #endif -->
			</section>
		</view>

		<view class="uniapp-view">
			<section class="uni-left uni-transp">页面透传属性测试</section>
			<section class="uni-right">
				<button type="primary" class="uni-setting" @tap="navigateToH2">进入H2（不带透传属性）</button>
			</section>
			<section class="uni-right">
				<button type="primary" class="uni-setting" @tap="navigateToH2WithHole">进入H2（带透传属性）</button>
			</section>
		</view>

		<view class="uniapp-view">
			<section class="uni-left">从h5页面进入原生页面</section>
			<section class="uni-right">
				<button type="primary" class="uni-setting" @tap="navigateToNativeApp">唤起App</button>
			</section>
		</view>

		<view class="uniapp-view">
			<section class="uni-left">按需设置全局/用户属性</section>
			<section class="uni-right">
				<button type="primary" class="uni-setting" @tap="navigateToSetting">设置全局/用户属性</button>
			</section>
		</view>

		<view class="uniapp-view">
			<section class="uni-full">
				收数域名：<input type="text" class="uni-tracker-env" id="tracker-domain" :value="aplusRhostV"
					@change="handlerDomainChange" />
				appKey：<input type="text" class="uni-tracker-env" id="tracker-appkey" :value="appKey"
					@change="handlerAppKeyChange" />
				可视化配置URL：<input type="text" class="uni-tracker-env" id="tracker-vt-url" :value="aplusVtCfgUrl"
					@change="handlerVtURLChange" />
				QT系统域名：<input type="text" class="uni-tracker-env" id="tracker-sys-domain" :value="aplusApiHost"
					@change="handlerSysDomainChange" />
				appInfoId：<input type="text" class="uni-tracker-env" id="tracker-appinfoid" :value="appInfoId"
					@change="handlerAppInfoIdChange" />
				<button type="primary" class="uni-viewcode" @tap="navigateToSubmit">更新可视化配置</button>
			</section>
		</view>
	</div>
</template>

<script>
const browser = {
	versions: function () {
		const u = navigator.userAgent,
			app = navigator.appVersion;
		return {
			trident: u.indexOf('Trident') > -1,
			/*IE内核*/
			presto: u.indexOf('Presto') > -1,
			/*opera内核*/
			webKit: u.indexOf('AppleWebKit') > -1,
			/*苹果、谷歌内核*/
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
			/*火狐内核*/
			mobile: !!u.match(/AppleWebKit.*Mobile.*/),
			/*是否为移动终端*/
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
			/*ios终端*/
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
			/*android终端或者uc浏览器*/
			iPhone: u.indexOf('iPhone') > -1,
			/*是否为iPhone或者QQHD浏览器*/
			iPad: u.indexOf('iPad') > -1,
			/*是否iPad*/
			webApp: u.indexOf('Safari') == -1,
			/*是否web应该程序，没有头部与底部*/
			souyue: u.indexOf('souyue') > -1,
			superapp: u.indexOf('superapp') > -1,
			weixin: u.toLowerCase().indexOf('micromessenger') > -1,
			Safari: u.indexOf('Safari') > -1
		};
	}(),
	language: (navigator.browserLanguage || navigator.language).toLowerCase()
};
export default {
	onShow() {
		// #ifdef H5
		aplus_queue.push({
			action: 'aplus.aplus_pubsub.subscribe',
			arguments: [
				'aplusReady',
				function (status) {
					if (status === 'complete') {
						aplus.updatePageProperties(
							"h1_page",
							{
								cusp_h1_p: 'h1的事件属性',
							}
						);

						console.log('h1页面属性：', aplus.getPageProperties('h1_page'));
						console.log("事件属性 cusp_h1_p ==", aplus.getPageProperty("h1_page", "cusp_h1_p",
							"cusp"));
						console.log("事件属性 transp_from_h2 ==", aplus.getPageProperty("h1_page", "transp_from_h2", "transp"));
						aplus.sendPV({
							is_auto: false
						}, {});
					}
				},
			],
		})

		// 同步引入写法
		// aplus.updatePageProperties({
		// 	properties: {
		// 		cusp_h1_p: '首页的事件属性',
		// 	},
		// 	page_name: "h1_page",
		// });

		// console.log('首页的页面属性：', aplus.getPageProperties('h1_page'));
		// console.log("事件属性 cusp_h1_p ==", aplus.getPageProperty("h1_page", "cusp_h1_p", "cusp"));
		// console.log("事件属性 transp_from_page1 ==", aplus.getPageProperty("h1_page", "transp_from_page1", "transp"));
		// aplus.sendPV({is_auto: false}, {page_name: "h1_page"});
		// #endif
	},



	onLoad(options) {

	},
	data() {
		const defaultObj = {
			aplusRhostV: '',
			aplusApiHost: '',
			aplusVtCfgUrl: '',
			appKey: '',
			appInfoId: '',
		};
		let _trackerInfo = {};
		try {
			let trackerInfo = uni.getStorageSync('__trackerInfo');
			if (trackerInfo) {
				_trackerInfo = trackerInfo
			} else {
				_trackerInfo = defaultObj;
			}
		} catch (e) {
			console.log('error === ', e);
			_trackerInfo = defaultObj;
		}
		return {
			..._trackerInfo
		};
	},
	methods: {
		navigateToCode() {
			uni.navigateTo({
				url: '/pages/integrate/integrate'
			})
		},
		handlerDomainChange(e) {
			this.$set(this.$data, 'aplusRhostV', e.target.value.trim());
		},
		handlerSysDomainChange(e) {
			this.$set(this.$data, 'aplusApiHost', e.target.value.trim());
		},
		handlerVtURLChange(e) {
			this.$set(this.$data, 'aplusVtCfgUrl', e.target.value.trim());
		},
		handlerAppKeyChange(e) {
			this.$set(this.$data, 'appKey', e.target.value.trim());
		},
		handlerAppInfoIdChange(e) {
			this.$set(this.$data, 'appInfoId', e.target.value.trim());
		},
		navigateToSubmit() {
			const {
				aplusRhostV = '', aplusApiHost = '', aplusVtCfgUrl = '', appKey = '', appInfoId = ''
			} = this.$data;
			if (!aplusRhostV || !appKey) {
				uni.showModal({
					title: '错误提示',
					content: '收数域名和appKey不能为空',
				});
				return;
			}
			if (aplusVtCfgUrl && (!aplusApiHost || !appInfoId)) {
				uni.showModal({
					title: '错误提示',
					content: '启用可视化埋点时需要同时配置QT系统域名和appInfoId',
				});
				return;
			}
			uni.setStorageSync('__trackerInfo', {
				aplusRhostV,
				aplusApiHost,
				aplusVtCfgUrl,
				appKey,
				appInfoId
			});

			const {
				aplus_queue
			} = this.$aplus;
			aplus_queue.push({
				action: 'aplus.setMetaInfo',
				arguments: ['appKey', appKey]
			});
			aplus_queue.push({
				action: 'aplus.setMetaInfo',
				arguments: ['appInfoId', appInfoId]
			});
			aplus_queue.push({
				action: 'aplus.setMetaInfo',
				arguments: ['aplus-rhost-v', aplusRhostV]
			});
			aplus_queue.push({
				action: 'aplus.setMetaInfo',
				arguments: ['aplus-vt-cfg-url', aplusVtCfgUrl]
			});
			aplus_queue.push({
				action: 'aplus.setMetaInfo',
				arguments: ['aplus-api-host', aplusApiHost]
			});

			uni.showModal({
				title: '成功',
				content: '更新配置成功，请重新进入小程序以生效配置',
				success: function () {
					uni.startPullDownRefresh();
				}
			});
			return;
		},
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		navigateToPv() {
			uni.navigateTo({
				url: '/pages/pv/pv'
			})
		},
		navigateToClick() {
			aplus.updateNextPageProperties({
				"transp_from_h1": "h1给h2的透传属性",
			});
			uni.navigateTo({
				url: '/pages/click/click'
			})
		},
		navigateToCustom() {
			uni.navigateTo({
				url: '/pages/custom/custom'
			})
		},
		navigateToVT() {
			uni.navigateTo({
				url: '/pages/vt/vtdemo1'
			})
		},
		navigateToExposure() {
			uni.navigateTo({
				url: '/pages/exposure/exposure'
			})
		},
		navigateToSetting() {
			uni.navigateTo({
				url: '/pages/setting/index'
			})
		},
		navigateToH2() {
			uni.navigateTo({
				url: '/pages/transp/h2'
			})
		},
		navigateToH2WithHole() {
			aplus.updateNextPageProperties({
				"transp_from_h1": "h1给h2的透传属性",
			});

			uni.navigateTo({
				url: '/pages/transp/h2'
			})
		},
		navigateToNativeApp() {
			console.log("JS 桥接")

			if (browser.versions.ios) {
				// #ifdef H5
				let string = JSON.stringify({
					test: 1
				});
				window.webkit.messageHandlers.transpBridgeDemo.postMessage(string);
				// #endif
			} else if (browser.versions.android) {
				// #ifdef H5
				Android.navigateToOther()
				// #endif
			}
		},
	}
}
</script>

<style lang="scss" scoped>
.uniapp {
	min-height: 100vh;
	background-color: rgb(235, 237, 243);
	overflow: hidden;

	.uniapp-view {
		display: flex;
		justify-content: space-between;
		margin: 20px 3% 0;
		padding: 2%;
		background-color: #fff;
		-webkit-box-shadow: #ccc 0px 0px 10px;
		-moz-box-shadow: #ccc 0px 0px 10px;
		font-size: 16px;

		.uni-full {
			width: 100%;
		}

		.uni-left {
			width: 40%;
			text-align: center;
			border: 1px dashed #ccc;
			display: flex;
			align-items: center;

			button {
				line-height: 30px;
				padding: 0;
			}
		}

		.uni-right {
			width: 60%;
			display: flex;
			flex-direction: column;
			align-items: flex-end;

			button {
				width: 88%;
				line-height: 37px;
				margin: 5px 0;
				font-size: 14px;
			}

			.uni-tip {
				width: 88%;
			}
		}

		.uni-tracker-env {
			margin: 4px 0;
			border: 1px solid #d0d1d2;
			width: 100%;
			height: 30px;
			box-sizing: border-box;
			padding: 0 4px;
			font-size: 14px;
		}
	}
}
</style>
