import { NextResponse } from 'next/server';
import clientPromise from './mongodb';

export function createApiHandlers(collectionName) {
  return {
    async GET() {
      try {
        const client = await clientPromise;
        const db = client.db('nameQuestionDb');
        const questions = await db
          .collection(collectionName)
          .find({})
          .toArray();
        return NextResponse.json(questions);
      } catch (e) {
        console.error(`Error in GET /api/${collectionName}/questions:`, e);
        return NextResponse.json(
          { error: 'Unable to fetch questions' },
          { status: 500 }
        );
      }
    },

    async POST(request) {
      try {
        const { name, question } = await request.json();
        const client = await clientPromise;
        const db = client.db('nameQuestionDb');
        const result = await db
          .collection(collectionName)
          .insertOne({ name, question, createdAt: new Date() });
        return NextResponse.json(
          { message: 'Question added successfully', id: result.insertedId },
          { status: 201 }
        );
      } catch (e) {
        console.error(`Error in POST /api/${collectionName}/questions:`, e);
        return NextResponse.json(
          { error: 'Unable to add question' },
          { status: 500 }
        );
      }
    },
  };
}
