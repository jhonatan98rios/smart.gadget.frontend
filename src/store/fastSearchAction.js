export default {
    fastSearch(text){
        //return { type: 'ASYNC_GET_DATA', payload: text }
        return { type: 'FAST_SEARCH', payload: text }
    }
}