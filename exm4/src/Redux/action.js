export const INC_COUNT = "INC_COUNT";
export const DEC_COUNT = "DEC_COUNT";

export const incCount = (payload) => ({
    type : "INC_COUNT",
    payload 
})

export const decCount = (payload) => ({
    type : "DEC_COUNT",
    payload 
})