import {createStore} from 'redux';


//Action generators

const incrementCount=({incrementBy=1}={})=>{
    return{
        type:'INCREMENT',
        incrementBy
    }
}

const decrementBy=({decrementBy=1}={})=>{
    return{
        type:'DECREMENT',
        decrementBy
    }
}

//setCount
    const setCount=({count=100}={})=>{
        return{
            type:'SET',
            count
        }
    }

//resetCount
    const resetCount=()=>{
        return{
            type:'RESET',
        }
    }


const store=createStore((state={count:0},action)=>{
   switch(action.type){
       case 'INCREMENT':
        return{
            count:state.count+action.incrementBy
        }
        case 'DECREMENT':
            return{
                count:state.count-action.decrementBy
            }
        case 'SET':
            return{
                count:action.count
            }

        case 'RESET':
            return{
                count:0
            }
       default:
       return state
   }})
   
   
store.subscribe(()=>{
    console.log(store.getState())
})

// store.dispatch({
//     type:'INCREMENT',
//     incrementBy:5
// })

store.dispatch(incrementCount({incrementBy:5}))

store.dispatch(incrementCount())
store.dispatch({
    type:'DECREMENT'
})

store.dispatch({
    type:'RESET'
})

store.dispatch({
    type:'DECREMENT',
    decrementBy:10
})

store.dispatch({
    type:'SET',
    count:100
})

store.dispatch(incrementCount({}))

store.dispatch(decrementBy({decrementBy:10}))

store.dispatch(setCount())

store.dispatch(resetCount())
