import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, query, collection, doc, getDoc } from "firebase/firestore";

const useClient = (id) => {
  const [client, setClient] = useState({});
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setClient({});
    const getClient = async () => {
      const snap = await getDoc(doc(db, "user_profile", id));

      if (snap.exists()) {
        setClient(snap.data());
      } else {
        console.log("No such document");
      }
    };

    const getProjects = async () => {
      const projectsQuery = query(
        collection(db, `user_profile/${id}/Projects`)
      );
      onSnapshot(projectsQuery, (projectsQuerySnapshot) => {
        setProjects([]);
        projectsQuerySnapshot.forEach((projectVal) => {
          setProjects((prev) => [
            ...prev,
            {
              id: projectVal.id,
              projectData: projectVal.data(),
            },
          ]);
        });
      });
    };

    getClient();
    getProjects();
  }, [id]);

  return { client, projects };
};

export default useClient;
