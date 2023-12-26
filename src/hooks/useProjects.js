import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, query, collection } from "firebase/firestore";

const useProjects = (document) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const userQuery = query(collection(db, document));
    const unsubscribe = onSnapshot(userQuery, async (usersQuerySnapshot) => {
      usersQuerySnapshot.forEach(async (val) => {
        if (val.data().id) {
          const projectsQuery = query(
            collection(db, `${document}/${val.data().id}/Projects`)
          );
          setProjects([]);
          onSnapshot(projectsQuery, (projectsQuerySnapshot) => {
            projectsQuerySnapshot.forEach((projectVal) => {
              setProjects((prev) => [
                ...prev,
                {
                  client: val.data(),
                  project: projectVal.data(),
                  projectId: projectVal.id,
                },
              ]);
            });
          });
        }
      });
    });

    return () => unsubscribe();
  }, [document]);

  return {
    projects,
  };
};

export default useProjects;
