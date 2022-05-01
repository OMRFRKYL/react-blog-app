import firebase from "./firebase"
import { getDatabase,onValue,push,ref,remove,set, update} from "firebase/database";
import { useEffect, useState } from "react";




export const AddUser=(info)=>{
    const db = getDatabase(firebase);
    const userRef = ref(db,"bağlantı");
    const newUserRef=push(userRef)
    set((newUserRef),{
        title:info.title,
        imageUrl:info.imageUrl,
        content:info.content,
        date:info.date,
        user:info.user,
    })
}

export const useFetch=()=>{
    const [info, setİnfo] =  useState();
    
    useEffect(() => {
        const db = getDatabase();
        const userRef = ref(db,"bağlantı");

        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            const bağlantıArray=[];
            for(let id in data){
                bağlantıArray.push({id,...data[id]})
            }
            setİnfo(bağlantıArray)
     });
},[])

return {info}  
}

export const deleteBlog=(id)=>{
    const db = getDatabase();
    const userRef = ref(db,"bağlantı");

    remove(ref(db,"bağlantı/"+ id))
}


export const editBlog=(info)=>{
    const db = getDatabase();


const updates = {};
updates["bağlantı/"+info.id]=info;
return update(ref(db),updates)


};