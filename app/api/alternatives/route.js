import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async () => {
  try {
    const data = await prisma.alternative.findMany({});
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: err}, {status: 500 });
  } finally {
    prisma.$disconnect;
    
  }
};

export const POST = async (request) => {
  const { name } = await request.json();
  try {
    const data = await prisma.alternative.create({
      data: {
        name: name,
      }
    })
    return NextResponse.json({ data }, { name: name }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 400 });
  }
};
