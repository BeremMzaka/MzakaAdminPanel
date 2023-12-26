import React, { useEffect } from "react";

const useSignin = (email, password) => {
  const [userCredentials, setUserCredentials] = useState({});
  useEffect(() => {
    const signin = async (email, password) => {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const snap = await getDoc(
            doc(db, "user_profile", userCredential.user.uid)
          );

          if (snap.exists()) {
            setUserCredentials({
              id: user,
            });
          } else {
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    signin();
  }, []);

  return { userCredentials };
};

export default useSignin;
