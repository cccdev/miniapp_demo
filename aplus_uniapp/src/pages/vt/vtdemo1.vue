<template>
    <div class="event-exposure" @tap.native.stop="onAplusClk">
        <div class="exposure-auto">
            <view class="exposure-auto-title">场景1: 轮播</view>
            <div class="exposure-swiper">
                <div class="banner_item_vt">
                    <img v-for="(item, index) in swiperImg" :key="index" :src="item.url"/>
                </div>
            </div>
        </div>
        <div class="exposure-manual">
            <view class="exposure-manual-title">场景2: 瀑布流</view>
            <div v-for="value in 1" :key="value" class="exposure-grid">
                <div v-for="(item, index) in list1" :key="index" class="exposure-grid-item-vt"  :data-tracker-params="JSON.stringify(item)">
                    <div class="grid-item-box">
                        <img :src="item.url" alt="">
                        <p>{{ item.name }}</p>
                        <p class="grid-item-detail">
                            <span>{{ item.price }}</span>
                            <span>{{ item.scale }}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div v-for="value in 1" :key="value" class="exposure-grid">
                <div v-for="(item, index) in list2" :key="index" class="exposure-grid-item-vt"  :data-tracker-params="JSON.stringify(item)">
                    <div class="grid-item-box">
                        <img :src="item.url" alt="">
                        <p>{{ item.name }}</p>
                        <p class="grid-item-detail">
                            <span>{{ item.price }}</span>
                            <span>{{ item.scale }}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div v-for="value in 1" :key="value" class="exposure-grid">
                <div v-for="(item, index) in list3" :key="index" class="exposure-grid-item-vt"  :data-tracker-params="JSON.stringify(item)">
                    <div class="grid-item-box">
                        <img :src="item.url" alt="">
                        <p>{{ item.name }}</p>
                        <p class="grid-item-detail">
                            <span>{{ item.price }}</span>
                            <span>{{ item.scale }}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div v-for="value in 1" :key="value" class="exposure-grid">
                <div v-for="(item, index) in list4" :key="index" class="exposure-grid-item-vt"  :data-tracker-params="JSON.stringify(item)">
                    <div class="grid-item-box">
                        <img :src="item.url" alt="">
                        <p>{{ item.name }}</p>
                        <p class="grid-item-detail">
                            <span>{{ item.price }}</span>
                            <span>{{ item.scale }}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div v-for="value in 1" :key="value" class="exposure-grid">
                <div v-for="(item, index) in list5" :key="index" class="exposure-grid-item-vt"  :data-tracker-params="JSON.stringify(item)">
                    <div class="grid-item-box">
                        <img :src="item.url" alt="">
                        <p>{{ item.name }}</p>
                        <p class="grid-item-detail">
                            <span>{{ item.price }}</span>
                            <span>{{ item.scale }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	methods: {
		onAplusClk: function(e) {
			const { aplus_queue } = this.$aplus;
			aplus_queue.push({
				action: 'aplus.aplus_pubsub.publish',
				arguments: ['onAplusClk', {
				  status: 'ready',
				  event: e,
				  context: this
				}]
			})
		}
	},
    data() {
        return {
            swiperImg: [
                {url: "https://img.alicdn.com/imgextra/i4/O1CN0198ZqQc1ipBYrWKD7b_!!6000000004461-0-tps-1316-736.jpg"},
                {url: "https://img.alicdn.com/imgextra/i1/O1CN01EdIpVV1jxiYfVOw8v_!!6000000004615-0-tps-1316-736.jpg"},
                {url: "https://img.alicdn.com/imgextra/i4/O1CN01RjAj8X1aJZIQk6G27_!!6000000003309-0-tps-1316-736.jpg"},
            ],
            background: ['color1', 'color2', 'color3'],
            indicatorDots: true,
            autoplay: true,
            interval: 2000,
            duration: 500,
            list1: [
                {
                    url: 'https://gd1.alicdn.com/imgextra/i1/2028723128/O1CN01AHNoOr1YyfbGi6ogZ_!!2028723128.jpg',
                    name: '大理石融蜡灯1',
                    price: '￥379.0',
                    scale: '73人购买',
                    id: 1001
                },{
                    url: 'https://gd3.alicdn.com/imgextra/i3/2209303074383/O1CN01E5T9QU1iFSeRLWz4s_!!2209303074383.jpg_400x400.jpg',
                    name: '欧式大理石台灯',
                    price: '189.0',
                    scale: '898人购买',
                    id: 1002
                }
            ],
            list2: [
                {
                    url: 'https://img.alicdn.com/imgextra/i3/2212630767092/O1CN01GlqcuM22GBbchND9Q_!!0-item_pic.jpg_430x430q90.jpg',
                    name: '台灯学习专用护眼灯',
                    price: '35.0',
                    scale: '173人购买',
                    id: 1003
                },{
                    url: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/138006397/O1CN01QWCvC01x7sJhTFYYS_!!138006397.jpg_430x430q90.jpg',
                    name: '欧普AAA级护眼灯',
                    price: '239.0',
                    scale: '698人购买',
                    id: 1004
                }
            ],
            list3: [
                {
                    url: 'https://img.alicdn.com/imgextra/i3/2103880744/O1CN012UZs071HMnMegbB33_!!2103880744.jpg_430x430q90.jpg',
                    name: '壁灯卧室客厅背景墙灯',
                    price: '69.0',
                    scale: '222人购买',
                    id: 1005
                },{
                    url: 'https://gd1.alicdn.com/imgextra/i1/377720279/TB2Sev8e2NNTKJjSspfXXbXIFXa_!!377720279.jpg_400x400.jpg',
                    name: '美式壁灯',
                    price: '88.0',
                    scale: '533人购买',
                    id: 1006
                }
            ],
            list4: [{
                url: 'https://img.alicdn.com/imgextra/i1/2211428522500/O1CN01GC0qjf1UL2qvYwB9P_!!2211428522500.jpg_430x430q90.jpg',
                name: '奥克斯风扇灯吊扇灯',
                price: '249.0',
                scale: '912人购买',
                id: 1007
            }, {
                url: 'https://img.alicdn.com/imgextra/i2/2206769739534/O1CN01pKyg2S2KIcmMW9JWn_!!2206769739534.jpg_400x400.jpg',
                name: '隐形风扇灯吊扇灯',
                price: '158.0',
                scale: '752人购买',
                id: 1008
            }],
            list5: [{
                url: 'https://gd3.alicdn.com/imgextra/i2/2211780572115/O1CN01x4Tjsr1RUiMftry3t_!!2211780572115.jpg_400x400.jpg',
                name: '欧普照明led吸顶灯',
                price: '69.0',
                scale: '456人购买',
                id: 1009
            }, {
                url: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/2183118489/O1CN01v5bDLw2Ca0vVOMMLA_!!2183118489.jpg_430x430q90.jpg',
                name: '北欧吊灯客厅灯',
                price: '999.0',
                scale: '79人购买',
                id: 1010
            }]
        }
    },
}
</script>

<style lang="scss" scoped>
.event-exposure {
    padding-bottom: 30px;
}
.exposure-auto {
    .exposure-auto-title {
        font-size: 20px;
        padding: 15px 2% 15px;
    }
    .exposure-swiper {
        width: 100%;
        height: 211px;
        overflow: hidden;
    }
    .banner_item_vt {
        width: 300%;
        height: 211px;
        animation: switch 5s ease-out infinite;
        img {
            float: left;
            width: 33.33%;
            height: 211px;
        }
    }
}
@keyframes switch {
    0%, 25% {
        margin-left: 0;
    }
    35%, 60% {
        margin-left: -100%;
    }
    70%, 100% {
        margin-left: -200%;
    }
}
.exposure-manual {
    .exposure-manual-title {
        font-size: 20px;
        padding: 15px 2% 0;
    }
    .exposure-grid {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin: 15px 0;
        .exposure-grid-item-vt {
            width: 45%;
            -webkit-box-shadow: #ccc 0px 0px 10px; 
            -moz-box-shadow: #ccc 0px 0px 10px;
            .grid-item-box {
                display: flex;
                flex-direction: column;
                padding: 5%;
                font-size: 14px;
                img {
                    width: 100%;
                    height: 180px;
                    margin-bottom: 8px;
                }
                .grid-item-detail {
                    span:first-child {
                        color: red;
                    }
                    span:last-child {
                        color: #aaa;
                        margin-left: 5px;
                    }
                }
            }
            
        }
    }
}
</style>