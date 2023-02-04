import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import axios from "axios";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

import { TopContainer, BackgroundContainer, ScheduleContainer, ScheduleVersusContainer, 
    HeaderTextContainer, TitleText, DateText, SVTIN, IDATC, IDATCBlueMarginer, IDC, IDCTitle } from "../pageStyles/schedule";

import "../pageStyles/schedule.js";
import "../pageStyles/schedule.css";

const baseURL = "https://api.sdcleague.com/api/";
//const baseURL = "http://127.0.0.1:8000/api/";


export default class Schedulepage extends React.Component {	
	constructor(props) {
		super(props);
		this.handleDayClick = this.handleDayClick.bind(this);
		this.state = {
			range: this.getInitialDates(),
			matches: []
		}
	}
	
	componentDidMount() {
		this.getMatches()
	}
	
	getMatches() {
		axios.get(baseURL + 'schedule/?date__gte=' + 
		this.state.range.from.toISOString().split('T')[0] + 
		'&date__lte=' + 
		this.state.range.to.toISOString().split('T')[0])
		  .then(res => {
			const matchData = res.data;
			this.setState({range: this.state.range, matches: matchData});
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
		this.setState({range: range, matches: this.state.matches});
		this.getMatches();
	}

	render() {
		var { from, to } = this.state.range;
		const modifiers = { start: from, end: to };
		const matches = this.state.matches;
		const displayMatches = [];
		for (let i = 0; i < matches.length; i++) {
			if (Date.parse(matches[i].date) >= this.state.range.from) {
				if (Date.parse(matches[i].date) > this.state.range.to) { break; } //if we are in the future we won't find anymore
				if (displayMatches.length > 0 && displayMatches.find(e => Date.parse(e.date).valueOf() === Date.parse(matches[i].date).valueOf())) {
					displayMatches.find(e => Date.parse(e.date).valueOf() === Date.parse(matches[i].date).valueOf()).matches.push(matches[i]);
				} else {
					displayMatches.push({date: matches[i].date, matches: [matches[i]]});
				}
			}
		}
		console.log(displayMatches)
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
						  onDayClick={this.handleDayClick}
						/> 
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
					background-color: #89D2DC !important;
					color: #f0f8ff;
				}
				.Selectable .DayPicker-Day {
					border-radius: 4px !important;
					border-color: #232ED1 !important;
					border: solid;
					background-color: #2B262A;
				}
				.Selectable .DayPicker-Day--start {
					background-color: #00A8E8 !important;
					/*border-top-left-radius: 50% !important;
					border-bottom-left-radius: 50% !important;*/
				}
				.Selectable .DayPicker-Day--end {
					background-color: #00A8E8 !important;
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
					background-color: #FFF !important; 
				}
			`}</style>
		</>
		);
	}
}