import { useEffect, useState } from "react";
import Header from "./Header";
import ToyContainer from "./ToyContainer";
import ToyForm from "./ToyForm";

function App() {
  const [baseToys, setBaseToys] = useState([]);
  const [addedToys, setAddedToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((data) => setBaseToys(data));
  }, []);

  function handleAddToy(newToy) {
    setAddedToys([...addedToys, newToy]);
  }

  function handleDeleteToy(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    });

    setBaseToys(baseToys.filter((toy) => toy.id !== id));
    setAddedToys(addedToys.filter((toy) => toy.id !== id));
  }

  function handleLikeToy(toy) {
    const updatedToy = {
      ...toy,
      likes: toy.likes + 1,
    };

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: updatedToy.likes,
      }),
    })
      .then((r) => r.json())
      .then(() => {
        setBaseToys(baseToys.map((t) =>
          t.id === toy.id ? updatedToy : t
        ));
        setAddedToys(addedToys.map((t) =>
          t.id === toy.id ? updatedToy : t
        ));
      });
  }

  return (
    <div className="app">
      <Header />

      <main className="content">
        <ToyForm onAddToy={handleAddToy} />

        <section className="toy-section available-toys">
          <h2>Available Toys</h2>
          <ToyContainer
            toys={baseToys}
            onDeleteToy={handleDeleteToy}
            onLikeToy={handleLikeToy}
          />
        </section>

        <section className="toy-section added-toys">
          <h2>Your Added Toys</h2>
          {addedToys.length ? (
            <ToyContainer
              toys={addedToys}
              onDeleteToy={handleDeleteToy}
              onLikeToy={handleLikeToy}
            />
          ) : (
            <p className="no-toys">No toys added yet. Add a toy to see it here.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;