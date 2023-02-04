import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import axios from "axios";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

import { TopContainer, BackgroundContainer, ScheduleContainer, ScheduleVersusContainer, 
    HeaderTextContainer, TitleText, DateText, SVTIN, IDATC, IDATCBlueMarginer, IDC, IDCTitle, FilterText } from "../pageStyles/schedule";

import "../pageStyles/schedule.js";
import "../pageStyles/schedule.css";

const baseURL = "https://api.sdcleague.com/api/";
//const baseURL = "http://127.0.0.1:8000/api/";


export default class Schedulepage extends React.Component {	
	constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        if (!localStorage.getItem("team")) {
			localStorage.setItem("team","ALL")
		}
		this.state = {
            range: this.getInitialDates(),
            matches: [],
            team: localStorage.getItem("team")
        }
    }

    componentDidMount() {
        this.getMatches(this.getInitialDates());
    }

    getMatches(range) {
        axios.get(baseURL + 'schedule/?date__gte=' + 
        range.from.toISOString().split('T')[0] + 
        '&date__lte=' + 
        range.to.toISOString().split('T')[0])
          .then(res => {
            const matchData = res.data;
            this.setState({range: range, matches: matchData, team: localStorage.getItem("team")});
          });
    }

    getInitialDates() {
        const from = new Date();
        from.setHours(0);
        const to = new Date();
        to.setDate(to.getDate() + 7);
        to.setHours(23);
        return {
          from: from,
          to: to,
        };
    }

    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.state.range);
        range.from.setHours(0);
        range.to.setHours(23);
		//loading cursor
		document.body.style.cursor = "wait";
        this.getMatches(range);
		//normal cursor
    }

    changeTeam(select) {
        localStorage.setItem("team",select.target.value);
        this.setState({range: this.state.range, matches: this.state.matches, team: select.target.value});
    }

	render() {
		var { from, to } = this.state.range;
        const modifiers = { start: from, end: to };
        const matches = this.state.matches;
        const team = this.state.team;
        const teams = ["ALL"]
        const displayMatches = [];
        for (let i = 0; i < matches.length; i++) {
            if (!teams.includes(matches[i].team1)) {
                teams.push(matches[i].team1)
            }
            if (!teams.includes(matches[i].team2)) {
                teams.push(matches[i].team2)
            }
        }
        teams.slice(0,1).concat(teams.slice(1).sort());
        for (let i = 0; i < matches.length; i++) {
            if (Date.parse(matches[i].date) >= this.state.range.from) {
                if (team !== teams[0] && (matches[i].team1 !== team && matches[i].team2 !== team)) {
                    continue;
                }
                if (displayMatches.length > 0 && displayMatches.find(e => Date.parse(e.date).valueOf() === Date.parse(matches[i].date).valueOf())) {
                    displayMatches.find(e => Date.parse(e.date).valueOf() === Date.parse(matches[i].date).valueOf()).matches.push(matches[i]);
                } else {
                    displayMatches.push({date: matches[i].date, matches: [matches[i]]});
                }
            }
        }

		return (
		<>
			<TopContainer>
				<BackgroundContainer>
					<ScheduleContainer className="loadInAnim">
						<HeaderTextContainer>
							<TitleText>
								SDC Schedule
							</TitleText>
							<DateText>
							  {!from && !to && 'Please select the first day.'}
							  {from && !to && 'Please select the last day.'}
							  {from &&
								to &&
								`Selected from ${from.toLocaleDateString()} to
									${to.toLocaleDateString()}`}{' '}
							</DateText>
						</HeaderTextContainer> 
						<DayPicker
						  className="Selectable"
						  selectedDays={[from, { from, to }]}
						  modifiers={modifiers}
						  onDayClick={this.handleDayClick.bind(this)}
						/> 
						<FilterText>
                            Filter By Team: 
                            <select className="" onChange={this.changeTeam.bind(this)} value={team}>
                            {
                                teams.map( (team) => (
                                <>
                                    <option value={team}>{team}</option>
                                </>
                                ))
                            }
                            </select>
                        </FilterText>
						<ScheduleVersusContainer>
							{
								displayMatches.map( (dates) => (
								<>
									<SVTIN className="itcLoadIn">
										<IDC>
											<IDCTitle>
											{
												(new Date(dates.date).getMonth() + 1) + "/" + new Date(dates.date).getDate() + "/" + new Date(dates.date).getFullYear() +
												" " + String(new Date(dates.date).getHours()+4).padStart(2, '0') + ":" + String(new Date(dates.date).getMinutes()).padStart(2, '0')
											}
											</IDCTitle>
										</IDC>
										{
											dates.matches.map( (match) => (
											<>
												<IDATCBlueMarginer/>
												<IDATC to={'/match?id='+match.match}>
													{match.team1} VS {match.team2}
												</IDATC>
											</>
											))
										}
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
				.Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
					background-color: #00A8E8 !important;
					color: #f0f8ff;
				}
				.Selectable .DayPicker-Day {
					border-radius: 4px !important;
					border-color: #232ED1 !important;
					border: solid;
					background-color: #141D24;
				}
				.Selectable .DayPicker-Day--start {
					background-color: #89D2DC !important;
					/*border-top-left-radius: 50% !important;
					border-bottom-left-radius: 50% !important;*/
				}
				.Selectable .DayPicker-Day--end {
					background-color: #89D2DC !important;
					/*border-top-right-radius: 50% !important;
					border-bottom-right-radius: 50% !important;*/
				}
				.Selectable .DayPicker-Day--today:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
					color: #00A8E8 !important;
				}
				.DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
					background-color: #00A8E8 !important;
				}
				body {  
					background-color: #141D24 !important; 
				}
			`}</style>
		</>
		);
	}
}