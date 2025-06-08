import { NextResponse } from 'next/server'
import { categories, items } from '@/data/menu'

export async function GET() {
  return NextResponse.json({ categories, items })
}
