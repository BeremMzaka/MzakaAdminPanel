import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, query, collection, where } from "firebase/firestore";

const useClients = (document) => {
  const [clients, setClients] = useState([]);

  useEffect( () => {
    const clientsQuery = query(
      collection(db, document),
      where("isClient", "==", true)
    );
    const unsubscribe = onSnapshot(clientsQuery, (querySnapshot) => {
      setClients([]);
      querySnapshot.forEach(async (val) => {
        setClients((prev) => [...prev, val.data()]);
      });
    });

    return () => unsubscribe();
  }, [document]);
  return { clients };
};

export default useClients;
