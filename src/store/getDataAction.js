export default {
    getData(text){
        return { type: 'ASYNC_GET_DATA', payload: text }
    }
}