import "./style.css"
import Card from 'react-bootstrap/Card';
import champ from "../../assets/illustrations/champions/aatrox.jpg"
const SingleCard =(props)=>{
    return(
        props.data != undefined?
            //  <div className="row" >
            <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3" >
                <div className="image-flip" >
                    <div className="mainflip flip-0">
                        <div className="frontside">
                            <div className="card">
                                <div >
                                {/* {console.log("DATA : ",props.data != undefined? props.data.name : null)} */}
                                    <img  src={"./assets/"+props.data.name+".jpg"} alt="card image"/>
                                    <h3 className="card-title text-center">{props.data.name}</h3>
                                    {/* <p className="card-text" style={{color:"black"}}>This is basic card with image on top, title, description and button.</p> */}
                                    {/* <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center " >
                                    <h3 className="card-title">{props.data.name}</h3>
                                    <div className="row" >
                                       {/* <div> */}
                                        <h4>Presence:</h4>
                                        <h4 className="mb-4">{props.data.presence}</h4>
                                        {/* </div> */}
                                    </div>
                                    <hr></hr>
                                    <div className="row" >
                                        <div className="col-4">
                                            <h5>Pick%:</h5>
                                        </div>
                                        <div className="col-4">
                                            <h5>Ban%:</h5>
                                        </div>
                                        <div className="col-4">
                                            <h5>Win%:</h5>
                                        </div>
                                    </div>
                                    <div className="row" >
                                        <div className="col-4">
                                            <h5>{props.data.pick_percentage}</h5>
                                        </div>
                                        <div className="col-4">
                                            <h5>{props.data.ban_percentage}</h5>
                                        </div>
                                        <div className="col-4">
                                            <h5>{props.data.win_percentage}</h5>
                                        </div>
                                        
                                    </div>
                                    <hr></hr>
                                    <div className="row" >
                                        <div className="col-4">
                                            <h5>Picks:</h5>
                                        </div>
                                        <div className="col-4">
                                            <h5>Bans:</h5>
                                        </div>
                                        <div className="col-4">
                                            <h5>Wins:</h5>
                                        </div>
                                    </div>
                                    <div className="row" >
                                        <div className="col-4">
                                            <h5>{props.data.picks}</h5>
                                        </div>
                                        <div className="col-4">
                                            <h5>{props.data.bans}</h5>
                                        </div>
                                        <div className="col-4">
                                            <h5>{props.data.wins}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <></>
        // </div>
        
    )
}
export default function ChampCard(props){
    return(
        <>
        {/* <section id="team" className="pb-5"> */}
    {/* <div className="container"> */}
              <div className="row">
              <h1 className="section-title" style={{ fontFamily: 'Yusei Magic' }}>Champions</h1>
              {
                  props.championsData !=null ?
                  (props.championsData).map((row,i)=>{
                        return(
                            <SingleCard key={i} data={row} /> 
                        )
                  })
                  : <></>
              }
              {/* <SingleCard champName="aatrox" champImage={"./assets/"+"aatrox"+".jpg"} presence="14%" />
              <SingleCard champName="ahri" champImage={"./assets/"+"ahri"+".jpg"} presence="10%" />
              <SingleCard champName="akali" champImage={"./assets/"+"akali"+".jpg"} presence="13%" />
              <SingleCard champName="akshan" champImage={"./assets/"+"akshan"+".jpg"} presence="2%"/>

              <SingleCard champName="alistar" champImage={"./assets/"+"alistar"+".jpg"} />
              <SingleCard champName="amumu" champImage={"./assets/"+"amumu"+".jpg"} />
              <SingleCard champName="anivia" champImage={"./assets/"+"anivia"+".jpg"} />
              <SingleCard champName="annie" champImage={"./assets/"+"annie"+".jpg"} /> */}
              </div>
       
    {/* </div> */}
        {/* </section> */}
        </>
    )

}