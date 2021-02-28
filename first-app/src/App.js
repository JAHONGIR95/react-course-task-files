import { Fragment } from 'react';
import Button from './companents/Buttons/button';

function App() {
  return (
    <Fragment>
      <h1>Hellooou world</h1>
      <h2>Salom Dunyo</h2>
      <Button title="Birinchi" subtitle="button" btnType="primary"/>
      <Button title="Ikkinchi" subtitle="button" btnType="secondary"/>
      <Button title="Uchinchi" subtitle="button" btnType="warning"/>
      <Button title="To'rtinchi" subtitle="button" btnType="success"/>
      <Button title="Beshinchi" subtitle="button" btnType="danger"/>
    </Fragment>
  );
}

export default App;
