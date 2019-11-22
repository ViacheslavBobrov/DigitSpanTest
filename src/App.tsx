import React from "react";
import DigitGenerator from "./components/DigitGenerator";
import DigitKeyboard from "./components/DigitKeyboard";
import RoundStatistic from "./components/RoundStatistic";
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import { Line } from 'rc-progress';
import 'typeface-roboto';




class App extends React.Component<{}, {
	digitsSequence: number[], score: number, level: number, health: number,
	isRoundOngoing: boolean, isSequenceNotGenerated: boolean
}> {

	private currentStep: number;
	private sequenceLength: number;



	constructor(props: any) {
		super(props);
		this.handleStartBtnClick = this.handleStartBtnClick.bind(this);
		this.state = {
			digitsSequence: [],
			score: 0,
			level: 1,
			health: 3,
			isRoundOngoing: false,
			isSequenceNotGenerated: true
		}

		this.currentStep = 0;
		this.sequenceLength = 5;
	}

	setTimeInterval(callback: any, delay: number) {
		var i = 0;
		var intervalId = setInterval(() => {
			callback();
			if (++i === this.sequenceLength) {
				this.setState({ isSequenceNotGenerated: false })
				clearInterval(intervalId);
			}
		}, delay);
	}



	generateNextDigit() {
		const nextNumber: number = Math.floor(Math.random() * 10);
		this.setState({
			digitsSequence: this.state.digitsSequence.concat(nextNumber)
		})

	}

	resetRound(score: number, level: number, newSequenceLength: number, health: number) {
		this.currentStep = 0;
		this.sequenceLength = newSequenceLength;
		this.setState({ isRoundOngoing: false })
		this.setState({ isSequenceNotGenerated: true })
		this.setState({ digitsSequence: [], score: score, level: level, health: health });

	}

	handleStartBtnClick() {
		this.resetRound(0, 0, 5, 3);
		this.setState({ isRoundOngoing: true })
		this.setTimeInterval(() => this.generateNextDigit(), 200);
	}

	handleDigitBtnClick(currentStepActualDigit: number) {
		const currentStepExpectedDigit = this.state.digitsSequence[this.currentStep]
		if (currentStepExpectedDigit === currentStepActualDigit) {
			this.setState({ score: this.state.score + 1 });
			this.currentStep++
		} else {
			if (this.state.health > 1) {
				this.setState({ health: this.state.health - 1 });
			} else {
				this.setState({ health: 0, isRoundOngoing: false });
				alert('Game over');
			}

		}

		if (this.currentStep === this.sequenceLength) {
			this.resetRound(this.state.score, this.state.level + 1, this.sequenceLength + 1, this.state.health)
		}
	}


	render() {
		const digitsSequence: number[] = this.state.digitsSequence;
		const newDigit: number = digitsSequence[digitsSequence.length - 1]//First is NONE!


		return (
			<Grid container component="main">
				<Grid item xs={9} sm={9} md={9} style={{backgroundColor: '#2E2937'}}>
					<Line percent={this.state.health * 100 / 3} strokeWidth={2} trailWidth={2} strokeColor="#3FB250" trailColor="#51475F" />
					<DigitGenerator newDigit={newDigit} sequenceLength={this.sequenceLength}/><br />
					<DigitKeyboard onClick={(digit: number) => this.handleDigitBtnClick(digit)} disabled={this.state.isSequenceNotGenerated} />
				</Grid>
				<Grid item xs={3} sm={3} md={3} style={{backgroundColor: '#8F7EA8'}}>
					<RoundStatistic text={'Level'} level={this.state.level} />
					<RoundStatistic text={'Score'} level={this.state.score} />
					<Fab variant="extended" color="primary" aria-label="add" style={{ minWidth: '350px', minHeight: '120px', backgroundColor: '#3FB250' }}
						onClick={this.handleStartBtnClick} disabled={this.state.isRoundOngoing}>
						Start
        			</Fab>
				</Grid>
			</Grid>
		);
	}
}

export default App;