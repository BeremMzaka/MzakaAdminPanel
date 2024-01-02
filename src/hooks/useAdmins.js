import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, query, collection, where } from "firebase/firestore";

const useAdmins = (document) => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const adminsQuery = query(
      collection(db, document),
      where("isAdmin", "==", true)
    );
    //   const unsubscribe = onSnapshot(adminsQuery, (querySnapshot) => {
    //     console.log(querySnapshot);
    //     setAdmins([]);
    //     querySnapshot?.forEach((val) => {
    //       setAdmins((prev) => [...prev, val?.data()]);
    //     });
    //   });

    //   return () => unsubscribe();
  }, [document]);

  return { admins };
};

export default useAdmins;
