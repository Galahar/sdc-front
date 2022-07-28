// import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import React, { useEffect } from "react";
import axios from "axios";
import { useTable, useFilters, useGlobalFilter } from 'react-table'
import InfiniteScroll from "react-infinite-scroll-component";
import { TopContainer, BackgroundContainer, TeamsContainer, TeamsInnerContainer} from "../pageStyles/profile";
import KdaCanvas from "../components/profileComponents/kdCanvas";
import AvgKdaCanvas from "../components/profileComponents/avgKdaCanvas";
import ScoreCard from "../components/profileComponents/scoreCard";
import "../pageStyles/teams.js";
import "../pageStyles/teams.css";
import "../pageStyles/profile.css";
import KillCard from "../components/profileComponents/killCard";
// import teamIMG1 from "../assets/illustrations/team1.png";
import "../components/profileComponents/style.css"
import { Row, Col} from "react-bootstrap";
import icon from '../assets/illustrations/headshot-icon.png'
import picture from "../assets/illustrations/icons8-fantasy-100.png"
import coin from "../assets/illustrations/icons8-coins-96.png"

import ChampCard from "../components/championCard/championCard";


// C:\Users\Adaxiom\Desktop\sdc-front\src\pageStyles\bootstrap.min.css
const baseURL = "https://api.sdcleague.com/api/";
// const baseURL = "http://127.0.0.1:8000/api/";

function Table({ columns, data, update,hasMoreData}) {
    const [selectedId, setSelectedId] = React.useState(0)
	const defaultColumn = React.useMemo(
        () => ({
            // Filter: DefaultColumnFilter,
        }),
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
            defaultColumn
        },
        useFilters,
        useGlobalFilter
    )
    const getCellValue = (e, j) => {
        // console.log(e.row.id);
        // setCellValue((cellvalue) =>
        //   cellvalue === "blue" ? (cellvalue = "red") : (cellvalue = "blue")
        // );
        setSelectedId(e.row.id)
        // setColumn(j)
      };

    return (
        // <Container>
        <div className="containr">
             <Row>
            {/* <div className="row"> */}
            {/* <button className="champ-button">champions</button> */}
            {/* <div className="customButton" style={{width:"8%", float:"left"}}>
                <button className="champ-button"><div className="buttonText">Champion</div></button>
                <button className="champ-button"><div className="buttonText">Role</div></button>
                <button className="champ-button"><div className="buttonText">champions</div></button>
            </div> */}
            {/* <div id="customScrollTable" className="customScrollTable col-xl-2 col-ml-3 col-xs-4" > */}
            <Col xl={3} lg={3} xs={12}>
                <InfiniteScroll
                className="customScroll"
                height={"700px"}
                dataLength={rows.length}
                next={update}
                hasMore={hasMoreData}
                loader={
                    <h3 style={{ textAlign: 'center' }}>
                        <b>Loading more data...</b>
                    </h3>}
                scrollableTarget={'customScrollTable'}
                scrollThreshold={0.96}
                endMessage={
                    hasMoreData===undefined?
                        <p style={{ textAlign: 'center' }}>
                        <b>Loading Data ...</b>
                        </p> : 
                        <p style={{ textAlign: 'center' }}>
                        <b>All The Data has been loaded</b>
                        </p>
                        }
                >
                <table  {...getTableProps()} style={{borderCollapse:"collapse", width:"100%"}} >
                    <thead  >
                        {headerGroups.map(headerGroup => (
                            <tr  {...headerGroup.getHeaderGroupProps()}   >
                                {headerGroup.headers.map(column => {
                                    return column.hideHeader === false ? null :(
                                    <th {...column.getHeaderProps()} style={{position:"sticky",top:"0",zIndex:"0",paddingTop:"10px",borderBottom:"2px solid rgb(98, 70, 4)",backgroundColor:"black"}} >
                                        {column.render('Header')}
                                        {/* Render the columns filter UI */}
                                        
                                        {/* <div> {column.canFilter ? column.render('Filter') : null}</div> */}
                                    </th>
                                );
                                })}
                            </tr>
                        ))}
                    
                    </thead>
                    <tbody className="profileTable" {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} style={{textAlign:"end"}} >
                                    {row.cells.map((cell,j) => {
                                        return <td {...cell.getCellProps()} style={{background: selectedId===row.id?'rgb(98, 70, 4)':'none',textAlign:"center"}} onClick={() => getCellValue(cell,j)}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </InfiniteScroll>
                </Col>
            {/* </div> */}

            {/* <div className=" col-md-10 col-xl-10" > */}
            <Col xl={9} lg={9} xs={12}>
                {/* {console.log("data : ",data[selectedId])} */}
                <Row >
                    {/* <div className="col-xl-4 col-md-6 col-xs-8"> */}
                    <Col xl={4} md={6}  xs={12}>
                        <KdaCanvas  playerData={data[selectedId]}/>
                    </Col>
                    <Col xl={4} md={6}  xs={12}>
                        <AvgKdaCanvas  playerData={data[selectedId]}/>
                    </Col>
                    <Col xl={4} md={4}  xs={12}>
                        <ScoreCard  playerData={data[selectedId]}/>
                    </Col>
                    <Col xl={3} md={4} ms={3} xs={12}>
                        <KillCard playerData={data[selectedId]} image={picture} title={"Average Fantasy"} avg={data[selectedId].average_fantasy}
                        label_1={"jungle ≈"} text_1={data[selectedId].jungle_prox} 
                        label_2={"enemy jungle ≈"} text_2={data[selectedId].enemy_jungle_prox} 
                        label_3={"vision score"} text_3={data[selectedId].vision_score} />
                    </Col>
                    <Col xl={3} md={4} ms={3} xs={12}>
                        <KillCard playerData={data[selectedId]} image={icon} title={"Damage Per Minute"} avg={data[selectedId].dpm}
                            label_1={"TOTAL DAMAGE"} text_1={data[selectedId].damage} label_2={"Damage Share"} text_2={data[selectedId].damage_share} label_3={"Damage Taken"} text_3={data[selectedId].damage_taken}
                        />
                    </Col>
                    <Col xl={3} md={4} ms={3} xs={12}>
                        <KillCard playerData={data[selectedId]} image={coin} title={"Total Gold"} avg={data[selectedId].total_gold}
                            label_1={"gold share"} text_1={data[selectedId].gold_share} label_2={"gold diff 15"} text_2={data[selectedId].gold_diff_15} label_3={"d gold"} text_3={data[selectedId].d_gold}
                        />
                    </Col>
                    <Col xl={3} md={4} ms={3} xs={12}>
                        <KillCard playerData={data[selectedId]} image={icon} title={"Avg Vision Wards"} avg={data[selectedId].avg_vision_wards}
                            label_1={"vision wards"} text_1={data[selectedId].vision_wards} 
                            label_2={"wards placed"} text_2={data[selectedId].wards_placed} 
                            label_3={"wards killed"} text_3={data[selectedId].wards_killed}
                        />
                    </Col>
                    {/* "vision_wards": "91",
            "avg_vision_wards": "2.9",
            "wards_placed": "360",
            "wards_killed": "119", */}
                </Row>
             </Col>
        </Row>
         </div>
         
    )
}

const Teamspage = () => {
    const [post, setPost] = React.useState(null);
    const [nextLink,setNext] = React.useState(null);
    const [switchState,setSwitch] = React.useState(true)
    const [champData,setChamp] = React.useState(null);

    useEffect(() => {
        axios.get(baseURL + 'statistics/?page=1')
		.then(response => {
			setPost(response.data.results);
            setNext(response.data.next);
		}).catch(errors => {
			console.log("error loading match data")
			console.log(errors)
		});

        axios.get(baseURL + 'champions/')
		.then(response => {
			setChamp(response.data);
            // console.log("Champ : ",response.data)
		}).catch(errors => {
			console.log("error loading match data")
			console.log(errors)
		});

      },[]);
	// if (!post)
    const columns = React.useMemo(
        () => [
            {
                Header: ' ',
                hideHeader:false,
                columns: [
                    {
                        Header: 'Name',
                        accessor: 'name'
                    },
                ],
            },
        ],
        []
    );
    const fetchMoreData = () => {
        setTimeout(()=>{
            axios.get(nextLink)
            .then(response => {
                setPost(post.concat(response.data.results));
                setNext(response.data.next)
                // console.log("newData: ",response.data)
            }).catch(errors => {
                console.log("error loading match data")
                console.log(errors)
            });
        })
    }
    const data = React.useMemo(()=> post,[post])

    return (
        <>
        
            <TopContainer>
                <BackgroundContainer>
                <TeamsContainer>
                        <TeamsInnerContainer>
                        <Row className="btn-group">
                                    <button className="col-6 button-1" onClick={(e)=>{setSwitch(true)}} style={switchState?{backgroundColor:"#F1B317"}:{backgroundColor:"rgb(98, 70, 4)"}}>Players</button>
                                    <button className="col-6 button-2" onClick={(e)=>{setSwitch(false)}} style={!switchState?{backgroundColor:"#F1B317"}:{backgroundColor:"rgb(98, 70, 4)"}}>Champions</button>
                        </Row>
                        <Row>
                      
                                { switchState ? (
                                    post ?
                                    <>
                                    <h4 className="profile-title" style={{ fontFamily: 'Yusei Magic' }}>Player's Profile</h4>
                                    <Table columns={columns} data={data} update={fetchMoreData} hasMoreData={nextLink? true: false} />
                                    </>:null)
                                    : <> <ChampCard championsData={champData}/> </>
                                }
                               
                        </Row>
                                </TeamsInnerContainer>
                                </TeamsContainer>
                                
                </BackgroundContainer>
                
            </TopContainer>
            
            <Navbar />
            <Footer />
        </>
    );
};

export default Teamspage;