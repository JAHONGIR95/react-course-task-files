import './Assets/styles/App.scss';

function App() {
  return (
    <div className="container">
      <div className="col-md-6 offset-3">
      
      <div className="card mt-5">
        <div className="card-header">
          <h1>Qaydlar soni: 0</h1>
        </div>
        <div className="card-body">
          <form className="d-flex">
            <input type="text" className="form-control me-3"/>
            <button type="submit" className="btn btn-success">Qo'shish</button>
          </form>
          
            
            <li className="list-group-item">Salom</li>
            <li className="list-group-item">Salom</li>
            <li className="list-group-item">Salom</li>
            <li className="list-group-item">Salom</li>
          </ul>
        </div>
        <div className="card-footer d-flex justify-content-end">
          <button className="btn btn-danger me-3">Tozalash</button>
          <button className="btn btn-primary">Saqlash</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
