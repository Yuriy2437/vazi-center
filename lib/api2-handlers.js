import { NextResponse } from 'next/server';
import clientPromise from './mongodb';
import { ObjectId } from 'mongodb';

export function createDeleteHandler(collectionName, apiPath) {
  return async function DELETE(request, { params }) {
    try {
      const client = await clientPromise;
      const db = client.db('nameQuestionDb');
      const { id } = params;

      const result = await db
        .collection(collectionName)
        .deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount === 1) {
        return NextResponse.json({ message: 'Question deleted successfully' });
      } else {
        return NextResponse.json(
          { error: 'Question not found' },
          { status: 404 }
        );
      }
    } catch (e) {
      console.error(`Error in DELETE ${apiPath}:`, e);
      return NextResponse.json(
        { error: 'Unable to delete question' },
        { status: 500 }
      );
    }
  };
}
