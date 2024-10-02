import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('nameQuestionDb');

    const collections = [
      'questions',
      'englishclub',
      'lectorium',
      'musicclub',
      'psychologyclub',
      'kidsclub',
    ];
    const baseNames = [
      'About us',
      'English Club',
      'Lectorium',
      'Music Club',
      'Psychology Club',
      'Kids Club',
    ];

    const allQuestions = await Promise.all(
      collections.map(async (collection, index) => {
        const questions = await db.collection(collection).find({}).toArray();
        return questions.map((q) => ({ ...q, base: baseNames[index] }));
      })
    );

    return NextResponse.json(allQuestions.flat());
  } catch (e) {
    console.error('Error in GET /api/feedback:', e);
    return NextResponse.json(
      { error: 'Unable to fetch questions' },
      { status: 500 }
    );
  }
}
