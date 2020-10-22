import { mock } from 'mockjs'
import POST from './POST'
import GET from './GET'
// mock('/info/list', 'post', )

function handleRequest(interfaceList, requestTpe) {
    interfaceList.forEach(item => {
        const {
            url,
            data
        } = item
        mock(url, requestTpe, data)
    })
}
handleRequest(POST, 'post')
handleRequest(GET, 'get')