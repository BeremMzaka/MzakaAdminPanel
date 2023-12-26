import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, query, collection, where } from "firebase/firestore";

const useCount = (document) => {
  const [clients, setClients] = useState(0);
  const [constructors, setConstructors] = useState(0);
  const [pendingProjects, setPendingProjects] = useState(0);
  const [activeProjects, setActiveProjects] = useState(0);
  const [reviewdProjects, setReviewdProjects] = useState(0);

  useEffect(() => {
    setClients(0);
    setConstructors(0);
    setActiveProjects(0);
    setPendingProjects(0);
    setReviewdProjects(0);
    // clients count
    const clientsQuery = query(
      collection(db, document),
      where("isClient", "==", true)
    );

    const unsubscribeClients = onSnapshot(
      clientsQuery,
      (clientsQuerySnapshot) => {
        setClients(clientsQuerySnapshot.size);
      }
    );

    // constructors count
    const constructorsQuery = query(
      collection(db, document),
      where("isClient", "==", false)
    );

    const unsubscribeConstructors = onSnapshot(
      constructorsQuery,
      (constructorsQuerySnapshot) => {
        setConstructors(constructorsQuerySnapshot.size);
      }
    );

    // projects count
    const userQuery = query(collection(db, document));
    const unsubscribeProjects = onSnapshot(
      userQuery,
      async (usersQuerySnapshot) => {
        usersQuerySnapshot.forEach(async (val) => {
          if (val.data().id) {
            let pendingCount = 0;
            let activeCount = 0;
            let reviewdCount = 0;
            const projectsQuery = query(
              collection(db, `${document}/${val.data().id}/Projects`)
            );
            onSnapshot(projectsQuery, (projectsQuerySnapshot) => {
              projectsQuerySnapshot.forEach((projectVal) => {
                if (!projectVal.data().project_status) {
                  pendingCount++;
                  setPendingProjects(pendingCount);
                }
                if (projectVal.data().project_status === "examine") {
                  reviewdCount++;
                  setReviewdProjects(reviewdCount);
                }
                if (projectVal.data().project_status === "active") {
                  activeCount++;
                  setActiveProjects(activeCount);
                }
              });
            });
          }
        });
      }
    );

    return () => {
      unsubscribeClients();
      unsubscribeConstructors();
      unsubscribeProjects();
    };
  }, [document]);

  return {
    clients,
    constructors,
    pendingProjects,
    activeProjects,
    reviewdProjects,
  };
};

export default useCount;
