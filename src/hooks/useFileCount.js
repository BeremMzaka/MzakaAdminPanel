import { useEffect, useState } from "react";

// firebase
import { db, auth } from "../firebase";
import { onSnapshot, query, collection, where } from "firebase/firestore";

const useFileCount = (userId, projectId) => {
  const [documents, setDocuments] = useState(0);
  const [photos, setPhotos] = useState(0);
  const [plans, setPlans] = useState(0);
  const [files, setFiles] = useState(0);

  useEffect(() => {
    // documents count
    const documentQuery = query(
      collection(db, `user_profile/${userId}/Projects/${projectId}/Comments`),
      where("fileType", "==", "Document")
    );

    const unsubscribeDocuments = onSnapshot(
      documentQuery,
      (documentQuerySnapshot) => {
        setDocuments(documentQuerySnapshot.size);
      }
    );

    // photos and videos count
    const photoQuery = query(
      collection(db, `user_profile/${userId}/Projects/${projectId}/Comments`),
      where("fileType", "in", ["Image", "Video"])
    );

    const unsubscribePhotos = onSnapshot(photoQuery, (photoQuerySnapshot) => {
      setPhotos(photoQuerySnapshot.size);
    });

    // plans count
    const planQuery = query(
      collection(db, `user_profile/${userId}/Projects/${projectId}/Comments`),
      where("fileType", "==", "Plan")
    );

    const unsubscribePlans = onSnapshot(planQuery, (planQuerySnapshot) => {
      setPlans(planQuerySnapshot.size);
    });

    // files count
    const fileQuery = query(
      collection(db, `user_profile/${userId}/Projects/${projectId}/Comments`),
      where("fileType", "==", "File")
    );

    const unsubscribeFiles = onSnapshot(fileQuery, (fileQuerySnapshot) => {
      setFiles(fileQuerySnapshot.size);
    });

    return () => {
      unsubscribeDocuments();
      unsubscribePhotos();
      unsubscribePlans();
      unsubscribeFiles();
    };
  }, [userId && projectId]);

  return { documents, photos, plans, files };
};

export default useFileCount;
