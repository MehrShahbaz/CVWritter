/* eslint-disable @typescript-eslint/no-explicit-any */
import { JobCreateType } from 'context/jobContext';
import { collection, getDocs } from 'firebase/firestore';
import { firebaseDb } from 'firebaseConfig/firebaseDb';

import { getFriendlyMessageFromFirebaseErrorCode } from 'helpers/firebaseHelper';

export const temp = {};

// export const addJob = async (args: OrganizationType): Promise<void> => {
//   try {
//     console.log(args);
//     const docRef = await addDoc(collection(firebaseDb, 'users'), {
//       first: 'Ada',
//       last: 'Lovelace',
//       born: 1815,
//     });

//     console.log('Document written with ID: ', docRef.id);
//   } catch (e: any) {
//     console.log(getFriendlyMessageFromFirebaseErrorCode(e));
//   }
// };

export const getAllJobs = async (): Promise<JobCreateType[]> => {
  try {
    const querySnapshot = await getDocs(collection(firebaseDb, 'jobs'));
    const data: any = [];

    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    return data;
  } catch (e: any) {
    console.log(getFriendlyMessageFromFirebaseErrorCode(e));
    throw e;
  }
};
