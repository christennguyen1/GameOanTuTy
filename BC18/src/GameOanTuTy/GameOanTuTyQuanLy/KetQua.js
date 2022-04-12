import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { playGameActions } from '../GameReducer/actions/GameActions'

 function KetQua(props) {
  return (
    <div className="mr-5">
         <p style={{ textAlign: "center", color: "orange", fontSize: "50px", paddingLeft: "80px",paddingRight: "80px" }}>
    {props.ketQua}</p>
    <p style={{ textAlign: "center", color: "#69ed6e", fontSize: "50px" }}>
        Số lượt chơi: <span style={{ textAlign: "center", color: "orange", fontSize: "50px" }}>{props.soLuotChoi}</span></p>
    <p style={{ textAlign: "center", color: "#69ed6e", fontSize: "50px" }}>
        Số lượt thắng: <span style={{ textAlign: "center", color: "orange", fontSize: "50px" }}>{props.soLuotThang}</span></p>
    <button className="btn btn-success"
        onClick={() => { props.handlePlayGame() }}
    >Play Game</button>
</div>
  )
}

let mapStateToProps = (state) => {
    return {
        soLuotChoi: state.GameReducer.soLuotChoi,
        soLuotThang: state.GameReducer.soLuotThang,
        ketQua: state.GameReducer.ketQua,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        handlePlayGame: () => {
            dispatch(playGameActions())
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(KetQua)
