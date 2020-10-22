<template>
<!-- 走马灯轮播 -->
  <div class="swiper-container" id="case4">
        <div class="swiper-wrapper">
            <div v-for="(item,index) in gtList" :key="index" class="swiper-slide">
            <!-- <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div> -->
                <!-- {{item}} -->
                <JChart :params="item"/>
            </div>
        </div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
// import Chart from "@/components/chart";
import { post } from "@/api";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import './style.scss'
export default {
    name:'Swiper',
    data(){
        return {
            gtList:[]
        }
    },
    mounted() {   
        var swiper = new Swiper('#case4',{
            loop: true, //允许从第一张到最后一张，或者从最后一张到第一张  循环属性

            slidesPerView: 4, // 设置显示五张
            freeMode: true, // 使幻灯片滑动时不止滑动一格，且不会自动贴合 
            speed: 3000, //设置过度时间
            grabCursor: true, //鼠标样式根据浏览器不同而定 
            autoplay: {
                delay: 1,
            },
            
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
            
            autoplayDisableOnInteraction : false,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            autoplayDisableOnInteraction : false,
            lazyLoading : true,  //启动延迟加载
            
        })

        var comtainer = document.getElementById('case4');
        comtainer.onmouseenter = function () {
            swiper.stopAutoplay();
        };
        comtainer.onmouseleave = function () {
            swiper.startAutoplay();
        }
    },
    methods:{
        setArrData(arr) {
            let num = Math.ceil(arr.length / 1);  // 2
            let temp = new Array(num);
            for (let i = 0; i < num; i++) {
                temp[i] = arr.slice(i, i+1);
            }
            return temp
        }
    },
    created(){
        post('/oilSearch/OilSearch.asmx/GetNewestGt').then(res => {
            if(res && res.length){
                this.gtList = res
            }
        })
    }
}
</script>