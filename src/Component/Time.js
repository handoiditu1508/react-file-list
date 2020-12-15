import { Component } from "react";
import moment from "moment";
import PropTypes from "prop-types";

class Time extends Component {
	render() {
		let timeString = moment(this.props.time).fromNow();

		return (
			<span className="time">{timeString}</span>
		);
	}
}

Time.propTypes = {
	time: PropTypes.string.isRequired
};

export default Time;