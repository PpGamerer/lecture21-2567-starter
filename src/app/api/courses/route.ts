//  Get data from "Database file"
// import { DB, readDB } from "@lib/DB";
//  import { Database } from "@lib/types";
// import { NextResponse } from "next/server";
// import sleep from "sleep-promise";

// export const GET = async () => {
//   await sleep(1000);
//   readDB();
//   return NextResponse.json({
//     ok: true,
//     // Type casting to "Database"
//     courses: (<Database>DB).courses,
//   });
// };

// Get data from "Real database"
import { NextResponse } from "next/server";
import { getPrisma } from "@lib/getPrisma";

export const GET = async () => {
  const prisma = getPrisma();

  const courses = await prisma.course.findMany();
  
  return NextResponse.json({ 
    ok: true, 
    courses: courses 
  });
};
