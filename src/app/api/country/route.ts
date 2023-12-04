import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const q = req.nextUrl.searchParams.get('q');
    const resp = await axios.get(
      `https://api-dev.talentvibes.io/api/master-data/country?search=${q}&size=50`
    );
    return NextResponse.json(resp.data.data);
  } catch (error) {
    NextResponse.error();
    // console.error(error);
  }
}
