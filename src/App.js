import { useEffect } from "react";
import Routes from "./Routes/Routes";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  userFailure,
  userRequest,
  userSuccess,
} from "./Redux/Actions/userActions";
import FullPageLoading from "./Components/Loading/FullPageLoading";

const App = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(userRequest());
    auth.onAuthStateChanged((user) => {
      if (user) dispatch(userSuccess(user));
      else dispatch(userFailure(""));
    });
  }, []);

  return loading ? <FullPageLoading /> : <Routes />;
};

export default App;
