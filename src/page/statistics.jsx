import React, { useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useTable, useFilters, useGlobalFilter } from 'react-table'
import InfiniteScroll from "react-infinite-scroll-component";
import { BackgroundContainer, TopContainer, StatisticsContainer, StatisticsLinkContainer, 
    StatsLinkNormal, StatsLinkHeader, GoogleSheetsContainer, GoogleSheetsContainerMobile, BottomMargin } from "../pageStyles/statistics.js";

import "../pageStyles/statistics.css";
import "../pageStyles/standings.css";
import "../pageStyles/statisticsCustom.css";
function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    /* const count = preFilteredRows.length */ // assigned a value but never used

    return (
        <input
            // className="fa fa-search"
            style={{textAlign:"center",border:"none",backgroundColor:"#101010",color:"white",paddingBottom:"10px",width:'auto' }}
            className="placeholderColor"
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined)
            }}
            // placeholder={`Search ${count} records...`}
            placeholder={`Search records...`}

        />
    )
}

function Table({ columns, data, update,hasMoreData }) {

	const defaultColumn = React.useMemo(
        () => ({
            Filter: DefaultColumnFilter,
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

    return (
        
        <div id="customScrollTable" className="" style={{width:"100%",marginBottom:"auto"}}>
        <InfiniteScroll
        className="customScroll"
        height={"600px"}
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
                    <p style={{ textAlign: 'center' }}>
                    <b>Loading Data ...</b>
                    </p>
                }
        >
            <table className="zui-table-highlight tableStripped" {...getTableProps()} style={{borderCollapse:"collapse"}} >
                <thead  >
                    {headerGroups.map(headerGroup => (
                        <tr className="th-head" {...headerGroup.getHeaderGroupProps()}   >
                            {headerGroup.headers.map(column => {
                                return column.hideHeader === false ? null :(
                                <th {...column.getHeaderProps()} style={{position:"-webkit-sticky",top:"0",zindex:"1",paddingTop:"10px",borderBottom:"2px solid rgb(98, 70, 4)"}}  >
                                    {column.render('Header')}
                                    {/* Render the columns filter UI */}
                                    
                                    <div> {column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            );
                            })}
                        </tr>
                    ))}
                  
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()} >
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()} style={{borderRight:"2px dashed rgb(98, 70, 4)",textAlign:"center"}}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </InfiniteScroll>
        </div>
    )
}

function FilterTableComponentStatistis() {

	const [post, setPost] = React.useState(null);
    const [nextLink,setNext] = React.useState(null);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/statistics/?page=1')
		.then(response => {
			setPost(response.data.results);
            setNext(response.data.next);

			console.log("response: ",response.data.results)
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
                    {
                        Header: 'S11',
                        accessor: 's11'
                    },
                    {
                        Header: 'PRI',
                        accessor: 'pri'
                    },
                    {
                        Header: 'PV',
                        accessor: 'pv'
                    },
					{
                        Header: 'T',
                        accessor: 't'
                    },
					
					{
                        Header: 'Kills',
                        accessor: 'kills'
                    },
					{
                        Header: 'Deaths',
                        accessor: 'deaths'
                    },
					{
                        Header: 'Assist',
                        accessor: 'assists'
                    },
					{
                        Header: 'KDA',
                        accessor: 'kda'
                    },
					{
                        Header: 'AVG Kills',
                        accessor: 'avg_kills'
                    },
					{
                        Header: 'AVG Deaths',
                        accessor: 'avg_deaths'
                    },
					{
                        Header: 'AVG Assists',
                        accessor: 'avg_assists'
                    },
					{
                        Header: 'First Bloods',
                        accessor: 'first_bloods'
                    },
					{
                        Header: 'FB%',
                        accessor: 'fb'
                    },
					{
                        Header: 'AVG Solo Kills',
                        accessor: 'avg_solo_kills'
                    },
					{
                        Header: 'Largest Multi-Kill',
                        accessor: 'largest_multi_kill'
                    },
					{
                        Header: 'Largest Killing Spree',
                        accessor: 'largest_killing_spree'
                    },
					{
                        Header: 'Kill Participation',
                        accessor: 'kill_participation'
                    },
					{
                        Header: 'CS/M',
                        accessor: 'cm_S'
                    },
					{
                        Header: 'CS Diff@15',
                        accessor: 'cs_diff_15'
                    },
					{
                        Header: 'Minnion CS',
                        accessor: 'minion_cs'
                    },
					{
                        Header: 'Jungle CS',
                        accessor: 'jungle_cs'
                    },
					{
                        Header: 'Counter Jungling',
                        accessor: 'counter_jungling'
                    },
					{
                        Header: 'AVG CJ',
                        accessor: 'avg_cj'
                    },
					{
                        Header: 'Total Gold',
                        accessor: 'total_gold'
                    },
					{
                        Header: 'Gold Diff@15',
                        accessor: 'gold_diff_15'
                    },
					{
                        Header: 'Gold Share',
                        accessor: 'gold_share'
                    },
					{
                        Header: 'DPM',
                        accessor: 'dpm'
                    },
					{
                        Header: 'Damage Share',
                        accessor: 'damage_share'
                    },
					{
                        Header: 'Damage',
                        accessor: 'damage'
                    },
					{
                        Header: 'D/Gold',
                        accessor: 'd_gold'
                    },
					{
                        Header: 'D/Gold Share',
                        accessor: 'd_gold_share'
                    },
					{
                        Header: 'Total CC',
                        accessor: 'total_cc'
                    },
					{
                        Header: 'AVG CC',
                        accessor: 'avg_cc'
                    },
					{
                        Header: 'Damage Taken',
                        accessor: 'damage_taken'
                    },
					{
                        Header: 'AVG Isolated Deaths',
                        accessor: 'avg_isolated_deaths'
                    },
					{
                        Header: 'Vision Wards',
                        accessor: 'vision_wards'
                    },
					{
                        Header: 'AVG Vision Wards',
                        accessor: 'avg_vision_wards'
                    },
					{
                        Header: 'Wards Placed',
                        accessor: 'wards_placed'
                    },
					{
                        Header: 'Wards Killed',
                        accessor: 'wards_killed'
                    },
					{
                        Header: 'Vision Score',
                        accessor: 'vision_score'
                    },
					{
                        Header: 'VS/M',
                        accessor: 'vs_m'
                    },
					{
                        Header: 'Turrets',
                        accessor: 'turrets'
                    },
					{
                        Header: 'DMG to Turrets',
                        accessor: 'dng_to_turrets'
                    },{
                        Header: 'AVG T DMG',
                        accessor: 'avg_t_dmg'
                    },{
                        Header: 'First Towers',
                        accessor: 'first_towers'
                    },{
                        Header: 'Objective DMG',
                        accessor: 'objective_dmg'
                    },{
                        Header: 'AVG O DMG',
                        accessor: 'avg_o_dmg'
                    },{
                        Header: 'Jungle Prox',
                        accessor: 'jungle_prox'
                    },{
                        Header: 'Enemy Jungle Prox',
                        accessor: 'enemy_jungle_prox'
                    },{
                        Header: 'Forward %',
                        accessor: 'forward'
                    },{
                        Header: 'Average Fantasy',
                        accessor: 'average_fantasy'
                    },{
                        Header: 'Game Time',
                        accessor: 'game_time'
                    },{
                        Header: 'Wins',
                        accessor: 'wins'
                    },{
                        Header: 'Losses',
                        accessor: 'losses'
                    },{
                        Header: 'Win%',
                        accessor: 'win'
                    },{
                        Header: 'Games',
                        accessor: 'games'
                    }
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
	// const data_new = post;
    const data2 = [
        {
            "firstName": "horn-od926",
            "lastName": "selection-gsykp",
            "age": 22,
            "visits": 20,
            "progress": 39,
            "status": "single"
        }
    ]
	if (!post) return (
		<>
				<BackgroundContainer>
                <TopContainer>
                    <StatisticsContainer className="loadInAnim">
                        <StatisticsLinkContainer>
                            <StatsLinkHeader>
                                SDC SEASON 11 REGULAR SEASON STATS
                            </StatsLinkHeader>
                            <StatsLinkNormal>
                                For All Time Stats
                            </StatsLinkNormal>

                            <a className="linkHover" target="_blank" rel="noreferrer" href="https://docs.google.com/spreadsheets/d/1BWCMVF8cUp1eqjL8MJBuQKIm76WJNfGhVgFOf1xISvk/edit#gid=1325308529">
                            <StatsLinkNormal style={{ textDecoration: 'none' }}>
                                Click here
                            </StatsLinkNormal>
                                </a>
                        </StatisticsLinkContainer>
                    </StatisticsContainer>
                    <GoogleSheetsContainer className="loadInAnim">
					<Table columns={columns} data={data2} />
                    </GoogleSheetsContainer>
                    <GoogleSheetsContainerMobile className="loadInAnim">
					<Table columns={columns} data={data2} />
                    </GoogleSheetsContainerMobile>
                    <BottomMargin />
                </TopContainer>
            </BackgroundContainer>
            <Navbar />
            <Footer />
			</>
        
    );

    return (
		<>
			<BackgroundContainer>
                <TopContainer>
                    <StatisticsContainer className="loadInAnim">
                        <StatisticsLinkContainer>
                            <StatsLinkHeader>
                                SDC SEASON 11 REGULAR SEASON STATS
                            </StatsLinkHeader>
                            <StatsLinkNormal>
                                For All Time Stats
                            </StatsLinkNormal>

                            <a className="linkHover" target="_blank" rel="noreferrer" href="https://docs.google.com/spreadsheets/d/1BWCMVF8cUp1eqjL8MJBuQKIm76WJNfGhVgFOf1xISvk/edit#gid=1325308529">
                            <StatsLinkNormal style={{ textDecoration: 'none' }}>
                                Click here
                            </StatsLinkNormal>
                                </a>
                        </StatisticsLinkContainer>
                    </StatisticsContainer>
                    <GoogleSheetsContainer className="loadInAnim">
					<Table columns={columns} data={data} update={fetchMoreData} hasMoreData={nextLink? true: false}  />
                    </GoogleSheetsContainer>
                    <GoogleSheetsContainerMobile className="loadInAnim">
					<Table columns={columns} data={data} update={fetchMoreData} hasMoreData={nextLink? true: false}  />
                    </GoogleSheetsContainerMobile>
                    <BottomMargin />
                </TopContainer>
            </BackgroundContainer>
            <Navbar />
            <Footer />	
			</>
        
    )
}

export default FilterTableComponentStatistis;
