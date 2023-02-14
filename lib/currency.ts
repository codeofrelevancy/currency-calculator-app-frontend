import { doc, getDoc } from 'firebase/firestore';

import { db } from '@/firebase';

export const getConversionRates = async () => {
  try {
    console.log('DB:', db);
    
    const docRef = doc(db, 'currency', 'conversion_rates');
    console.log('docRef:', docRef);
    const docSnap = await getDoc(docRef);
    console.log('docSnap:', docSnap);
    
    return docSnap.data();
  } catch (error) {
    console.log(error);
    return null;
  }
};
