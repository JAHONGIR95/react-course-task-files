const Options = ({title, id}) => {
    return(
        <li className="list-group-item">
            <span>{title}</span>

            <div className="d-flex">
                <button className="btn btn-primary">O'zgartirish</button>
                <button className="btn btn-danger">O'chirish</button>
            </div>
        </li>
    )
}