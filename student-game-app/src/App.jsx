import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import AssignmentForm from "./components/AssignmentForm";
import AssignmentList from "./components/AssignmentList";
import About from "./pages/About";
import Store from "./pages/Store";

function App() {
  const [assignments, setAssignments] = useState([]);
  const [coins, setCoins] = useState(3000000);

  function handleAddAssignment(assignment) {
    setAssignments((prev) => [...prev, assignment]);
  }

  return (
    <div>
      <nav>
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="/character">Character</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/store">Store</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AssignmentForm onAddAssignment={handleAddAssignment} />
              <AssignmentList assignments={assignments} />
            </>
          }
        />

        <Route
          path="/character"
          element={<h2>Character Page (Coming Soon)</h2>}
        />

        <Route path="/about" element={<About />} />

        <Route path="/store" element={<Store coins={coins} setCoins={setCoins} />} />
      </Routes>
    </div>
  );
}

export default App;
