import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async () => {
  try {
    const data = await prisma.criteria.findMany({
      orderBy: {id:"asc"}
    });
    prisma.$disconnect;
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err, status: 500 });
  }
};

export const POST = async (request) => {
  const { name, type, weight } = await request.json();
  try {
    const data = await prisma.criteria.create({
      data: {
        name: name,
        type: type,
        weight: Number(weight),
      },
    });
    return NextResponse.json({ data }, { name: name }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err, status: 500 });
  }
};
