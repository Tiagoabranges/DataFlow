import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/data");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <h1>Dados do Banco</h1>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Protocolo</th>
            <th>UTC</th>
            <th>Status</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={`row-style-${index % 3}`}>
              <td>{item.type}</td>
              <td>{item.protocolo}</td>
              <td>{item.utc}</td>
              <td>{item.status}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
