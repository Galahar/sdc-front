import "../../components/profileComponents/style.css"
// import {icon} from "../../assets/illustrations/winrate-icon.png
import icon from '../../assets/illustrations/winrate-icon.png'
export default function ScoreCard(playerData)
{
    // console.log("playerData",playerData.playerData)
    var percentageValue =Math.round(parseFloat((playerData.playerData.win).slice(0,-1)) *1.5);
    
    var test = percentageValue + "%"
    // console.log("percentageValue",test)
    return(
        <div className='win-card'>
            <div className="win-heading">
                Win Rate
            </div>
            <div style={{float:"left",width:"40%"}}>
                <img src={icon} height="36"  />
            </div>
            <div className="win-percentage">
                {playerData.playerData.win}
                <div style={{marginLeft:"15%",position:"relative", paddingTop:"10px",width:"60%"}}>
                    <div style={{height:"1px", background:"#484E5B",width:"150%"}}></div>
                    <div style={{background:"#F7AF3E", borderRadius:"100%", width:"6px", bottom:"-2px", height:"6px", position:"absolute", left:test }}></div>
                </div>
            </div>
            <div className="clearfix"></div>
            <div style={{paddingTop:"16px"}}>
                <div className="total-stat">
                    <span className="total-label">Played</span>
                    <span className="total-value">{playerData.playerData.games}</span>
                    {/* <div className="clearfix"></div> */}
                </div>
 
            </div>
            <div style={{paddingTop:"16px"}}>
                <div className="total-stat">
                    <span className="total-label">Won</span>
                    <span className="total-value">{playerData.playerData.wins}</span>
                    {/* <div className="clearfix"></div> */}
                </div>
            </div>
            <div style={{paddingTop:"16px"}}>
                <div className="total-stat">
                    <span className="total-label">Lost</span>
                    <span className="total-value">{playerData.playerData.losses}</span>
                    {/* <div className="clearfix"></div> */}
                </div>
            </div>
            <div style={{paddingTop:"16px"}}>
                <div className="total-stat">
                    <span className="total-label">Game Time</span>
                    <span className="total-value">{playerData.playerData.game_time}</span>
                    {/* <div className="clearfix"></div> */}
                </div>
            </div>
        </div>
    )
}
// C:\Users\Adaxiom\Desktop\sdc-front\src\assets\illustrations\winrate-icon.png