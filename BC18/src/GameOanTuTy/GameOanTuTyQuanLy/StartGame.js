import React from 'react'
import '../../assets/GameOanTuTi/buble.css'
import { connect } from "react-redux"
import { baoActions, buaActions, keoActions, playGameActions, setChonActions } from '../GameReducer/actions/GameActions'
import { BAO, BUA, KEO } from '../GameReducer/constants/GameConstant'

function StartGame(props) {
    return (
                <div >
                    <div className="mr-5 ml-5 mt-5">
                        <div className="speech-bubble">
                            {props.mangChon.map((item) => {
                                return (
                                    <img src={item.hinhAnhChon} style={{
                                        width: "90px",
                                        height: "90px",
                                    }} />
                                )
                            })}
                        </div>
                    </div>
                    <img src="./Game oẳn xù xì/player.png" style={{ height: "160px" }} />
                    <div>
                        <button className="mr-2 border border-danger"
                            onClick={() => { props.handleSetChon(KEO) }}
                        > <img src="./Game oẳn xù xì/3.png" style={{ width: "40px" }} /> </button>
                        <button className="mr-2 border border-light"
                            onClick={() => { props.handleSetChon(BUA) }}
                        > <img src="./Game oẳn xù xì/2.png" style={{ width: "40px" }} /> </button>
                        <button className="mr-2 border border-light"
                            onClick={() => { props.handleSetChon(BAO) }}
                        > <img src="./Game oẳn xù xì/1.png" style={{ width: "40px" }} /> </button>
                    </div>
                </div>
    )
}

let mapStateToProps = (state) => {
    return {
        mangChon: state.GameReducer.mangChoi,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        handleSetChon: (type) => {
            dispatch(setChonActions(type))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StartGame)