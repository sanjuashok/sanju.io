import React, {Component} from 'react';
import { VictoryTooltip, VictoryAxis, VictoryChart, VictoryTheme, VictoryLine } from 'victory';
import './styles/Fitness.css';
import {weightData} from '../static/data/weight.js';

class Fitness extends Component {
    constructor() {
        super();
        this.state = Object.assign({}, weightData);
    }

    _getDateTickValues() {

    }

    render() {
        return (
            <div className="Fitness">
                <VictoryChart theme={VictoryTheme.material} scale={{ x: "time", y:"linear" }}>
                    <VictoryAxis
                        tickFormat={
                            (x) => {
                                return x.getFullYear() + "/" + x.getUTCMonth() + "/" +x.getUTCDay();
                            }
                        }
                        style={{tickLabels: {fontSize: 5,angle: 45}}}

                    />
                    <VictoryAxis dependentAxis crossAxis
                        tickFormat = {
                            (y) => {
                                    return y.toFixed(1)
                            }
                        }

                    />

                    <VictoryLine style={{
                            data: {
                                stroke: "#c43a31"
                            },
                            parent: {
                                border: "1px solid #ccc"
                            },

                        }} data={this.state.data}
                            x="date"
                            y="weight"
                            labelComponent={<VictoryTooltip/>}
                    />
                </VictoryChart>
            </div>
        );
    }
}

export default Fitness;
