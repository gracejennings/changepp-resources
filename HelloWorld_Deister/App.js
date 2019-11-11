import React, { Component } from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View, Slider, ScrollView, Button } from 'react-native';

import Activity from './Activity.js';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // the state manages a group of properties for the app class
            activity1: this.renderActivity(0, "question1", 5),
            activity2: this.renderActivity(0, "question2",6),
            activity3: this.renderActivity(0, "question3",7),
            activity4: this.renderActivity(0, "question4",7),
            activity5: this.renderActivity(0, "question5",6),
            activity6: this.renderActivity(0, "question6",5),
        };
    }

    renderActivity(startValue, question, maxValue) {
        return <Activity startValue = {startValue} question = {question} maxValue = {maxValue}/>
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>{"Carbon Counter"}</Text>
                    {this.state.activity1}
                    {this.state.activity2}
                    {this.state.activity3}
                    {this.state.activity4}
                    {this.state.activity5}
                    {this.state.activity6}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: 80,
        marginBottom: 10,
    },
});