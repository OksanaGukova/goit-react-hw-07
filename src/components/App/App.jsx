import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";

function App() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {items.length > 0 && <pre>{JSON.stringify(items, null, 2)}</pre>}
    </div>
  );
}

export default App;
