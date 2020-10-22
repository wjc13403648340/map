import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const createMap = (divId, options) => {
    let map = L.map(divId, options)
    return map
}

//添加创建地图的函数
const createTileLayer = (map, url, options) => {
    let tileLayer = L.tileLayer(url, options)
    tileLayer.addTo(map)
    return tileLayer
}

const api = (map,address,myIcon) => {
    let divIcon = L.divIcon(myIcon) 
    let marker = L.marker(address,{icon:divIcon})
    marker.addTo(map)
    marker.on('click',() => {
        // window.location.href = `http://61.149.254.174:1522/oil/oil/jsp/demo/singleWell.jsp?res_type=PC_CYJ&jh=${myIcon.html}`
        // console.log(myIcon.html)
    })
    return marker
}

const icons = (map,address,icon) => {
    let iconfont = L.icon(icon)
    let marker = L.marker(address,{icon:iconfont})
    marker.addTo(map)
    return marker
}

const createApi = (map,address,option) => {
    let coordinate = L.circle(address,option)
    coordinate.addTo(map)
    return coordinate
}

const drawLine = (map,latlngs,options) => {
    let polyline = L.polyline(latlngs,options)
    polyline.addTo(map);
    return polyline
}

const down = (el) => {
    // L.DomEvent.addListener(el, 'click', function (e) {
    //     L.DomEvent.preventDefault(e);
    // });
    // L.DomEvent.addListener(el, 'mousedown dblclick', function (e) {
        // L.DomEvent.stopPropagation(e);
    // });
}

export default {
    createMap,
    createTileLayer,
    createApi,
    drawLine,
    api,
    icons,
    down
}