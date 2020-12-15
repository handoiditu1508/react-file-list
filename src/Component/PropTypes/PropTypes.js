import PropTypes from "prop-types";

var PropFile = PropTypes.shape({
	id: PropTypes.number,
	name: PropTypes.string,
	type: PropTypes.oneOf(["file", "folder"]),
	updated_at: PropTypes.string,
	latestCommit: PropTypes.shape({
		message: PropTypes.string,
	}),
});

export {PropFile};