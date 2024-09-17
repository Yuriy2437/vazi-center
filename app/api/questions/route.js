import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('nameQuestionDb');
    const questions = await db.collection('questions').find({}).toArray();
    return NextResponse.json(questions);
  } catch (e) {
    console.error('Error in GET /api/questions:', e);
    return NextResponse.json(
      { error: 'Unable to fetch questions', details: e.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { name, question } = await request.json();
    const client = await clientPromise;
    const db = client.db('nameQuestionDb');
    const result = await db
      .collection('questions')
      .insertOne({ name, question, createdAt: new Date() });
    return NextResponse.json(
      { message: 'Question added successfully', id: result.insertedId },
      { status: 201 }
    );
  } catch (e) {
    console.error('Error in POST /api/questions:', e);
    return NextResponse.json(
      { error: 'Unable to add question', details: e.message },
      { status: 500 }
    );
  }
}
