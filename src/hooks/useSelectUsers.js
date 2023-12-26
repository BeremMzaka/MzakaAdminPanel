import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, query, collection } from "firebase/firestore";

const useSelectUsers = (document) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([]);
    const usersQuery = query(collection(db, document));
    const unsubscribe = onSnapshot(usersQuery, (querySnapshot) => {
      querySnapshot.forEach((val) => {
        setUsers((prev) => [
          ...prev,
          {
            id: val.data().id,
            value: val.data().first_name,
            label: val.data().first_name,
          },
        ]);
      });
    });

    return () => unsubscribe();
  }, [document]);

  return { users };
};

export default useSelectUsers;
