import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async (request, {}) => {
  try {
    const data = await prisma.alternativeCriteriaScore.findMany();
    prisma.$disconnect;
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: err }, { status: 500 });
  }
};

export const POST = async (request) => {
  const { name, type, weight } = await request.json();
  try {
    const data = await prisma.alternativeCriteriaScore.create({
      data: {
        name: name,
        type: type,
        weight: Number(weight),
      },
    });
    return NextResponse.json({ data }, { name: name }, { status: 200 });
  } catch (err) {
    return NextResponse.status(404).json({ err, status: 500 });
  }
};
