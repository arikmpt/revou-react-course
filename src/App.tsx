import './App.css'
import { Text, TextSatuLagi, Biodata } from './components';
import { useState } from 'react'

// step to create state
// 1 import useState dri react

interface UserData {
  id: number;
  name: string;
  address: string;
}

const App = () => {
  const name = 'Ari Putra'

  const [bootcamp, setBootcamp] = useState<string>('Revou');
  const [address, setAddress] = useState<string>();
  const [count, setCount] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [users, setUsers] = useState<UserData[]>([])

  const handleChangeBootcamp = () => {
    setBootcamp((prevState) => `Kelas ${prevState}`)
  }

  const handleChangeCount = () => {
    setCount((count) => count + 1)
  }

  const handleOpen = () => {
    setOpen((prevState) => !prevState)
  }

  const handleAddUser = () => {

    setUsers((prevState) => [...prevState, {
      id: prevState.length + 1,
      name: 'Ari',
      address: 'Batam'
    }])
  }


  return (
    <div>
      <p className={'red-text'}>Ini adalah sebuah contoh component created by {name}</p>
      <p>ini adalah value dari state 1: {bootcamp}</p>
      <p>ini adalah value dari state 2: {address}</p>
      <p>hitungan: {count}</p>
      <TextSatuLagi />

      <button onClick={handleChangeBootcamp}>Ubah Isi State 1</button>
      <button onClick={() => setAddress('Jakarta')}>Ubah Isi State 2</button>
      <button onClick={handleChangeCount}>Naikan Hitungan</button>
      <button onClick={handleOpen}>Buka Modal</button>
      {open && (
        <p>Buka Terbuka</p>
      )}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleAddUser}>Isi Data User</button>

      <h1>Props</h1>

      <Text content={'Ini adalah contoh props'}/>

      <Biodata 
        name={'Ari'} 
        age={20} 
        status={'married'} 
        child={<Text content={'ini adalah component lain'}/>}
      />
    </div>
  );
  
}

export default App
