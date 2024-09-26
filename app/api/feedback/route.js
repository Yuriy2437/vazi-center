// app/api/feedback/route.js
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

    let allQuestions = [];

    for (let i = 0; i < collections.length; i++) {
      const questions = await db.collection(collections[i]).find({}).toArray();
      allQuestions = allQuestions.concat(
        questions.map((q) => ({ ...q, base: baseNames[i] }))
      );
    }

    return NextResponse.json(allQuestions);
  } catch (e) {
    console.error('Error in GET /api/feedback:', e);
    return NextResponse.json(
      { error: 'Unable to fetch questions' },
      { status: 500 }
    );
  }
}
