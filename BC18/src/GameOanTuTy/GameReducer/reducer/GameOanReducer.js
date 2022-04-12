import { randomIntFromInterval } from "../../../util/randomGame";
import { BAO, BUA, KEO, LUA_CHON, PLAYGAME, PLAY_GAME } from "../constants/GameConstant";

let initailState = {
    mangChoi: [
        {
            hinhAnhChon: "./Game oẳn xù xì/black.jpg",
            giaTriChon: 1,
        },
    ],
    mangMay: [
        {
            hinhAnhMay: "./Game oẳn xù xì/black.jpg",
            giaTriMay: 1,
        },
    ],
    soLuotChoi: 0,
    soLuotThang: 0,
    luaChon: null,
    ketQua:"I'm iron man, i love you 3000!!",
}
export const GameReducer = (state = initailState, action) => {
    switch (action.type) {
        case LUA_CHON: {
            let cloneArr = { ...state };
            let newMangChon;
            let newMangMay;
            if (action.payload === BAO) {
                newMangChon = cloneArr.mangChoi.map((item) => {
                    return {
                        hinhAnhChon: `./Game oẳn xù xì/1.png`,
                        giaTriChon: 1,
                    }
                })
                newMangMay = cloneArr.mangMay.map((item) => {
                    return {
                        hinhAnhMay: "./Game oẳn xù xì/black.jpg",
                        giaTriMay: 1,
                    }
                })
            }
            else if (action.payload === BUA) {
                newMangChon = cloneArr.mangChoi.map((item) => {
                    return {
                        hinhAnhChon: `./Game oẳn xù xì/2.png`,
                        giaTriChon: 2,
                    }
                })
                newMangMay = cloneArr.mangMay.map((item) => {
                    return {
                        hinhAnhMay: "./Game oẳn xù xì/black.jpg",
                        giaTriMay: 1,
                    }
                })
            }
            else {
                newMangChon = cloneArr.mangChoi.map((item) => {
                    return {
                        hinhAnhChon: `./Game oẳn xù xì/3.png`,
                        giaTriChon: 3,
                    }
                })
                newMangMay = cloneArr.mangMay.map((item) => {
                    return {
                        hinhAnhMay: "./Game oẳn xù xì/black.jpg",
                        giaTriMay: 1,
                    }
                })
            }
            cloneArr.mangChoi = newMangChon;
            cloneArr.mangMay = newMangMay;
            state = cloneArr;
            return { ...state, luaChon: action.payload }
        }
        case PLAY_GAME: {
            let cloneArr = { ...state };
            let count = 0;
            let newMang = cloneArr.mangMay.map((item) => {
                let random = randomIntFromInterval(1, 3);
                count = random;
                return {
                    hinhAnhMay: `./Game oẳn xù xì/${random}.png`,
                    giaTriMay: random,
                }
            })
            if (!cloneArr.luaChon) {
                alert("Bạn chưa chọn");
                return {...state}
            }
            else {
                cloneArr.soLuotChoi++;
                if (cloneArr.luaChon === BAO && count === 2) {
                    cloneArr.soLuotThang++;
                    cloneArr.ketQua="I'm iron man, i love you 3000!!";
                }
                else if (cloneArr.luaChon === BUA && count === 3) {
                    cloneArr.soLuotThang++;
                    cloneArr.ketQua="I'm iron man, i love you 3000!!";
                }
                else if (cloneArr.luaChon === KEO && count === 1) {
                    cloneArr.soLuotThang++;
                    cloneArr.ketQua="I'm iron man, i love you 3000!!";
                }
                else if (cloneArr.luaChon === KEO && count === 3) {
                    cloneArr.ketQua="Bạn hòa";
                }
                else if (cloneArr.luaChon === BAO && count === 1) {
                    cloneArr.ketQua="Bạn hòa";
                }
                else if (cloneArr.luaChon === BUA && count === 2) {
                    cloneArr.ketQua="Bạn hòa";
                }
                else {
                    cloneArr.ketQua="Bạn thua";
                }
                cloneArr.mangMay = newMang;
                state = cloneArr;
            }
            return { ...state };
        }
        default: {
            return { ...state };
        }
    }
}