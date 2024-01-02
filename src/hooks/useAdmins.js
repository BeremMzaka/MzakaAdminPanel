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

    const unsubscribe = onSnapshot(adminsQuery, (querySnapshot) => {
      const adminsData = [];
      querySnapshot.forEach((doc) => {
        // Extract the data from the document
        const { id, first_name, email } = doc.data(); // Adjust properties as needed
        adminsData.push({ id, first_name, email }); // Keep only desired properties
      });

      console.log("Admins Data:", adminsData); // Log the transformed data
      setAdmins(adminsData);
    });

    return () => unsubscribe();
  }, [document]);

  console.log("Admins State:", admins); // Log the state for debugging

  return { admins };
};

export default useAdmins;
