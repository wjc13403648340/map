<template>
<!-- 地图显示 -->
    <div class="map">
        <div class="map-container" id="map-container"></div> 
    </div>
</template>

<script>
// 油井对应的图标
import OilWell from '@/assets/image/well_cyjj.png'
// 水井对应的图标
import Well from '@/assets/image/well_zsj.png'
// 背景图
import bjIMG from '@/assets/image/aa.jpg'
export default {
    name: "mapView",
    components: {},
    data() {
        return {
            map: null,  
            OSMUrl: bjIMG,
            address:[39.25, 98.65],// 中心点
            // 节点对应的颜色
            option:{
                color:'purple',
                fillColor:'purple',
                width:10,
                fillOpacity:1,
            },
            // 线条的连接色
            options:{
                color: 'blue',
                fillColor:'blue',
                weight:1
            },
            // 默认展示的地图层级
            getzoom:12,
            // 油井图标的大小
            oilwell:{
                iconUrl: OilWell,
                iconSize:     [25, 25], 
                iconAnchor:   [12, 20], 
                popupAnchor:  [-3, -76] 
            },
            // 水井图标的大小
            well:{
                iconUrl: Well,
                iconSize:     [25, 25], 
                iconAnchor:   [12, 20], 
                popupAnchor:  [-3, -76]       
            },
            // 集输管线
            // 3号管线
            arr:[[39.25, 98.65],[39.25, 98.67],[39.245, 98.69],[39.24, 98.71],[39.235, 98.73],[39.23, 98.75],[39.225, 98.77],[39.22, 98.79],[39.215, 98.81],[39.21, 98.83],[39.205, 98.85],[39.20, 98.87]],
            // 1号管线
            arr1:[[39.25, 98.65],[39.26, 98.65],[39.27, 98.65],[39.28, 98.65],[39.308, 98.65],[39.308, 98.65],[39.308, 98.615]],
            // 2号管线
            arr2:[[39.25, 98.65],[39.245, 98.64],[39.24, 98.63],[39.235, 98.62],[39.23, 98.61],[39.225, 98.60],[39.22, 98.59],[39.215, 98.58],[39.21, 98.57],[39.205, 98.56],[39.20, 98.55],[39.195, 98.54],[39.19, 98.53],[39.185, 98.52],],

            // 3号管线分支
            branchArr1:[[39.21, 98.75],[39.225, 98.752],[39.235, 98.748],[39.245, 98.74]],
            branchArr2:[[39.22, 98.73],[39.20, 98.74]],
            // 1号管线的分支
            branchArray:[[39.27, 98.65],[39.26, 98.64],[39.26, 98.62]],
            // 2号管线的分支
            branchArrays:[[39.20, 98.57],[39.195, 98.585],[39.19, 98.60],[39.185, 98.615],[39.18, 98.630]],

            myIcon :{
                html: "中心",
                className: 'my-div-icon',
                iconSize:30,
                
            },

            wellOptions:{
                color:'red',
                fillColor:'red',
                radius:50,
                fillOpacity:1,
            },

            wellData:[
                // 1号管线的井
                {
                    address:[39.27, 98.64],
                    myIcon :{
                        html: "长2-17",
                        className: 'my-div-icon',
                        iconSize:45,
                    },
                    icons:{
                        iconUrl: OilWell,
                        iconSize:     [25, 25], 
                        iconAnchor:   [12, 20], 
                        popupAnchor:  [-3, -76] 
                    }
                },
                {
                    address:[39.278, 98.655],
                    myIcon :{
                        html: "长2-1",
                        className: 'my-div-icon',
                        iconSize:45,
                    },
                    icons:{
                        iconUrl: OilWell,
                        iconSize:     [25, 25], 
                        iconAnchor:   [12, 20], 
                        popupAnchor:  [-3, -76] 
                    }
                },
   
                // 2号管线的井
                {
                    address:[39.252, 98.642],
                    myIcon :{
                        html: "长9",
                        className: 'my-div-icon',
                        iconSize:40,
                    },
                    icons:{
                        iconUrl: OilWell,
                        iconSize:     [25, 25], 
                        iconAnchor:   [12, 20], 
                        popupAnchor:  [-3, -76] 
                    }
                },
               
                {
                    address:[39.238, 98.637],
                    myIcon :{
                        html: "长2-37",
                        className: 'my-div-icon',
                        iconSize:45,
                    },
                    icons:{
                        iconUrl: OilWell,
                        iconSize:     [25, 25], 
                        iconAnchor:   [12, 20], 
                        popupAnchor:  [-3, -76] 
                    }
                },

                // 3号管线的井

                {
                    address:[39.23, 98.87],
                    myIcon :{
                        html: "长4",
                        className: 'my-div-icon',
                        iconSize:40,
                    },
                     icons:{
                        iconUrl: OilWell,
                        iconSize:     [25, 25], 
                        iconAnchor:   [12, 20], 
                        popupAnchor:  [-3, -76] 
                    }
                },     
            ]
        }
    },
    watch:{
        getzoom(val){
            console.log(val)
        }
    },
    methods:{
        renders(){ 
                // 井绘制
                for(var j = 0;j < this.wellData.length; j++){
                    // this.$utils.map.createApi(this.map, this.wellData[j].address,this.wellOptions);
                    if(this.wellData[j].icons){
                        this.$utils.map.icons(this.map,this.wellData[j].address,this.wellData[j].icons)
                    }
                    this.$utils.map.api(this.map,this.wellData[j].address,this.wellData[j].myIcon)

                }
        },
        // 连接点与线条的绘制
        drawBranch(array,map,option,options){
            if(array){
                for(var i = 0 ; i< array.length ;i++){
                    this.$utils.map.createApi(map, array[i],option);
                }
                this.$utils.map.drawLine(map, array,options);
            }
        }
    },
    mounted() {
        // 获取地图的对应dom节点
        let mapContainer = document.getElementById('map-container')
        this.map = this.$utils.map.createMap("map-container");
        // 设施地图视图 中心位置
        this.map.setView([39.25, 98.65], 12);
        let timer = null
        this.getzoom = this.map.getZoom()
        setInterval(() => {
            console.log(this.map.getZoom())
            if(this.map.getZoom() < 10){
                this.wellData = []
            }

        },1000)
        
        
        // 加载 open street map和mapbox 图层服务
        this.$utils.map.api(this.map,this.address,this.myIcon)
       
        // this.map.dragging.disable()
        // console.log(this.map)
        // this.map.doubleClickZoom = false
        // this.map.scrollWheelZoom = false
        // this.$utils.map.down(mapContainer)

        this.$utils.map.createTileLayer(this.map, this.OSMUrl);
        // 3号管线
        for(var i = 0 ; i< this.arr.length ;i++){
            this.$utils.map.createApi(this.map, this.arr[i],this.option);
        }
        this.$utils.map.drawLine(this.map, this.arr,this.options);
        // 3号管线的分支1
        // this.$utils.map.drawLine(this.map, this.branchArr2,this.options);
        // this.drawBranch(this.arr,this.map,this.option,this.options)

        // this.drawBranch(this.branchArr1,this.map,this.option,this.options)
        // this.drawBranch(this.branchArr2,this.map,this.option,this.options)
        // this.drawBranch(this.branchArr3,this.map,this.option,this.options)



        // 1号管线
        this.drawBranch(this.arr1,this.map,this.option,this.options)
        // 1号管线的分支1
        // this.drawBranch(this.branchArray,this.map,this.option,this.options)


        // 2号管线
        this.drawBranch(this.arr2,this.map,this.option,this.options)

        // 2号管线的分支1
        // this.drawBranch(this.branchArrays,this.map,this.option,this.options)
        // this.drawBranch(this.branchArrays1,this.map,this.option,this.options)
        // this.drawBranch(this.branchArrays2,this.map,this.option,this.options)

        this.$nextTick(() => {
            let zoom = this.map._zoom
            this.renders(zoom)
           
        })   

    }
}
</script>
<style lang="scss">
.map{
    width: 100%;
    height: 100%;
    position: relative;
}
.map-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  
  
}
.my-div-icon {
    height: 35px;
    padding-top: 25px;
    box-sizing: border-box;
}
.leaflet-top {
    display: none;
}
</style>