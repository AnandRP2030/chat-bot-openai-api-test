import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [chat, setChat] = useState("");
  const [response, setResponse] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    askGpt();
  };
  const askGpt = async () => {
    try {
      const res = await axios.post("http://localhost:4000/ask", {
        prompt: chat,
      });

      console.log("res", res);
      const msg = res?.data?.message?.choices[0]?.message?.content || null;
      if (msg) {
        setResponse(msg);
        setChat("");
        return;
      }
      // setResponse(res.data.message);
    } catch (error) {
      console.warn("error", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          style={{ width: "300px", height: "200px", fontSize: "20px" }}
          type="text"
          placeholder="Ask"
          value={chat}
          onChange={(e) => setChat(e.target.value)}
        />
        <input type="submit" value="ask" />
      </form>

      <div style={{ marginTop: "30px" }}>
        <h3> {response}</h3>
      </div>
    </div>
  );
}

export default App;
