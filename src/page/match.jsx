import React from 'react';
import queryString from 'query-string'
import axios from "axios";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

import { TopContainer, BackgroundContainer, ScheduleContainer, ScheduleVersusContainer } from "../pageStyles/match";

import "../pageStyles/match.js";
import "../pageStyles/match.css";

const baseURL = "https://sdc-league-api-u9e3a.ondigitalocean.app/api/";

export default class Matchpage extends React.Component {	

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		let queries = queryString.parse(this.props.location.search);
		//console.log(queries)
		axios.get(baseURL + 'matches/' + queries.id + "/")
		  .then(res => {
			const matchData = res.data;
			this.setState(matchData);
		  });
	}

	render() {
		const match = this.state;
		return (
		<>
			<TopContainer>
				<BackgroundContainer>
				<ScheduleContainer/>
					<ScheduleVersusContainer>
					{match.id}
					</ScheduleVersusContainer>
				</BackgroundContainer>
			</TopContainer>
			<Navbar />
			<Footer />
			<style>{`
			body {  
				background-color: #1A191A !important; 
			}
			`}</style>
		</>
		);
	}
}