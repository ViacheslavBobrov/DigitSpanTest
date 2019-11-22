import React from "react";
import DigitKeyboard from "./DigitKeyboard";
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
				alert('Game over');
				this.resetRound(0, 0, 5, 3);
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
			<div>
				<div>New digit {newDigit}</div><br />
				<button onClick={this.handleStartBtnClick} disabled={this.state.isRoundOngoing}>Start</button>
				<DigitKeyboard onClick={(digit: number) => this.handleDigitBtnClick(digit)} disabled={this.state.isSequenceNotGenerated} />
				<div>Score: {this.state.score}</div>
				<div>Level: {this.state.level}</div>
				<div>Health: {this.state.health}</div>
				<div>Hint: {digitsSequence}</div>
			</div>
		);
	}
}

export default App;