import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken"; // You can use a client-side validation library or similar

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  console.log("here");
  // Check if token exists
  if (!token) {
    console.log("No token found, redirecting to sign-in.");
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // Optionally verify the token
  try {
    // If you want to verify the token, add a secret here
    const decoded = jwt.verify(
      token,
      process.env.NEXT_PUBLIC_JWT_SECRET as string,
    );
    console.log("Token is valid:", decoded);
  } catch (err) {
    console.log("Invalid token, redirecting to sign-in:", err);
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin"],
};
