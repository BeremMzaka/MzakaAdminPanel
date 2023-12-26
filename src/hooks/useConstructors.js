import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, query, collection, where } from "firebase/firestore";

const useConstructors = (document) => {
  const [constructors, setConstructors] = useState([]);

  useEffect(() => {
    const constructorsQuery = query(
      collection(db, document),
      where("isClient", "==", false)
    );
    const unsubscribe = onSnapshot(constructorsQuery, (querySnapshot) => {
      setConstructors([]);
      querySnapshot.forEach((val) => {
        setConstructors((prev) => [...prev, val.data()]);
      });
    });

    return () => unsubscribe();
  }, [document]);

  return { constructors };
};

export default useConstructors;
