import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

import { firebaseConfig } from "../firbaseconfig";

export const firebaseapp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseapp);