import { doc, getDoc } from 'firebase/firestore';

import { db } from '@/firebase';

export const getConversionRates = async () => {
  try {
    const docRef = doc(db, 'currency', 'conversion_rates');
    const docSnap = await getDoc(docRef);
    
    return docSnap.data();
  } catch (error) {
    console.log(error);
    return null;
  }
};
