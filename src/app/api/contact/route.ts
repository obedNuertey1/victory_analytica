import {NextResponse, NextRequest} from "next/server";

export function GET(){
    return NextResponse.json({message: 'Hello from App Router!'});
}

export async function POST(request:NextRequest){
    const data = await request.json();
    console.log({data});
    return NextResponse.json({received: data})
}