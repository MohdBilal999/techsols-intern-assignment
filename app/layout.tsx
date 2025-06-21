import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Package, Plus, Eye } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Inventory Management System",
  description: "Manage your clothing inventory with ease",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background">
            {/* Navigation */}
            <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                  <Link href="/" className="flex items-center space-x-2">
                    <Package className="h-6 w-6" />
                    <span className="font-bold text-xl">Inventory</span>
                  </Link>

                  <div className="flex items-center space-x-4">
  <Link
    href="/add-items"
    className="flex items-center space-x-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
  >
    <Plus className="h-4 w-4" />
    <span className="hidden sm:inline">Add Items</span>
  </Link>

  <Link
    href="/view-items"
    className="flex items-center space-x-2 px-4 py-2 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
  >
    <Eye className="h-4 w-4" />
    <span className="hidden sm:inline">View Items</span>
  </Link>
</div>

                </div>
              </div>
            </nav>

            {/* Main Content */}
            <main>{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
