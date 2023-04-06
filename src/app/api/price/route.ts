import { NextResponse, NextRequest } from 'next/server';
import priceData from './priceData.json';
import fs from 'fs';

const formatPriceBRL = (price: number) =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);

export async function GET() {
  try {
    return NextResponse.json({ price: formatPriceBRL(priceData.price) });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(req: Request) {
  try {
    const data = await req.json();

    const price = data.amount * priceData.price;

    fs.writeFileSync(
      './src/app/api/price/priceData.json',
      JSON.stringify({ ...priceData, amount: data.amount + 1 })
    );
    return NextResponse.json({
      price: formatPriceBRL(price),
      amount: data.amount + 1,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}
