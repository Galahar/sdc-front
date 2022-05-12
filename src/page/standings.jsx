import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackgroundContainer, StandingsContainer, LabelContainer, Label1, Labels, TeamRowContainer, TeamNameText, SC } from "../pageStyles/standings";

import "../pageStyles/standings.css";


//const baseURL = "https://api.sdcleague.com/api/";
const baseURL = "http://127.0.0.1:8000/api/";

function compareTeams(team1,team2) {
	if (team1.wins < team2.wins) {
		return 1
	} else if (team1.wins > team2.wins) {
		return -1
	} else {
		if (team1.losses > team2.losses) {
			return 1
		} else if (team1.losses < team2.losses) {
			return -1
		} else {
			if ((team1.points-team1.points_remaining)/(team1.wins+team1.losses) < (team2.points-team2.points_remaining)/(team2.wins+team2.losses)) {
				return -1
			} else if ((team1.points-team1.points_remaining)/(team1.wins+team1.losses) > (team2.points-team2.points_remaining)/(team2.wins+team2.losses)) {
				return 1
			} else {
				return 0
			}
		}
	}
}

export default class StandingsPage extends React.Component {	
	constructor(props) {
		super(props);
		this.state = { teams: [], };
	}

	componentDidMount() {
		let request = axios.get(baseURL + 'standings/?tournament__name=SDC Season 12')
		axios.all([request]).then(axios.spread((...responses) => {
			const response = responses[0].data
			this.setState({ teams: response });
			// use/access the results 
		})).catch(errors => {
			console.log("error loading match data")
			console.log(errors)
		});
	}
	
	render() {
		if (this.state.teams === []) {
			return (
				<>
				<BackgroundContainer>
					<StandingsContainer className="itcLoadIn">
						<LabelContainer>
							<Label1>
								Team
							</Label1>
							<Labels>
								Wins
							</Labels>
							<Labels>
								Losses
							</Labels>
							<Labels>
								Avg Spent
							</Labels>
						</LabelContainer>
					</StandingsContainer>
				</BackgroundContainer>
				<Navbar />
				<Footer />
				<style>{`
					body {  
						background-color: #1A191A !important; 
					}
				`}</style>
			</>
			)
		}
		const teams = this.state.teams;
		console.log(teams.sort(compareTeams));
		return (
			<>
				<BackgroundContainer>
					<StandingsContainer className="itcLoadIn">
						<LabelContainer>
							<Label1>
								Team
							</Label1>
							<Labels>
								Wins
							</Labels>
							<Labels>
								Losses
							</Labels>
							<Labels>
								Avg Spent
							</Labels>
						</LabelContainer>
						{
						teams.map( (team) => (<>
						<TeamRowContainer className="itcLoadIn">
							<TeamNameText>
								{team.name}
							</TeamNameText>
							<SC>
								{team.wins}
							</SC>
							<SC>
								{team.losses}
							</SC>
							<SC>
								{~~Math.round((team.points-team.points_remaining)/(team.wins+team.losses))}
							</SC>
						</TeamRowContainer>
						</>))
						}
					</StandingsContainer>
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