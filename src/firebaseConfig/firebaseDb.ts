import { getFirestore } from 'firebase/firestore';

import { firebaseApp } from './firebase';

export const firebaseDb = getFirestore(firebaseApp);
