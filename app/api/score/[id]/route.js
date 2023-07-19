import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async (request, { params }) => {
  try {
    const data = await prisma.criteria.findMany({
      where: {
        id: Number(params.id),
      },
    });
    if(!params) return NextResponse.json({msg: 'ID should not be empty', status: 400}) 
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err, status: 500 });
  }
};

export const PUT = async (request, { params }) => {
    const updatedScores = await request.json();
  
    try {
      const updateQueries = Object.entries(updatedScores).map(async ([id, { score }]) => {
        const alternativeId = parseInt(params.id);
        const criteriaId = parseInt(id);
  
        const updatedRecord = await prisma.alternativeCriteriaScore.updateMany({
          where: {
            AND: [
              { alternativeId: alternativeId },
              { criteriaId: criteriaId }
            ],
          },
          data: {
            score: parseFloat(score),
          },
        });
  
        return updatedRecord;
      });
  
      const data = await Promise.all(updateQueries);
  
      return NextResponse.json({ data, msg: 'Updated', status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ err, status: 500 });
    }
  };
  
  
  

export const DELETE = async (request, { params }) => {
  try {
    const data = await prisma.criteria.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err, status: 500 });
  }
};
