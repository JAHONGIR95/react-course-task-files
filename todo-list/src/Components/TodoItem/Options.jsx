const Options = ({title, id}) => {
    return(
        <li className="list-group-item d-flex align-items-center justify-content-between">
            <span>{title}</span>

            <div className="d-flex">
                <button className="btn btn-outline-primary me-3">O'zgartirish</button>
                <button className="btn btn-outline-danger">O'chirish</button>
            </div>
        </li>
    )
}

export default Options;