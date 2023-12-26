import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const useProjectDetails = (userId, projectId) => {
  const [projectDetails, setProjectDetails] = useState({});
  const [clientDetails, setClientDetails] = useState({});

  useEffect(() => {
    setProjectDetails({});
    setClientDetails("");

    // Getting client name
    const getClient = async () => {
      const clientSnap = await getDoc(doc(db, "user_profile", userId));

      if (clientSnap.exists()) {
        setClientDetails(clientSnap.data());
      } else {
        console.log("No such document");
      }
    };

    // Getting project details
    const getProjectDetails = async () => {
      const projectSnap = await getDoc(
        doc(db, "user_profile", userId, "Projects", projectId)
      );

      if (projectSnap.exists()) {
        setProjectDetails(projectSnap.data());
      } else {
        console.log("No such document");
      }
    };

    getClient();
    getProjectDetails();
  }, [userId && projectId]);

  return { projectDetails, clientDetails };
};

export default useProjectDetails;
