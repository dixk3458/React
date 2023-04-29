import './App.css';

function App() {
  const name = '정재웅';
  const list = ['우유', '딸기', '바나나'];

  return (
    <div className="App">
      <h1>{`Hello ${name}!`}</h1>
      <h2 style={{ background: 'blue' }}>{name}</h2>

      <ul>
        {list.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
