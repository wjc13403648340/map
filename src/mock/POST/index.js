import HOME from './contain/home'
import PRODUCTION from './contain/production'


const interfaces = [
    {
        url:'/webservice/util.asmx/getJsgxJH',
        data:HOME
    },
    {
        url:'/oilSearch/OilSearch.asmx/GetNewestGt',
        data:PRODUCTION
    }
];

export default interfaces;