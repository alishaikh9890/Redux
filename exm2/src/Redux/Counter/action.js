export const INC_COUNT = "INC_COUNT";
export const DEC_COUNT = "DEC_COUNT";
export const RESET_COUNT = "RESET_COUNT";



export const incCount = (data) =>({
    type: INC_COUNT,
    payload : data
})

export const decCount =(data) =>({
    type: DEC_COUNT,
    payload:data
})

export const resetCount = (data) =>({
     type: RESET_COUNT
})
