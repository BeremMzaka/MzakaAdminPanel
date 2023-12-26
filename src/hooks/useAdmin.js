import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const useAdmin = (id) => {
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    setAdmin({});
    const getAdmin = async () => {
      const snap = await getDoc(doc(db, "user_profile", id));

      if (snap.exists()) {
        setAdmin(snap.data());
      } else {
        console.log("No such document");
      }
    };

    getAdmin();
  }, [id]);

  return { admin };
};

export default useAdmin;
