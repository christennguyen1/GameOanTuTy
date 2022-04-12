import React from 'react'
import { connect } from 'react-redux'

 function MayTinhPlay(props) {
  return (
    <div>
    <div className="mr-5 ml-5 mt-5">
        <div className="speech-bubble">
            {props.mangMay.map((item) => {
                return (
                    <img src={item.hinhAnhMay} style={{
                        width: "90px",
                        height: "90px",
                    }} />
                )
            })}
        </div>
    </div>
    <img src="./Game oẳn xù xì/playerComputer.png" style={{ height: "160px" }} />
</div>
  )
}
let mapStateToProps = (state) => {
    return {
        mangMay: state.GameReducer.mangMay,
    }
}

export default connect(mapStateToProps, null)(MayTinhPlay)