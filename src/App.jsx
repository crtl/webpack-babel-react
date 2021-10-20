import React, {useState} from "react";

import "./App.scss";
import styled from "styled-components";

const AppStyle = styled.div`
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
    padding: 40px 20p;
`;

export function App(props) {

    const [count, setCount] = useState(0);

    return (<AppStyle id="App">
        <h1>React works</h1>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </AppStyle>);
}

