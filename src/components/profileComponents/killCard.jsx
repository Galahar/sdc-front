import "../../components/profileComponents/style.css"
// import {icon} from "../../assets/illustrations/winrate-icon.png
import icon from '../../assets/illustrations/headshot-icon.png'
export default function KillCard(props)
{
    return(
        <div className='kill-card'>
            <div className="win-heading">
                {props.title}
            </div>
            <div style={{float:"left",width:"40%"}}>
           {/* { console.log("image = ",props.image)} */}
                <img src={props.image} height="40"  />
            </div>
            <div className="kill-percentage">
                {(props.avg)}
                <div style={{marginLeft:"15%",position:"relative", paddingTop:"10px",width:"60%"}}>
                    <div style={{height:"1px", background:"#484E5B",width:"130%"}}></div>
                    <div style={{background:"#F7AF3E", borderRadius:"100%", width:"6px", bottom:"-2px", height:"6px", position:"absolute", left:"54%"}}></div>
                </div>
            </div>
            <div className="clearfix"></div>
            <div style={{paddingTop:"16px"}}>
                <div class="total-stat">
                    <span class="total-label">{props.label_1}</span>
                    <span class="total-value">{props.text_1}</span>
                    {/* <div class="clearfix"></div> */}
                </div>
 
            </div>
            <div style={{paddingTop:"16px"}}>
                <div class="total-stat">
                    <span class="total-label">{props.label_2}</span>
                    <span class="total-value">{props.text_2}</span>
                    {/* <div class="clearfix"></div> */}
                </div>
            </div>
            <div style={{paddingTop:"16px"}}>
                <div class="total-stat">
                    <span class="total-label">{props.label_3}</span>
                    <span class="total-value">{props.text_3}</span>
                    {/* <div class="clearfix"></div> */}
                </div>
            </div>
           
        </div>
    )
}
// C:\Users\Adaxiom\Desktop\sdc-front\src\assets\illustrations\winrate-icon.png