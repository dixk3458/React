import './App.css';

function App() {
  const name = '정재웅';

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2 style={{ background: 'blue' }}>{name}</h2>

      <ul>
        <li>사과</li>
        <li>수박</li>
        <li>포도</li>
      </ul>
    </div>
  );
}

export default App;
