
import PropTypes from 'prop-types';

const RenderName = ({name = "Zach"}) => {
    return <h2 data-testid="name">{name}</h2>;
};

RenderName.propTypes = {
    name: PropTypes.string.isRequired,
};

RenderName.defaultProps = {
    name: 'Zach',
};

export default RenderName;
