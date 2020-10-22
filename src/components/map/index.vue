<template>
<!-- 地图显示 -->
    <div class="map">
        <div class="map-container" id="map-container"></div> 
    </div>
</template>

<script>
import OilWell from '@/assets/image/well_cyjj.png'
import Well from '@/assets/image/well_zsj.png'
import bjIMG from '@/assets/image/aa.jpg'
export default {
    name: "mapView",
    components: {},
    data() {
        return {
            map: null,  
            OSMUrl: bjIMG,
            address:[39.25, 98.65],
            option:{
                color:'purple',
                fillColor:'purple',
                // radius:100,
                width:10,
                fillOpacity:1,
            },
            options:{
                color: 'blue',
                fillColor:'blue',
                weight:1
            },
            getzoom:12,
            oilwell:{
                iconUrl: OilWell,
                iconSize:     [25, 25], 
                iconAnchor:   [12, 20], 
                popupAnchor:  [-3, -76] 
            },
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
                {
                    address:[39.276, 98.666],
                    myIcon :{
                        html: "长212",
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
                    address:[39.298, 98.61],
                    myIcon :{
                        html: "长1-1",
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
                    address:[39.298, 98.58],
                    myIcon :{
                        html: "长103",
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
                    address:[39.308, 98.617],
                    myIcon :{
                        html: "长1-5",
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
                    address:[39.308, 98.65],
                    myIcon :{
                        html: "长102",
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
                    address:[39.308, 98.67],
                    myIcon :{
                        html: "长1-3",
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
                    address:[39.308, 98.685],
                    myIcon :{
                        html: " 长1-4",
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
                    address:[39.308, 98.59],
                    myIcon :{
                        html: "长1-2",
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
                // {
                //     address:[39.308, 98.603],
                //     myIcon :{
                //         html: "长1-6",
                //         className: 'my-div-icon',
                //         iconSize:45,
                //     },
                //     icons:{
                //         iconUrl: Well,
                //         iconSize:     [25, 25], 
                //         iconAnchor:   [12, 20], 
                //         popupAnchor:  [-3, -76] 
                //     }
                // },
                {
                    address:[39.26, 98.612],
                    myIcon :{
                        html: "长2-19",
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
                // {
                //     address:[39.26, 98.635],
                //     myIcon :{
                //         html: "长7",
                //         className: 'my-div-icon',
                //         iconSize:40,
                //     },
                //     icons:{
                //         iconUrl: Well,
                //         iconSize:     [25, 25], 
                //         iconAnchor:   [12, 20], 
                //         popupAnchor:  [-3, -76] 
                //     }
                // },
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
                {
                    address:[39.242, 98.648],
                    myIcon :{
                        html: "长2-15X",
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
                    address:[39.232, 98.658],
                    myIcon :{
                        html: "长19-1",
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
                    address:[39.255, 98.60],
                    myIcon :{
                        html: "长2-30",
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
                    address:[39.255, 98.622],
                    myIcon :{
                        html: "长2-33",
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
                    address:[39.235, 98.61],
                    myIcon :{
                        html: "长2-31",
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
                // {
                //     address:[39.24, 98.62],
                //     myIcon :{
                //         html: "长2-14",
                //         className: 'my-div-icon',
                //         iconSize:45,
                //     },
                //     icons:{
                //         iconUrl: Well,
                //         iconSize:     [25, 25], 
                //         iconAnchor:   [12, 20], 
                //         popupAnchor:  [-3, -76] 
                //     }
                // },
                // {
                //     address:[39.245, 98.605],
                //     myIcon :{
                //         html: "长2-11",
                //         className: 'my-div-icon',
                //         iconSize:45,
                //     },
                //     icons:{
                //         iconUrl: Well,
                //         iconSize:     [25, 25], 
                //         iconAnchor:   [12, 20], 
                //         popupAnchor:  [-3, -76] 
                //     }
                // },
                {
                    address:[39.219, 98.605],
                    myIcon :{
                        html: "长2-22",
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
                    address:[39.237, 98.587],
                    myIcon :{
                        html: "长2-28",
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
                    address:[39.23, 98.597],
                    myIcon :{
                        html: "长2-5",
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
                    address:[39.225, 98.585],
                    myIcon :{
                        html: "长2-4",
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
                    address:[39.227, 98.573],
                    myIcon :{
                        html: "长214",
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
                    address:[39.227, 98.56],
                    myIcon :{
                        html: "长209",
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
                // {
                //     address:[39.217, 98.568],
                //     myIcon :{
                //         html: "长202",
                //         className: 'my-div-icon',
                //         iconSize:45,
                //     },
                //     icons:{
                //         iconUrl: Well,
                //         iconSize:     [25, 25], 
                //         iconAnchor:   [12, 20], 
                //         popupAnchor:  [-3, -76] 
                //     }
                // },
                {
                    address:[39.21, 98.574],
                    myIcon :{
                        html: "长2-29",
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
                    address:[39.212, 98.592],
                    myIcon :{
                        html: "长2-9",
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
                    address:[39.20, 98.603],
                    myIcon :{
                        html: "长2-27",
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
                    address:[39.201, 98.589],
                    myIcon :{
                        html: "长2-38",
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
                    address:[39.209, 98.605],
                    myIcon :{
                        html: "长2-36",
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
                    address:[39.20, 98.56],
                    myIcon :{
                        html: "长2-35",
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
                    address:[39.20, 98.575],
                    myIcon :{
                        html: "长2-10",
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
                    address:[39.185, 98.640],
                    myIcon :{
                        html: "长210",
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
                    address:[39.21, 98.555],
                    myIcon :{
                        html: "长204",
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
                    address:[39.185, 98.56],
                    myIcon :{
                        html: "长2-16",
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
                    address:[39.21, 98.539],
                    myIcon :{
                        html: "长2-13",
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
                // {
                //     address:[39.20, 98.545],
                //     myIcon :{
                //         html: "长2-18",
                //         className: 'my-div-icon',
                //         iconSize:45,
                //     },
                //     icons:{
                //         iconUrl: Well,
                //         iconSize:     [25, 25], 
                //         iconAnchor:   [12, 20], 
                //         popupAnchor:  [-3, -76] 
                //     }
                // },
                // {
                //     address:[39.20, 98.53],
                //     myIcon :{
                //         html: "长206",
                //         className: 'my-div-icon',
                //         iconSize:45,
                //     },
                //     icons:{
                //         iconUrl: Well,
                //         iconSize:     [25, 25], 
                //         iconAnchor:   [12, 20], 
                //         popupAnchor:  [-3, -76] 
                //     }
                // },
                // {
                //     address:[39.185, 98.545],
                //     myIcon :{
                //         html: "长2-23",
                //         className: 'my-div-icon',
                //         iconSize:45,
                //     },
                //     icons:{
                //         iconUrl: Well,
                //         iconSize:     [25, 25], 
                //         iconAnchor:   [12, 20], 
                //         popupAnchor:  [-3, -76] 
                //     }
                // },
                {
                    address:[39.20, 98.51],
                    myIcon :{
                        html: "长2-20",
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
                // {
                //     address:[39.185, 98.505],
                //     myIcon :{
                //         html: "长2-24",
                //         className: 'my-div-icon',
                //         iconSize:45,
                //     },
                //     icons:{
                //         iconUrl:Well,
                //         iconSize:     [25, 25], 
                //         iconAnchor:   [12, 20], 
                //         popupAnchor:  [-3, -76] 
                //     }
                // },
                {
                    address:[39.185, 98.518],
                    myIcon :{
                        html: "长2-8",
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
                    address:[39.185, 98.575],
                    myIcon :{
                        html: "长205",
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
                    address:[39.185, 98.60],
                    myIcon :{
                        html: "长14",
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
                    address:[39.185, 98.655],
                    myIcon :{
                        html: "长12",
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

                // 3号管线的井
                
                {
                    address:[39.245,98.675],
                    myIcon :{
                        html: "长19",
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
                    address:[39.255, 98.69],
                    myIcon :{
                        html: "长2-3",
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
                    address:[39.28, 98.695],
                    myIcon :{
                        html: "长19-2",
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
                // {
                //     address:[39.278, 98.680],
                //     myIcon :{
                //         html: "长2-21",
                //         className: 'my-div-icon',
                //         iconSize:45,
                //     },
                //     icons:{
                //         iconUrl: Well,
                //         iconSize:     [25, 25], 
                //         iconAnchor:   [12, 20], 
                //         popupAnchor:  [-3, -76] 
                //     }
                // },
                {
                    address:[39.295, 98.685],
                    myIcon :{
                        html: "长101",
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
                    address:[39.225, 98.685],
                    myIcon :{
                        html: "长8",
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
                // {
                //     address:[39.265, 98.70],
                //     myIcon :{
                //         html: "长2",
                //         className: 'my-div-icon',
                //         iconSize:40,
                //     },
                //     icons:{
                //         iconUrl: Well,
                //         iconSize:     [25, 25], 
                //         iconAnchor:   [12, 20], 
                //         popupAnchor:  [-3, -76] 
                //     }
                // },
                {
                    address:[39.265, 98.714],
                    myIcon :{
                        html: "长2-32",
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
                    address:[39.19, 98.705],
                    myIcon :{
                        html: "长215",
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
                    address:[39.19, 98.735],
                    myIcon :{
                        html: "长308",
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
                    address:[39.205, 98.768],
                    myIcon :{
                        html: "长3-7X",
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
                    address:[39.19, 98.75],
                    myIcon :{
                        html: "长309",
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
                    address:[39.205, 98.735],
                    myIcon :{
                        html: "长3-16",
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
                    address:[39.205, 98.75],
                    myIcon :{
                        html: "长302X",
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
                    address:[39.237, 98.755],
                    myIcon :{
                        html: "长3-2",
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
                // {
                //     address:[39.24, 98.742],
                //     myIcon :{
                //         html: "长3-11",
                //         className: 'my-div-icon',
                //         iconSize:45,
                //     },
                //     icons:{
                //         iconUrl: Well,
                //         iconSize:     [25, 25], 
                //         iconAnchor:   [12, 20], 
                //         popupAnchor:  [-3, -76] 
                //     }
                // },
                {
                    address:[39.249, 98.765],
                    myIcon :{
                        html: "长3-6",
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
                    address:[39.252, 98.745],
                    myIcon :{
                        html: "长3-3",
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
                    address:[39.259, 98.728],
                    myIcon :{
                        html: "长2-12",
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
                // {
                //     address:[39.23, 98.765],
                //     myIcon :{
                //         html: "长3-4",
                //         className: 'my-div-icon',
                //         iconSize:45,
                //     },
                //     icons:{
                //         iconUrl: Well,
                //         iconSize:     [25, 25], 
                //         iconAnchor:   [12, 20], 
                //         popupAnchor:  [-3, -76] 
                //     }
                // },
                {
                    address:[39.23, 98.785],
                    myIcon :{
                        html: "长3-13",
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
                    address:[39.24, 98.79],
                    myIcon :{
                        html: "长3-5",
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
                // {
                //     address:[39.24, 98.777],
                //     myIcon :{
                //         html: "长3-9",
                //         className: 'my-div-icon',
                //         iconSize:45,
                //     },
                //     icons:{
                //         iconUrl: Well,
                //         iconSize:     [25, 25], 
                //         iconAnchor:   [12, 20], 
                //         popupAnchor:  [-3, -76] 
                //     }
                // },
                {
                    address:[39.26, 98.781],
                    myIcon :{
                        html: "长301",
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
                    address:[39.215, 98.778],
                    myIcon :{
                        html: "长3-1",
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
                    address:[39.225, 98.805],
                    myIcon :{
                        html: "长3-14",
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
                    address:[39.22, 98.79],
                    myIcon :{
                        html: "长3",
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
                    address:[39.235, 98.815],
                    myIcon :{
                        html: "长23",
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
                    address:[39.19, 98.80],
                    myIcon :{
                        html: "长3-8",
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
                    address:[39.205, 98.79],
                    myIcon :{
                        html: "长307",
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
                    address:[39.193, 98.78],
                    myIcon :{
                        html: "长3-18",
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
                    address:[39.19, 98.765],
                    myIcon :{
                        html: "长5",
                        className: 'my-div-icon',
                        iconSize:30,
                    },
                    icons:{
                        iconUrl: OilWell,
                        iconSize:     [25, 25], 
                        iconAnchor:   [12, 20], 
                        popupAnchor:  [-3, -76] 
                    }
                },
                {
                    address:[39.22, 98.82],
                    myIcon :{
                        html: "长3-10",
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
                    address:[39.205, 98.812],
                    myIcon :{
                        html: "长13",
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
                    address:[39.23, 98.83],
                    myIcon :{
                        html: "长18",
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
                    address:[39.212, 98.85],
                    myIcon :{
                        html: "长304",
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
                    address:[39.20, 98.845],
                    myIcon :{
                        html: "长3-15",
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
                    address:[39.19, 98.858],
                    myIcon :{
                        html: "长305",
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