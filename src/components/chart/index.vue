<template>
<!-- echarts -->
    <div class="echarts"> 
        <div class="pic-upload" v-for="(item,index) in list" :key="index">
            <!-- 图标容器 -->
            <div class="main">
                <div :class="name" ref="digname"></div>
            </div>
            <div class="echarts-data">
                <ul>
                <li>冲程(m)</li>
                <li>{{item.CC}}</li>
                </ul>
                <ul>
                <li>冲次(r/min)</li>
                <li>{{item.CC1}}</li>
                </ul>
                <ul>
                <li>最大载荷(KN)</li>
                <li>{{item.XDZDZH}}</li>
                </ul>
                <ul>
                <li>最小载荷(KN)</li>
                <li>{{item.XDZXZH}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
let charts = null;
import './style.scss'
export default {
    name:'charts',
    props:['params'],
    data() {
        return {
            datas1:'',
            datas:'',
            // 定义的第一组数据
            opinion: [],
            // 定义的第二组数据
            opinionData: [],
            list:[],
            str:'',
            MEASURE:'',
            name:'main'+ this.idname(),
            title:'长2-1',
            list:[]
        }
    }, 
    methods: {
        idname(){
            return this.params.JH
        },
        // 封装方法,稍后执行
        drawLine() {
            let mydigname = document.getElementsByClassName(this.name)
            // console.log(mydigname)
            if(mydigname && mydigname.length){
                for(var i = 0; i < mydigname.length ; i++){
                    this.charts = this.$echarts.init(mydigname[i])
                    this.charts.setOption({  
                        title:{
                            text:this.title,
                            textStyle:{
                                fontSize:18,
                            },
                        },
                        // 提示
                        tooltip: {
                            trigger: 'axis',
                            extraCssText:'width:150px;height:auto;',
                            transitionDuration:0,//echart防止tooltip的抖动
                        },
                        legend: {
                            data: [ '上行载荷', '下行载荷']
                        },
                        // 网格大小,距离左,右,下的距离,类似于padding
                        grid: {
                            top:'25%',
                            left: '5%',
                            right: '20%',
                            bottom:'3%',
                            containLabel: true
                        },
                        //横坐标的参数 
                        xAxis: {
                            // 类型
                        type: 'value',
                            name:'位移m',
                            nameLocation:'end',
                        },
                        // 纵坐标参数
                        yAxis: {
                            type: 'value',
                            name:'载荷 KN',
                        },
                        borderColor :'#000',
                        // 数据列表 可定义多个数据
                        series: [
                            {
                                name: '上行载荷',
                                type: 'line',
                                smooth: true,
                                symbol: "none",
                                stack: '11',
                                itemStyle : {  
                                        normal : {  
                                            lineStyle:{  
                                                color:'red'  
                                            }  
                                        }  
                                    },
                                data: this.opinion
                            },
                            {
                                name:'下行载荷',
                                type: 'line',
                                smooth: true,
                                symbol: "none",
                                itemStyle : {  
                                        normal : {  
                                            lineStyle:{  
                                                color:'blue'  
                                            }  
                                        }  
                                    },
                                data: this.opinionData
                            }
                        ]
                    })
                }
            }
            
        },
        // 对数据进行处理合成二维数组
        getArr(a,b){
            let arr = []
            for(let i = 0 ; i < a.length; i++){
                let j = i
                let temp = []
                temp.push(a[i],b[j])
                arr.push(temp)
            }
            return arr
        },
        // 获取数组中最大值的下标
        getMax(arr){
            let max = 0
            for(let k = 0;k < arr.length; k ++){
                if(arr[k] > arr[max]){
                    max = k
                }
            }
            return max
        },
        getMin(arr){
            let min = arr.sort().slice(0,1).toString()
            return min
        },
        // 获取下行数组
        getDownArr(arr,brr){
            let getDownArr = []
            let max = this.getMax(arr)
            let arrx = arr.slice(max).reverse()
            let arry = brr.slice(max).reverse()
            getDownArr = this.getArr(arrx,arry)
            return getDownArr
        },
        // 获取上行数组
        getUpArr(arr,brr){
            let getUpArr = []
            let max = this.getMax(arr)
            let arrx = arr.slice(0 , max)
            let arry = brr.slice(0 , max)
            getUpArr = this.getArr(arrx,arry)
            return getUpArr
        },
        
    },
    created(){
        this.list.push(this.params)
        this.datas =  this.params.DISPLACEMENT 
        this.datas1 =  this.params.DISP_LOAD 
        this.title = this.params.JH
        if(this.datas && this.datas1){
            let gtdataX = this.datas.split(';') 
            let gtdataY = this.datas1.split(';')
            this.opinion = this.getUpArr(gtdataX,gtdataY)
            this.opinionData = this.getDownArr(gtdataX,gtdataY)
        }

    },    
    //调用
    mounted() {
        this.$nextTick(function() {
            setTimeout(() => {
                this.drawLine();
            },10)
        })
    }
}
</script>