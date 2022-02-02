import React from 'react';
import queryString from 'query-string'
import axios from "axios";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

import { BackgroundContainer, ScheduleContainer, ScheduleVersusContainer, 
    HeaderTextContainer, TitleText, SVTIN, IDATC, IDATCText, IDATCBlueMarginer, IDC, IDCTitle } from "../pageStyles/match";

import "../pageStyles/match.js";
import "../pageStyles/match.css";

const baseURL = "https://api.sdcleague.com/api/";
//const baseURL = "http://127.0.0.1:8000/api/";

export default class Matchpage extends React.Component {	

	constructor(props) {
		super(props);
		this.state = [];
	}

	componentDidMount() {
		let queries = queryString.parse(this.props.location.search);
		//console.log(queries)
		let request1 = axios.get(baseURL + 'matchpage/?match=' + queries.id)
		let request2 = axios.get(baseURL + 'matchteams/' + queries.id + '/')
		axios.all([request1, request2]).then(axios.spread((...responses) => {
			const responseOne = responses[0].data
			const responseTwo = responses[1].data
			this.setState({games: responseOne, match: responseTwo});
			// use/access the results 
		})).catch(errors => {
			console.log("error loading match data")
			console.log(errors)
		});
	}

	render() {
		if (!this.state.games || this.state.match === []) {
            return (
			<>
				<BackgroundContainer>
					<ScheduleContainer className="loadInAnim">
						<HeaderTextContainer>
							
						</HeaderTextContainer>
						<HeaderTextContainer>

						</HeaderTextContainer>
						<ScheduleVersusContainer>
						
						</ScheduleVersusContainer>
					</ScheduleContainer>
				</BackgroundContainer>
				<Navbar />
				<Footer />
				<style>{`
				body {  
					background-color: #1A191A !important; 
				}
				`}</style>
			</>)
        }
		const games = this.state.games;
		const match = this.state.match;
		console.log(games);
		console.log(match);
		return (
		<>
			<BackgroundContainer>
				<ScheduleContainer className="loadInAnim">
					<HeaderTextContainer>
						<TitleText>
						{match.team1.name}
						</TitleText>
						<TitleText>
						{match.team2.name}
						</TitleText>
					</HeaderTextContainer>
					<HeaderTextContainer>
						<TitleText>
						{match.team1.wins}
						</TitleText>
						<TitleText>
						{match.team2.wins}
						</TitleText>
					</HeaderTextContainer>
					<ScheduleVersusContainer>
					{
						games.map( (game) => (
						<>
							<SVTIN className="itcLoadIn">
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