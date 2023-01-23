import { firestore } from '../utils/firebase';

export default defineEventHandler(async event => {

    const { name } = getQuery(event)

    const ref = firestore.doc(`products/${name}`);
    const snapshot = await ref.get();
    const data = snapshot.data();
    return data;
})