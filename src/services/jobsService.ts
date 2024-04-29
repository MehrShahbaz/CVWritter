/* eslint-disable @typescript-eslint/no-explicit-any */
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { firebaseDb } from 'firebaseConfig/firebaseDb';
import { JobType } from 'types/jobTypes';

import { getFriendlyMessageFromFirebaseErrorCode } from 'helpers/firebaseHelper';

export const addJob = async (data: JobType): Promise<void> => {
  try {
    const docRef = await addDoc(collection(firebaseDb, 'jobs'), data);

    console.log(docRef);

    console.log('Document written with ID: ', docRef.id);
  } catch (e: any) {
    console.log(getFriendlyMessageFromFirebaseErrorCode(e));
  }
};

export const getAllJobs = async (): Promise<JobType[]> => {
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
