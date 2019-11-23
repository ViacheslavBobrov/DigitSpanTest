import React from "react";
import DigitWindow from "./DigitWindow";
import DigitKeyboard from "./DigitKeyboard";
import CircleStatistic from "./CircleStatistic";
import Grid from '@material-ui/core/Grid';
import HealthBar from './HealthBar';
import 'typeface-roboto';
import StartButton from "./StartButton";
import '../index.css'



class App extends React.Component<{}, {
	digitsSequence: number[], score: number, level: number, health: number, currentSymbol: any,
	isRoundOngoing: boolean, isSequenceNotGenerated: boolean
}> {

	private currentStep: number;
	private sequenceLength: number;
	private isGameOver: boolean;



	constructor(props: any) {
		super(props);
		this.handleStartBtnClick = this.handleStartBtnClick.bind(this);
		this.state = {
			digitsSequence: [],
			score: 0,
			level: 1,
			health: 3,
			currentSymbol: "",
			isRoundOngoing: false,
			isSequenceNotGenerated: true
		}

		this.currentStep = 0;
		this.sequenceLength = 3;
		this.isGameOver = false;
	}

	setTimeInterval(callback: any, delay: number) {
		var i = 0;
		var intervalId = setInterval(() => {
			if (i === this.sequenceLength) {
				this.setState({ isSequenceNotGenerated: false, currentSymbol: "" })
				clearInterval(intervalId);
			} else {
				callback();
				i++;
			}

		}, delay);
	}



	generateNextDigit() {
		const nextNumber: number = Math.floor(Math.random() * 10);
		this.setState({
			digitsSequence: this.state.digitsSequence.concat(nextNumber),
			currentSymbol: nextNumber
		})
	}

	resetRound(score: number, level: number, newSequenceLength: number, health: number, currentSymbol: any) {
		this.currentStep = 0;
		this.sequenceLength = newSequenceLength;
		this.setState({
			digitsSequence: [], score: score, level: level, health: health, currentSymbol: currentSymbol,
			isSequenceNotGenerated: true, isRoundOngoing: false
		});
	}

	handleStartBtnClick() {
		const state = this.state
		if (this.isGameOver) {
			this.resetRound(0, 1, 3, 3, "");
			this.isGameOver = false;
		} else {
			this.resetRound(state.score, state.level, this.sequenceLength, state.health, state.currentSymbol);
		}

		this.setState({ isRoundOngoing: true })
		this.setTimeInterval(() => this.generateNextDigit(), 1000);
	}

	handleDigitBtnClick(currentStepActualDigit: number) {
		const state = this.state
		const currentStepExpectedDigit = this.state.digitsSequence[this.currentStep]
		if (currentStepExpectedDigit === currentStepActualDigit) {
			this.setState({ score: state.score + 1, currentSymbol: currentStepExpectedDigit });
			this.currentStep++
		} else {
			if (state.health > 1) {
				this.setState({ health: state.health - 1, currentSymbol: 'X' });
			} else {
				this.setState({ health: 0, isRoundOngoing: false, isSequenceNotGenerated: true });
				this.isGameOver = true;
			}

		}

		if (this.currentStep === this.sequenceLength) {
			this.resetRound(state.score + 1, state.level + 1, this.sequenceLength + 1, state.health, 'V')
		}
	}


	render() {
		const state = this.state
		return (
			<Grid container component="main" style={{ height: '100vh'}}>
				<Grid item xs={9} sm={9} md={9} style={{ backgroundColor: '#2E2937' }}>
					<HealthBar health={state.health} />
					<DigitWindow newDigit={state.currentSymbol} sequenceLength={this.sequenceLength} isGameOver={this.isGameOver} />
					<DigitKeyboard onClick={(digit: number) => this.handleDigitBtnClick(digit)}
						disabled={state.isSequenceNotGenerated} />
				</Grid>
				<Grid item xs={3} sm={3} md={3} style={{ backgroundColor: '#8F7EA8' }}>
					<CircleStatistic text={'Level'} level={this.state.level} />
					<CircleStatistic text={'Score'} level={this.state.score} />
					<StartButton onClick={this.handleStartBtnClick} disabled={state.isRoundOngoing} isGameOver={this.isGameOver} />
				</Grid>
			</Grid>
		);
	}
}

export default App;