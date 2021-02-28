import './main.scss';

const Button = ({title, subtitle}) => {
    return(
        <button>
            <span>{title}</span> <span>{subtitle}</span>
        </button>
    )
}

export default Button;