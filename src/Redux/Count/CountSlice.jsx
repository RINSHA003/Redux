import {createSlice} from '@reduxjs/toolkit'

export const CountSlice=createSlice({
    name:'count',
    initialState:{
        value:0
    },
    reducers:{
        increment_count:(state)=>{
            state.value +=1
        },
        decrement_count:(state)=>{
            state.value -=1
        }
    }
})

export const {increment_count,decrement_count} = CountSlice.actions

export default CountSlice.reducerx