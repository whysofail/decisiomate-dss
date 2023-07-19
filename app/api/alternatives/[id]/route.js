import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async ({ params }) => {
  try {
    const data = await prisma.alternative.findMany({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err, status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const { name } = await request.json();
  try {
    const data = await prisma.alternative.update({
      where: {
        id: Number(params.id),
      },
      data: {
        name: name,
      },
    });
    return NextResponse.json({data, msg: 'Updated', status: 200 });
  } catch (err) {
    return NextResponse.json({ err, status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const deleteScore = prisma.alternativeCriteriaScore.deleteMany({
      where: {
        alternativeId: Number(params.id)
      }
    })
    const deleteUser = prisma.alternative.delete({
      where : {
        id: Number(params.id)
      }
    })

    await prisma.$transaction([deleteScore, deleteUser])
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.log(err)
    return NextResponse.json({ err, status: 500 });
  }
};
