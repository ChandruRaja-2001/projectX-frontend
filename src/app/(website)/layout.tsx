"use client";

import React, { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">{children}</div>
      </body>
    </html>
  );
}
