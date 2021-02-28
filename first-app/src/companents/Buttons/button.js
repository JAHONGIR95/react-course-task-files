import './main.scss';

const Button = ({title, subtitle, btnType}) => {
    return(
        <button className={`btn ${btnType}`}>
            <span>{title}</span> <span>{subtitle}</span>
        </button>
    )
}

export default Button;