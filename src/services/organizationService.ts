/* eslint-disable @typescript-eslint/no-explicit-any */
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { firebaseDb } from 'firebaseConfig/firebaseDb';
import { OrganizationType } from 'types/organizationTypes';

import { getFriendlyMessageFromFirebaseErrorCode } from 'helpers/firebaseHelper';

export const temp = {};

export const addOrganization = async (args: OrganizationType): Promise<void> => {
  try {
    console.log(args);
    const docRef = await addDoc(collection(firebaseDb, 'users'), {
      first: 'Ada',
      last: 'Lovelace',
      born: 1815,
    });

    console.log('Document written with ID: ', docRef.id);
  } catch (e: any) {
    console.log(getFriendlyMessageFromFirebaseErrorCode(e));
  }
};

export const getAllOrganizations = async (): Promise<void> => {
  try {
    const querySnapshot = await getDocs(collection(firebaseDb, 'organizations'));
    const data: any = [];

    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    console.log(data);
  } catch (e: any) {
    console.log(getFriendlyMessageFromFirebaseErrorCode(e));
  }
};
