import { VictoryPie } from 'victory';
import "../../components/profileComponents/style.css"
export default function AvgKdaCanvas(playerData)
{
    return(
        <div className='avg-canvas'>
        <div className='start-heading'>
            AVG
        </div>
            {/* <VictoryPie
                    style={{
                        data: {  opacity: 0.9 },
                        labels: { fontSize: 14,fill: "white" },
                        // parent: { border: "1px solid #ccc" }
                        }}
                        height={450}
                        labels={({ datum }) => datum.y+":"+datum.x}
                        padAngle={2}
                        colorScale={["#97E668", "red", "orange", "cyan", "navy" ]}
                        // innerRadius={100}
                        events={[
                            {
                                target: "data",
                                eventHandlers: {
                                    
                                onMouseOver: () => {
                                    return [{
                                        target: "labels",
                                    mutation: (props) => {
                                        return props.text === "clicked" ?
                                        null : { text: "clicked" }
                                    }
                                    }];
                                }
                                //   ,onMouseOut: () => {
                                //   return [{
                                //     target: "labels",
                                //     mutation: () => {
                                //       return null;
                                //     }
                                //   }];}
                                }
                            }
                            ]}
                        data={[
                            { x: "AVG kills", y: 30 },
                            { x: "AVG Deaths", y: 50 },
                            { x: "AVG Assists", y: 20 },

                        ]}
                        innerRadius={130}
                /> */}
    <svg width={300} height={300}>

        <text x="50%" y="50%" 
            text-anchor="middle"
            stroke="white"
            fill='black'
            fontSize="62px"
            stroke-width="1px"
            // fontWeight="bold"
            alignment-baseline="middle"> 
            {playerData.playerData.win}
        </text>

        <VictoryPie
            style={{
                        data: {  opacity: 1 },
                        labels: { fontSize: 8,fill: "white" },
                        // parent: { border: "1px solid #ccc" }
                    }}
            standalone={false}
            width={"300"} height={"300"}
            colorScale={["#97E668", "red", "orange", "cyan", "navy" ]}
            padAngle={2}
            innerRadius={85}
            // labels={({ datum }) => datum.y+":"+datum.x}
            data={[
                    { x: "Avg kills", y: parseFloat(playerData.playerData.avg_kills) },
                    { x: "Avg Deaths", y: parseFloat(playerData.playerData.avg_deaths) },
                    { x: "Avg Assists", y: parseFloat(playerData.playerData.avg_assists) },
                ]}
                events={[
                            {
                                target: "data",
                                eventHandlers: {
                                    
                                onMouseOver: () => {
                                    return [{
                                        target: "labels",
                                    mutation: (props) => {
                                        console.log("props.text :",props.datum.x,props.text)
                                        // return props.text === "Deaths" ?
                                        // null : { text: "props.datum.y" }
                                        return props.text === props.datum.x ?
                                        { text: props.datum.y } : { text: props.datum.x}
                                    }
                                    }];
                                }
                                ,
                                onMouseOut: () => {
                                    return [{
                                        target: "labels",
                                        mutation: () => {
                                        return null;
                                        }
                                    }];
                                  }
                                }
                            }
                        ]}
        />
    </svg>
        </div>
    )
}