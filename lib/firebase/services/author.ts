import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../client";

// Fetch all authors
export async function getAllAuthors(): Promise<Author[]> {
  const colRef = collection(db, "authors");
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Author, "id">),
  }));
}

// Fetch one author by ID
export async function getAuthor(id: string): Promise<Author | null> {
  const docRef = doc(db, "authors", id);
  const snap = await getDoc(docRef);
  return snap.exists()
    ? { id: snap.id, ...(snap.data() as Omit<Author, "id">) }
    : null;
}
