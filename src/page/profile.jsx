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
        console.log(e.row.id);
        // setCellValue((cellvalue) =>
        //   cellvalue === "blue" ? (cellvalue = "red") : (cellvalue = "blue")
        // );
        setSelectedId(e.row.id)
        // setColumn(j)
      };

    return (
        // <div>
             
      
        <div style={{width:"100%"}}>

            <div id="customScrollTable" className="" style={{width:"19%",marginBottom:"auto", float:"left",backgroundColor:"rgba(255,255,255,0.1)",borderRadius:"10px"}}>
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
                    hasMoreData==undefined?
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
                                    <th {...column.getHeaderProps()} style={{position:"sticky",top:"0",zindex:"1",paddingTop:"10px",borderBottom:"2px solid rgb(98, 70, 4)",backgroundColor:"black"}}  >
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
                                        return <td {...cell.getCellProps()} style={{textAlign:"center",background: selectedId==row.id?'rgb(98, 70, 4)':'none',textAlign:"center"}} onClick={() => getCellValue(cell,j)}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </InfiniteScroll>
            </div>

            <div className="rightSide" style={{width:"79%",padding:"10px", float:"left"}}>
                {/* {console.log("data : ",data[selectedId])} */}
                <KdaCanvas playerData={data[selectedId]}/>
                <AvgKdaCanvas playerData={data[selectedId]}/>
                <ScoreCard playerData={data[selectedId]}/>
                <KillCard playerData={data[selectedId]}/>
                <KillCard playerData={data[selectedId]}/>
                <KillCard playerData={data[selectedId]}/>
                <KillCard playerData={data[selectedId]}/>
            </div>
        </div>
        // </div>
    )
}

const Teamspage = () => {
    const [post, setPost] = React.useState(null);
    const [nextLink,setNext] = React.useState(null);
    useEffect(() => {
        axios.get(baseURL + 'statistics/?page=1')
		.then(response => {
			setPost(response.data.results);
            setNext(response.data.next);

			// console.log("response: ",response.data.results)
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
                console.log("newData: ",response.data)
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
                        {/* <button>Role</button> */}
                            <ITC className="itcLoadIn">
                           
                             { post ?
                                <Table columns={columns} data={data} update={fetchMoreData} hasMoreData={nextLink? true: false} />:null
                             }

                                {/* <TeamNameITCTextContainer style={{ backgroundImage: "linear-gradient(#ff3c3c, #F97373)" }}>
                                    <TeamNameITCText>
                                        Veibae Simps
                                    </TeamNameITCText>
                                </TeamNameITCTextContainer> */}
                                {/* <ITCTeamImageContainer>
                                <TextImageMarginer />
                                    <img className="img-resizeTeam" src={teamIMG1} alt="Team Logo"></img>
                                </ITCTeamImageContainer>
                                <TextImageMarginer /> */}
                                {/* <CaptainViceCaptainText>
                                    Captain (C): Aidon
                                </CaptainViceCaptainText>
                                <CaptainViceCaptainText>
                                    Vice Captain (VC): Hermy
                                </CaptainViceCaptainText> */}
                            </ITC>
                            
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