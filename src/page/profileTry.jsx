// import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import React, { useEffect } from "react";
import axios from "axios";
import { useTable, useFilters, useGlobalFilter } from 'react-table'
import InfiniteScroll from "react-infinite-scroll-component";
import { TopContainer, BackgroundContainer, TeamsContainer, TeamsInnerContainer, 
    ITC} from "../pageStyles/profile";
import KdaCanvas from "../components/profileComponents/kdCanvas";
import AvgKdaCanvas from "../components/profileComponents/avgKdaCanvas";
import ScoreCard from "../components/profileComponents/scoreCard";
import "../pageStyles/teams.js";
import "../pageStyles/teams.css";
import "../pageStyles/profile.css";
import KillCard from "../components/profileComponents/killCard";
// import teamIMG1 from "../assets/illustrations/team1.png";
import "../components/profileComponents/style.css"
import { Row, Col, Alert, Container} from "react-bootstrap";
import icon from '../assets/illustrations/headshot-icon.png'
import picture from "../assets/illustrations/icons8-fantasy-100.png"
import coin from "../assets/illustrations/icons8-coins-96.png"

import ChampCard from "../components/championCard/championCard";


// C:\Users\Adaxiom\Desktop\sdc-front\src\pageStyles\bootstrap.min.css
// const baseURL = "https://api.sdcleague.com/api/";
const baseURL = "http://127.0.0.1:8000/api/";

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
                                    : <> 
                                    <ChampCard championsData={champData}/> 
                                    </>
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