import React, { Component } from "react";

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onLeaveFeedback() {
        
    }

    countTotalFeedback() {

    }

    countPositiveFeedbackPercentage() {

    }

    render() {
        return (
            <div>
                <div>
                    <h2>Please leave feedback</h2>
                    <button type="button">Good</button>
                    <button type="button">Neutral</button>
                    <button type="button">Bad</button>
                </div>
                <div>
                    <h2>Statistics</h2>
                    <p>Good: </p>
                    <p>Neutral: </p>
                    <p>Bad: </p>
                    <p>Total: </p>
                    <p>Positive feedback: </p>
               </div>
            </div>
        )
    }
}