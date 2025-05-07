import {NextResponse} from "next/server";

export function GET(){
    return NextResponse.json({message: 'Hello from App Router!'});
}

export async function POST(request:any){
    const data = await request.json();
    console.log({data});
    return NextResponse.json({received: data})
}