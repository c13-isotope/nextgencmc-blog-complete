import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const limit = url.searchParams.get('limit') || '10'
    
    // Use 127.0.0.1 instead of localhost to fix connection refused
    const response = await fetch(`http://127.0.0.1:3000/api/posts?depth=1&draft=false&limit=${limit}`)
    
    const data = await response.json()
    
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}
