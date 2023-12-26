import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, query, collection, doc, getDoc } from "firebase/firestore";

const useConstructor = (id) => {
  const [constructor, setConstructor] = useState({});
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setConstructor({});
    const getConstructor = async () => {
      const snap = await getDoc(doc(db, "user_profile", id));

      if (snap.exists()) {
        setConstructor(snap.data());
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

    getConstructor();
    getProjects();
  }, [id]);

  return { constructor, projects };
};

export default useConstructor;
