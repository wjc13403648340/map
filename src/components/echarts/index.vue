<template>
<!-- echarts -->
    <div class="echarts"> 
        <h3>图表展示</h3>
        <!-- 图标容器 -->
        <div class="mains"></div> 
    </div>
</template>

<script>
import './style.scss'
import echarts from 'echarts'
export default {
    name:'echarts',
    props:['params'],
    data() {
        return {
            charts: '',
            datas:'',
            datas1:'',
            // 定义的第一组数据
            opinion: [],
            // 定义的第二组数据
            opinionData: [],
            str:'',
            MEASURE:'',
        }
    },
    
    methods: {
        // 封装方法,稍后执行
        drawLine(id) {
            this.charts = echarts.init(document.getElementsByClassName(id)[0])
            
            this.charts.setOption({
                
                // 提示
                tooltip: {
                    trigger: 'axis'
                },
                

                legend: {
                    data: [ 'XXX']
                },
                // 网格大小,距离左,右,下的距离,类似于padding
                grid: {
                    top:'20%',
                    left: '10%',
                    right: '15%',
                    bottom:'20%',
                    containLabel: true
                },
                //横坐标的参数 
                xAxis: {
                    // 类型
                    type: 'value',
                    name:'位移m',
                    nameLocation:'end',
                    show:false
                },
                // 纵坐标参数
                yAxis: {
                    type: 'value',
                    name:'载荷 KN',
                    show:false
                },
                 borderColor :'#000',
                // 数据列表 可定义多个数据
                series: [
                    {
                        name: 'XXX',
                        // line为折线图类型 pie为饼图类型  bar为柱状图列表
                        type: 'pie',
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
                    }
                ]
            })
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
        if(this.params){
            let objList = this.params[0]
            this.str = objList.ZDJG
            this.MEASURE = objList.MEASURE
            this.datas = objList.DISPLACEMENT
            this.datas1 = objList.DISP_LOAD
            if(this.datas && this.datas1){
                let gtdataX = this.datas.split(';')
                let gtdataY = this.datas1.split(';')
                this.opinion = this.getUpArr(gtdataX,gtdataY)
                this.opinionData = this.getDownArr(gtdataX,gtdataY)
            }
            
        }
        
    },    
    //调用
    mounted() {
        this.$nextTick(function() {
            this.drawLine('mains')
        })
    }
}
</script>

