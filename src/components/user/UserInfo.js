import {addDoc, collection, query} from "firebase/firestore";
import {firestoreDB} from "../../services/firebase";
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {Card, Col} from "react-bootstrap";
import {useAuth} from "../../contexts/AuthContext";
import {useUserContext} from "../../contexts/userContext";

const personConverter = {
    toFirestore: function (dataInApp) {
        return {
            userName: dataInApp.userName,
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

export function ShowUser(props) {
    const {user} = props
    if (!user) return;
    console.log(user)
    return <Col xs={4} sm={3} md={2} xxl={2}
                className={"text-center"}>
        <Card className="m-2 p-2 shadow-sm">
            <h6>{user.userName}</h6>
            <p>{user.age}</p>
            <p>{user.email}</p>
        </Card>
    </Col>
}

