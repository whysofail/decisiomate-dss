import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async (request, {}) => {
  try {
    const data = await prisma.alternativeCriteriaScore.findMany({
      include: {
        alternative: {
          select: {
            name: true,
          },
        },
        criteria: {
          select: {
            name: true,
            weight: true,
            type: true,
          },
        },
      },
      orderBy: [
        {
        criteriaId: 'asc',
      },
      {
        alternativeId: 'asc'
      }
    ]
    });
    prisma.$disconnect;
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: err }, { status: 500 });
  }
};

export const POST = async (request) => {
  const req = await request.json();
  try {
    if (!Array.isArray(req) || req.length === 0) {
      return NextResponse.json({ error: 'Invalid data format.', status: 400 });
    }

    const upsertedData = await Promise.all(
      req.map(async (item) => {
        const { alternativeId, criteriaId, score } = item;

        const data = await prisma.alternativeCriteriaScore.upsert({
          where: {
            alternativeId_criteriaId: {
              alternativeId,
              criteriaId,
            },
          },
          create: {
            alternative: { connect: { id: alternativeId } },
            criteria: { connect: { id: criteriaId } },
            score: parseFloat(score), // Assuming score is provided as a string in the request
          },
          update: {
            score: parseFloat(score), // Assuming score is provided as a string in the request
          },
        });

        return data;
      })
    );
    return NextResponse.json({ data: upsertedData }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: 'Internal server error.', status: 500 });
  }
};

