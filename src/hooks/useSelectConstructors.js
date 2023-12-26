import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, query, collection, where } from "firebase/firestore";

const useSelectConstructors = (userId, projectId) => {
  const [newConstructors, setNewConstructors] = useState([]);
  const [oldConstructors, setOldConstructors] = useState([]);

  useEffect(() => {
    setOldConstructors([]);
    setNewConstructors([]);
    const constructorsQuery = query(
      collection(db, "user_profile"),
      where("isClient", "==", false)
    );

    const projectConstructorsQuery = query(
      collection(
        db,
        "user_profile",
        userId,
        "Projects",
        projectId,
        "Constructors"
      )
    );

    const unsubscribe = onSnapshot(
      projectConstructorsQuery,
      (projectConstructorsSnapshot) => {
        setOldConstructors([]);
        projectConstructorsSnapshot.forEach((val) => {
          setOldConstructors((prev) => [
            ...prev,
            {
              id: val.data().id,
              value: val.data().name,
              label: val.data().name,
            },
          ]);
        });
      }
    );

    const unsubscribe1 = onSnapshot(constructorsQuery, (querySnapshot) => {
      setNewConstructors([]);
      querySnapshot.forEach((outerVal) => {
        setNewConstructors((prev) => [
          ...prev,
          {
            id: outerVal.data().id,
            value: outerVal.data().first_name,
            label: outerVal.data().first_name,
          },
        ]);
      });
    });

    return () => {
      unsubscribe();
      unsubscribe1();
    };
  }, [userId, projectId]);

  return { newConstructors, oldConstructors };
};

export default useSelectConstructors;
