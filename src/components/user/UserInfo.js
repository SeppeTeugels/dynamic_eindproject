import {addDoc, collection} from "firebase/firestore";
import {firestoreDB} from "../../services/firebase";

const personConverter = {
    toFirestore: function (dataInApp) {
        return {
            userName: dataInApp.userName,
            birthday: dataInApp.birthday,
            age: Number(dataInApp.age),
            email: dataInApp.email,
        }

    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id, ref: snapshot.ref}
    }
};

const collectionRef = collection(firestoreDB, 'User').withConverter(personConverter);

export async function addingUser(user) {
    try {
        await addDoc(collectionRef, user);
    } catch {
        console.log("ERROR add user Not done")
    }
}

