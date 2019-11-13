import React, { useState } from "react";

// function Clock(props) {
//   return (
//     <div>
//       <h1>Il est : {props.date.toLocaleTimeString()}</h1>
//     </div>
//   );
// }

function App(initialValue) {
  const [state, setState] = useState({
    name: localStorage.name || "",
    surName: localStorage.surName || ""
  });

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
    localStorage[e.target.name] = value;
  }

  return (
    <form>
      <input name="name" value={state.name} onChange={handleChange} />
      <input name="surName" value={state.surName} onChange={handleChange} />
    </form>
  );
}

export default App;
