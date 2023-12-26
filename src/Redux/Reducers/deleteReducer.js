
import { db } from "../../firebase";
import { onSnapshot, query, collection, doc, getDoc,addDoc,setDoc,deleteDoc,updateDoc } from "firebase/firestore";


const initialState = {
    user: {},

  };

  export const deleteReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'delete':
          {
              const id=action.payload;
            const recyclebinDelete = async (id) => {
                if( window.confirm("Es-tu sûr d'effacer")){

                   let ref=collection(db,"recycle_bin");
                   let userDoc=doc(db, "user_profile", id);
                  const snap = await getDoc(doc(db, "user_profile", id));

                  if (snap.exists()) {
                    console.log(snap.data());
                    state.user=snap.data();
                    await updateDoc(userDoc,{last_name:"killer"}).then(

                      console.log("update ho gyaa"),
                      console.log(snap.data())
                    )

                    // await addDoc(ref,snap.data()).then(
                    //   async()=>{
                    //     await deleteDoc(doc(db, "user_profile", id));
                    //     console.log("data add ho gya");
                    //   }
                    // )
                  } else {
                    console.log("No such document");
                  }
                }


              };
              recyclebinDelete(id)
          }
        return {
            ...state
        };

      default:
        return state;
    }
  };
