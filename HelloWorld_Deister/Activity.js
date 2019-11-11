import React, { Component } from 'react';
import {Slider, StyleSheet, Text, View} from "react-native";

const question1 = "How many people do you live with?";
const question2 = "How many bedrooms are in your house?"
const question3 = "How many days/week do you eat meat?"
const question4 = "How many times/week do you run your dishwater or washing machine?"
const question5 = "How many new items do you buy for your household per year? (cost > $100)"
const question6 = "How many garbage cans do you fill per week?"

class Question extends React.Component {
    render() {
        switch(this.props.value) {
            case "question1": return <Text style={styles.question}>{question1}</Text>
            case "question2": return <Text style={styles.question}>{question2}</Text>
            case "question3": return <Text style={styles.question}>{question3}</Text>
            case "question4": return <Text style={styles.question}>{question4}</Text>
            case "question5": return <Text style={styles.question}>{question5}</Text>
            case "question6": return <Text style={styles.question}>{question6}</Text>
        }
    }
}

class Activity extends React.Component {
    constructor(props)   {
        super(props);
        this.state = {
            value: this.props.startValue,
        };
    }

    renderQuestion(question) {
        return <Question value = {question} />;
    }

    changeValue(value) {
        this.setState(() => {
            return {
                value: parseFloat(value),
            };
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderQuestion(this.props.question)}
                <Text style={styles.value}>{String(this.state.value)}</Text>
                <Slider
                    style={styles.slider}
                    step={1}
                    maximumValue={this.props.maxValue}
                    onValueChange={this.changeValue.bind(this)}
                    value={this.state.value}
                    minimumTrackTintColor={'darkseagreen'}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    question: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    value: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    slider: {
        marginLeft: 20,
        marginRight: 20,
    },
});

export default Activity;