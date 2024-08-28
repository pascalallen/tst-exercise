import './ValidationError.css';

const ValidationError = (props) => {
    const { errorMessage } = props;

    return (
        <div className="validation-error">
            {errorMessage}
        </div>
    );
};

export default ValidationError;