import React from "react";
import quotes from "./quotes.json";
class DailyQuotes extends React.Component {
    constructor() {
        super();
        this.state = { day: null };
    }
    componentDidMount() {
        const d = new Date();
        let day = d.getDay();
        this.setState({ day: day });
    }
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <p>{this.state.day!=null?quotes[this.state.day][Math.floor(Math.random() * 2)]:"Have a good day!"}</p>
            </div>
        );
    }
}
export default DailyQuotes;