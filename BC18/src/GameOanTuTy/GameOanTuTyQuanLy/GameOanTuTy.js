import React from 'react'
import { connect } from 'react-redux'
import bgGame from '../../assets/GameOanTuTi/bgGame.png'
import KetQua from './KetQua'
import MayTinhPlay from './MayTinhPlay'
import StartGame from './StartGame'

 function GameOanTuTy(props) {
  return (
    <div
    style={{
        width:"100vw",
        minHeight:"100vh",
        backgroundImage:`url(${bgGame})`,
        backgroundRepeat:" no-repeat",
        backgroundPosition:"top",
        backgroundSize:"cover",
    }}  className="bg-game"
    >
       <div className="container" >
            <div className="d-flex justify-content-between text-center">
              <StartGame />
              <KetQua />
              <MayTinhPlay />
            </div>
        </div>
    </div>
  )
}
let mapStateToProps = (state) => {
  return {
      ketQua: state.GameReducer.ketQua,
  }
}


export default connect(mapStateToProps, null)(GameOanTuTy)