import React from 'react';
import queryString from 'query-string'
import axios from "axios";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

import { TopContainer, BackgroundContainer, ScheduleContainer, ScheduleVersusContainer, 
    HeaderTextContainer, TitleText, SVTIN, IDATC, IDATCText, IDATCBlueMarginer, IDC, IDCTitle } from "../pageStyles/match";

import "../pageStyles/match.js";
import "../pageStyles/match.css";

const baseURL = "https://api.sdcleague.com/api/";

export default class Matchpage extends React.Component {	

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		let queries = queryString.parse(this.props.location.search);
		//console.log(queries)
		axios.get(baseURL + 'games/?match=' + queries.id)
		  .then(res => {
			const matchData = res.data;
			this.setState({games: matchData});
		  });
	}

	render() {
		if (!this.state.games) {
            return <div />
        }
		const games = this.state.games;
		console.log(games);
		return (
		<>
			<TopContainer>
				<BackgroundContainer>
					<ScheduleContainer className="loadInAnim">
						<HeaderTextContainer>
							<TitleText>
							{games[0].match.team1.name} VS {games[0].match.team2.name}
							</TitleText>
						</HeaderTextContainer>
						<ScheduleVersusContainer>
						{
							games.map( (game) => (
							<>
								<SVTIN>
									<IDC>
										<IDCTitle>
										{
											(new Date(game.date).getMonth() + 1) + "/" + new Date(game.date).getDate() + "/" + new Date(game.date).getFullYear() +
											" " + String(new Date(game.date).getHours()+5).padStart(2, '0') + ":" + String(new Date(game.date).getMinutes()).padStart(2, '0')
										}
										</IDCTitle>
									</IDC>
										<IDATCBlueMarginer/>
										<IDATC onClick={event => navigator.clipboard.writeText(game.tournamentCode)}>
											<IDATCText>{game.tournamentCode} (click to copy)</IDATCText>
										</IDATC>
								</SVTIN>
							</>
							))
						}
						</ScheduleVersusContainer>
					</ScheduleContainer>
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