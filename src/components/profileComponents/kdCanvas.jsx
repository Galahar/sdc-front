import { VictoryPie } from 'victory';
import "../../components/profileComponents/style.css"
export default function KdaCanvas(playerData)
{
    return(
        <>
        <div className='canvas'>
        <div className='start-heading'>
            K/D
        </div>
        <svg width={300} height={300}>
            <text x="50%" y="50%" 
                textAnchor="middle"
                stroke="white"
                fill='black'
                fontSize="62px"
                strokeWidth="1px"
                alignmentBaseline="middle"> 
                {playerData.playerData.kda}
            </text>

            <VictoryPie
                // standalone={<p>hello</p>}
                standalone={false}

                style={{
                    data: {  opacity: 1 },
                    labels: { fontSize: 11,fill: "white" },
                    // parent: { border: "1px solid #ccc" }
                    }}
                    width={300} height={300}
                    labels={({ datum }) => datum.x}
                    padAngle={2}
                    colorScale={["#97E668", "red", "orange", "cyan", "navy" ]}
                    innerRadius={85}
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
                    data={[
                        { x: "kills", y: parseFloat(playerData.playerData.kills) },
                        { x: "Deaths", y: parseFloat(playerData.playerData.deaths) },
                        { x: "Assists", y: parseFloat(playerData.playerData.assists) },

                        ]}
                />
                </svg>
                {/* hello */}
                
                {/* </svg> */}
        </div>
        </>
    )
}

{/* 
<svg width={310} height={300}>

<text x="50%" y="50%" 
    textAnchor="middle"
    stroke="white"
    fill='black'
    fontSize="62px"
    stroke-width="1px"
    // fontWeight="bold"
    alignmentBaseline="middle"> 
    {playerData.playerData.kda}
</text>

<VictoryPie
    style={{
                data: {  opacity: 1 },
                labels: { fontSize: 14,fill: "white" },
                // parent: { border: "1px solid #ccc" }
            }}
    standalone={false}
    width={310} height={300}
    colorScale={["#97E668", "red", "orange", "cyan", "navy" ]}
    padAngle={2}
    innerRadius={85}
    // labels={({ datum }) => datum.y+":"+datum.x}
    data={[
            { x: "kills", y: parseFloat(playerData.playerData.avg_kills) },
            { x: "Deaths", y: parseFloat(playerData.playerData.avg_deaths) },
            { x: "Assists", y: parseFloat(playerData.playerData.avg_assists) },
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
</svg> */}