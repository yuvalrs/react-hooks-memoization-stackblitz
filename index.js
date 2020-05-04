import React, { useState } from 'react';
import { render } from 'react-dom';
import { log, getInitialItems } from './utils';

const List = React.memo(({ items }) => {
  log('renderList');
  return items.map((item, key) => <div key={key}>item: {item.text}</div>);
});

export default function App() {
  log('renderApp');

  const [count, setCount] = useState(0);
  const [items, setItems] = useState(getInitialItems(10));

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        inc
      </button>
      <List items={items} />
    </div>
  );
}

render(<App />, document.getElementById('root'));
