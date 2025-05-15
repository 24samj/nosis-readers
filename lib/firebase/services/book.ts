// lib/bookService.ts
import { adminDb } from "../admin";

export async function getAllBooks(): Promise<Book[]> {
  const snapshot = await adminDb.collection("books").get();
  return snapshot.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<Book, "id">),
  }));
}

export async function getBook(id: string): Promise<Book | null> {
  const docSnap = await adminDb.collection("books").doc(id).get();
  return docSnap.exists
    ? { id: docSnap.id, ...(docSnap.data() as Omit<Book, "id">) }
    : null;
}

export async function addBook(book: Omit<Book, "id">): Promise<string> {
  const docRef = await adminDb.collection("books").add(book);
  return docRef.id;
}
