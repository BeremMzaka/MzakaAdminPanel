import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, query, collection, where } from "firebase/firestore";

const useFiles = (userId, projectId, fileType) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    setFiles([]);
    let filesQuery;
    if (fileType === "Image/Video") {
      filesQuery = query(
        collection(
          db,
          `${`user_profile`}/${userId}/Projects/${projectId}/Comments`
        ),
        where("fileType", "in", ["Image", "Video"])
      );
    } else {
      filesQuery = query(
        collection(
          db,
          `${`user_profile`}/${userId}/Projects/${projectId}/Comments`
        ),
        where("fileType", "==", fileType)
      );
    }

    const unsubscribe = onSnapshot(filesQuery, (filesQuerySnapshot) => {
      filesQuerySnapshot.forEach((fileVal) => {
        setFiles((prev) => [...prev, fileVal.data()]);
      });
    });

    return () => unsubscribe();
  }, [userId && projectId && fileType]);

  return { files };
};

export default useFiles;
