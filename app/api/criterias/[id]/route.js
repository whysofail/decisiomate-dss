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
  const { name, type, weight } = await request.json();
  try {
    const data = await prisma.criteria.update({
      where: {
        id: Number(params.id),
      },
      data: {
        name: name,
        type: type,
        weight: Number(weight)
      },
    });
    return NextResponse.json({data, msg: 'Updated', status: 200 });
  } catch (err) {
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
