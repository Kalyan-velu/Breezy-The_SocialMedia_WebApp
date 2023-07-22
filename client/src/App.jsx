import {useSnackbar} from 'notistack';
import React, {Suspense} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadUser} from "../src/features/action/userAction.js";
import Layout from "./common/layouts";
import AppRouter from './pages'

const Navbar = React.lazy(() =>
  import("./common/components/Navbar"));

function App() {
  const dispatch = useDispatch()
  const {enqueueSnackbar} = useSnackbar();
  const {user, variant, isAuthenticated, message} = useSelector(({app}) => app)

  React.useEffect(() => {
    if (variant && message) {
      enqueueSnackbar(message, {variant});
    }
    dispatch({type: "clearStatus"})
  }, [variant, message])
  React.useEffect(() => {
    if (!user) {
      dispatch({type: "AUTHENTICATED", payload: false})
    }
  }, [user])
  React.useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])
  return (
    <>
      {isAuthenticated &&
        <Suspense fallback={<>Loading</>}>
          <Navbar/>
        </Suspense>}
      <Layout isAuthenticated>
        <AppRouter/>
      </Layout>
    </>
  );
}

export default App;