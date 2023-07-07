import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async (request, {}) => {
  try {
    const data = await prisma.alternativeCriteriaScore.findMany({
      include: {
        alternative : {
          select : {
            name: true
          }
        },
        criteria : {
          select : {
            name: true,
            weight: true,
            type: true
          }
        }
      }
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
    const data = await prisma.alternativeCriteriaScore.createMany({
      data: req
    })
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    console.log(err)
    return NextResponse.status(404).json({ err, status: 500 });
  }
};
