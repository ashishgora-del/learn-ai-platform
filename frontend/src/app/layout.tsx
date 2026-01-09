import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <div className="flex min-h-screen">
          <aside className="w-64 bg-white border-r p-4">
            <h1 className="text-xl font-bold mb-6">Learn AI & GenAI</h1>
            <nav className="space-y-2">
              <a href="/" className="block px-3 py-2 rounded hover:bg-gray-100">Home</a>
              <a href="/playground" className="block px-3 py-2 rounded hover:bg-gray-100">Playground</a>
            </nav>
          </aside>
          <main className="flex-1 p-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
