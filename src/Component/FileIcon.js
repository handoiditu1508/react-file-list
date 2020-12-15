import React, { Component } from "react";
import {PropFile} from "./PropTypes/PropTypes";

class FileIcon extends Component {
	render() {
		let icon = 'fa-file-alt';
		if (this.props.file.type === 'folder') {
			icon = 'fa-folder';
		}

		return (
			<i className={`fas ${icon}`} />
		);
	}
}

FileIcon.propTypes = {
	file: PropFile.isRequired,
};

export default FileIcon;