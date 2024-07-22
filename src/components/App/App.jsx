import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";
import ContactForm
  from "../ContactForm/ContactForm";
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import { getError, getIsLoading } from "../../redux/selectors";

function App() {
  const dispatch = useDispatch();

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
        {getIsLoading && !getError && <b>Request in progress...</b>}
        <SearchBox />
        <ContactList />
      </div>
    </Layout>
  );
}

export default App;
