import { useState } from "react";
import "./App.css";

function Random() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  function addItem() {
    if (!newItem) {
      alert("Enter an item");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }
  return (
    <div className="main">
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Add Items..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value} <button onClick={() => deleteItem(item.id)}>❌</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Random;
// // eslint-disable-next-line no-unused-vars
// import "./App.css";
// import { useState } from "react";

// function Random() {
//   const [newItem, setNewItem] = useState("");
//   const [items, setItems] = useState([]);

//   function addItem() {
//     if (!newItem) {
//       alert("enter an item");
//       return;
//     }

//     const item = {
//       id: Math.floor(Math.random() * 1000),
//       value: newItem,
//     };
//     setItems((oldList) => [...oldList, item]);
//     setNewItem("");
//   }
//   function deleteItem(id) {
//     const newArray = items.filter((item) => item.id !== id);
//     setItems(newArray);
//   }

//   return (
//     <div className="App">
//       <h1>Todo List</h1>

//       <input
//         type="text"
//         placeholder="Add your items..."
//         value={newItem}
//         onChange={(e) => setNewItem(e.target.value)}
//       />
//       <button onClick={() => addItem()}>Add</button>

//       <ul>
//         {items.map((item) => {
//           return (
//             <li key={item.id}>
//               {item.value} <button onClick={() => deleteItem(item.id)}>❌</button>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default Random;
