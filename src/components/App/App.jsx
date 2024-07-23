import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";
import ContactForm
  from "../ContactForm/ContactForm";
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import { selectError, selectIsLoading } from "../../redux/selectors";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
   const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const Layout = ({ children }) => {
  return <main>{children}</main>;
};

  return (
    <Layout>
      <div>
        <h1>Contact Manager</h1>
        <ContactForm />
        {isLoading && !error && <b>Request in progress...</b>}
        <SearchBox />
        <ContactList />
      </div>
    </Layout>
  );
}

export default App;
