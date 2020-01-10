import Vue from 'vue'   // 引入vue
import Vuex from 'vuex' // 引入vuex

// 使用vuex
Vue.use(Vuex);

// 创建vuex实例
let store = new Vuex.Store({
    // 定义数据
    state: [
        {
            title: '1.7福包：美团/大众点评使用中信信用卡支付随机立减最高99元',
            img: 'https://img.ithome.com/newsuploadfiles/thumbnail/2020/1/467261_240.jpg?r=1578383469343',
            time: '15:12',
            comment: '123',
            mold: '1',
        },
        {
            title: 'CES 2020：索尼PS5挤牙膏式官宣，5大特性公布',
            img: 'https://img.ithome.com/newsuploadfiles/thumbnail/2020/1/467236_240.jpg?r=1578387992570',
            time: '14:22',
            comment: '131',
            mold: '2',
        },
        {
            title: '1.7福包：美团/大众点评使用中信信用卡支付随机立减最高99元',
            img: 'https://img.ithome.com/newsuploadfiles/thumbnail/2020/1/467261_240.jpg?r=1578383469343',
            time: '15:12',
            comment: '123',
            mold: '1',
        },
        {
            title: 'CES 2020：索尼PS5挤牙膏式官宣，5大特性公布',
            img: 'https://img.ithome.com/newsuploadfiles/thumbnail/2020/1/467236_240.jpg?r=1578387992570',
            time: '14:22',
            comment: '131',
            mold: '2',
        },
        {
            title: '1.7福包：美团/大众点评使用中信信用卡支付随机立减最高99元',
            img: 'https://img.ithome.com/newsuploadfiles/thumbnail/2020/1/467261_240.jpg?r=1578383469343',
            time: '15:12',
            comment: '123',
            mold: '1',
        },
        {
            title: 'CES 2020：索尼PS5挤牙膏式官宣，5大特性公布',
            img: 'https://img.ithome.com/newsuploadfiles/thumbnail/2020/1/467236_240.jpg?r=1578387992570',
            time: '14:22',
            comment: '131',
            mold: '2',
        },
        {
            title: '1.7福包：美团/大众点评使用中信信用卡支付随机立减最高99元',
            img: 'https://img.ithome.com/newsuploadfiles/thumbnail/2020/1/467261_240.jpg?r=1578383469343',
            time: '15:12',
            comment: '123',
            mold: '1',
        },
        {
            title: 'CES 2020：索尼PS5挤牙膏式官宣，5大特性公布',
            img: 'https://img.ithome.com/newsuploadfiles/thumbnail/2020/1/467236_240.jpg?r=1578387992570',
            time: '14:22',
            comment: '131',
            mold: '2',
        },
        {
            title: '1.7福包：美团/大众点评使用中信信用卡支付随机立减最高99元',
            img: 'https://img.ithome.com/newsuploadfiles/thumbnail/2020/1/467261_240.jpg?r=1578383469343',
            time: '15:12',
            comment: '123',
            mold: '1',
        },
        {
            title: 'CES 2020：索尼PS5挤牙膏式官宣，5大特性公布',
            img: 'https://img.ithome.com/newsuploadfiles/thumbnail/2020/1/467236_240.jpg?r=1578387992570',
            time: '14:22',
            comment: '131',
            mold: '2',
        },
        {
            title: '1.7福包：美团/大众点评使用中信信用卡支付随机立减最高99元',
            img: 'https://img.ithome.com/newsuploadfiles/thumbnail/2020/1/467261_240.jpg?r=1578383469343',
            time: '15:12',
            comment: '123',
            mold: '1',
        },
        {
            title: 'CES 2020：索尼PS5挤牙膏式官宣，5大特性公布',
            img: 'https://img.ithome.com/newsuploadfiles/thumbnail/2020/1/467236_240.jpg?r=1578387992570',
            time: '14:22',
            comment: '131',
            mold: '2',
        },
        {
            title: '1.7福包：美团/大众点评使用中信信用卡支付随机立减最高99元',
            img: 'https://img.ithome.com/newsuploadfiles/thumbnail/2020/1/467261_240.jpg?r=1578383469343',
            time: '15:12',
            comment: '123',
            mold: '1',
        },
        {
            title: 'CES 2020：索尼PS5挤牙膏式官宣，5大特性公布',
            img: 'https://img.ithome.com/newsuploadfiles/thumbnail/2020/1/467236_240.jpg?r=1578387992570',
            time: '14:22',
            comment: '131',
            mold: '2',
        },
        {
            title: '1.7福包：美团/大众点评使用中信信用卡支付随机立减最高99元',
            img: 'https://img.ithome.com/newsuploadfiles/thumbnail/2020/1/467261_240.jpg?r=1578383469343',
            time: '15:12',
            comment: '123',
            mold: '1',
        },
        {
            title: 'CES 2020：索尼PS5挤牙膏式官宣，5大特性公布',
            img: 'https://img.ithome.com/newsuploadfiles/thumbnail/2020/1/467236_240.jpg?r=1578387992570',
            time: '14:22',
            comment: '131',
            mold: '2',
        },
    ],
    // 当state发生改变时getters才会触发
    getters: {
        getSaledPrice: (state) => {
            return {
                un: state.count +3
            }
        }
    },
    // 必须通过mutations才能修改state的数据
    mutations: {
        add(state) {    // 这里的state就上面定义的state实例，这里可以传入两个参数第二个是接收传过来的数据
            // 对state实例进行操作
            state.count = state.count + 1;
        },
        jian(state) {
            state.count = state.count - 1;
        }
    }
})
// 导出实例
export default store