import React, { Component } from "react";
import PropTypes from "prop-types";
import FileListItem from "./FileListItem";
import {PropFile} from "./PropTypes/PropTypes";

class FileList extends Component {
	render() {
		return (
			<table className="filelist">
				<tbody>
					{this.props.files.map(file => (
						//any time use map to render array, require key at top most element
						//key should be unchange and unique
						//component will not receive key prop
						<FileListItem key={file.id} file={file} />
					))}
				</tbody>
			</table>
		);
	}
}

FileList.propTypes = {
	files: PropTypes.arrayOf(PropFile)
};

export default FileList;