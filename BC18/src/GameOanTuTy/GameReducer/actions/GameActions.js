import { BAO, BUA, KEO, LUA_CHON, PLAY_GAME } from "../constants/GameConstant"

export const playGameActions=()=>{
    return {
        type:PLAY_GAME,
    }
}

export const setChonActions=(value)=>{
    return {
        type:LUA_CHON,
        payload:value,
    }
}

// export const baoActions=()=>{
//     return {
//         type:BAO,
//     }
// }

// export const buaActions=()=>{
//     return {
//         type:BUA,
//     }
// }

// export const keoActions=()=>{
//     return {
//         type:KEO,
//     }
// }