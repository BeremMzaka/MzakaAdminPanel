import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, query, collection } from "firebase/firestore";

const useUsers = (document) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([]);
    const usersQuery = query(collection(db, document));
    const unsubscribe = onSnapshot(usersQuery, (querySnapshot) => {
      querySnapshot.forEach((val) => {
        setUsers((prev) => [...prev, val.data()]);
      });
    });

    return () => unsubscribe();
  }, [document]);

  return { users };
};

export default useUsers;
