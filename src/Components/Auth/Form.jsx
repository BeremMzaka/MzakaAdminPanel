import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

// style
import "./signin.style.css";
import { resetPassword } from "../../API/API";
// icons
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

// validations
import { useFormik } from "formik";
import * as Yup from "yup";

// redux
import {
  userRequest,
  userSuccess,
  userFailure,
} from "../../Redux/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";

// firebase
import { db, auth } from "../../firebase";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getDoc, doc, where } from "firebase/firestore";

const Form = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.userReducer);
  const [showPassword, setShowPassword] = useState(false);
  const resetPasswordRef = useRef(null);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required").min(8),
  });

  const onSubmit = async () => {
    if (formik.values.email && formik.values.password) {
      dispatch(userRequest());
      await signInWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      )
        .then(async (userCredential) => {
          const snap = await getDoc(
            doc(db, "user_profile", userCredential.user.uid)
          );

          if (snap.data().isAdmin) {
            dispatch(userSuccess(snap.data()));
            history.push("/dashboard");
          } else {
            auth.signOut().then(() => {
              dispatch(userFailure("You are not an admin"));
            });
          }
        })
        .catch((err) => {
          dispatch(userFailure(err.code));
        });
    }
  };

  // Import the resetPassword function from your API file

  const handleResetPassword = async () => {
    try {
      resetPasswordRef.current = true; 
      const result = await resetPassword(formik.values.email);
      alert("Password reset email sent successfully");
    } catch (error) {
      alert("Error sending password reset email: " + error.message);
    }
  }; 
        
        // Call the resetPassword function with the email address from formik values
       
        
      
  
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="error">{error && error}</div>
      <div className="email__field">
        <label htmlFor="email">Nom d'utilisateur</label>
        <br />
        <input
          type="email"
          placeholder="Mzaka113@gmail.com"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div id="error">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="password__field">
        <label htmlFor="password">Mot de passe</label>
        <br />
        <div className="password__input__area">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="8 + personnages"
            id="password"
            name="password"
            {...formik.getFieldProps("password")}
          />
          <div
            className="password__icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </div>
        </div>

        {formik.touched.password && formik.errors.password ? (
          <div id="error">{formik.errors.password}</div>
        ) : null}
      </div>
      <button type="button" onClick={handleResetPassword}>
        Reset Password
        <br/>
      </button>
      <br/>
      <button id="signin__btn" type="submit" disabled={loading}>
        {loading ? "Chargement en cours..." : "Connexion"}
      </button>

    </form>
  );
};

export default Form;
