import React, { Component } from "react";
import { PropFile } from "./PropTypes/PropTypes";
import FileIcon from "./FileIcon";
import Time from "./Time";

class FileListItem extends Component {
	render() {
		return (
			<tr className="filelist-item">
				<td className="file-icon"><FileIcon file={this.props.file} /></td>
				<td className="file-name">{this.props.file.name}</td>
				<td className="commitmessage">{this.props.file.latestCommit.message}</td>
				<td className="age"><Time time={this.props.file.updated_at} /></td>
			</tr>
		);
	}
}

FileListItem.propTypes = {
	file: PropFile.isRequired,
};

export default FileListItem;