import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, query, collection, doc, getDoc } from "firebase/firestore";

const useComments = (userId, projectId) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments([]);
    const commentsQuery = query(
      collection(
        db,
        `${`user_profile`}/${userId}/Projects/${projectId}/Comments`
      )
    );
    const unsubscribe = onSnapshot(commentsQuery, (commentsQuerySnapshot) => {
      commentsQuerySnapshot.forEach((projectVal) => {
        setComments((prev) => [...prev, projectVal.data()]);
      });
    });

    return () => unsubscribe();
  }, [userId && projectId]);

  return { comments };
};

export default useComments;
