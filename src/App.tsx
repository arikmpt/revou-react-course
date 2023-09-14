import './App.css'
// import { Register } from './containers'
// import { Card } from './components';
import { BookInformation, FormBook } from './containers';

const App = () => {
  
  return (
    <>
      {/* <Register /> */}
      {/* <Card title={'judul kartu'}>
        <p>Ini adalah children props</p>
        <Card title={'ini card yang kedua'}>
          <p>ini adalah children dari card kedua</p>
        </Card>
      </Card> */}
      <FormBook />
      <BookInformation />
    </>
  )
}

export default App
