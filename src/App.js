import { shallowEqual, useSelector } from "react-redux";

// Components
import { Layout } from "@components/Layout";
import { Form } from "@components/Form";
import { Frame } from "@components/Frame";
import { isLoadingSelector } from "@selectors/app.selectors";
import { Loader } from "@components/Loader";

const App = () => {
  const isLoading = useSelector(isLoadingSelector, shallowEqual);

  return (
    <Layout>
      {isLoading ? <Loader /> : <Frame />}
      <Form />
    </Layout>
  );
};

export default App;
