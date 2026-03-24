'use client'

import { useState } from 'react'

export default function Home() {
  const [counter, setCounter] = useState<number>(0)
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Persistence and Double Agent Test 2
          </h1>
          
          <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-2xl">
            Welcome to your Next.js application with TypeScript and Tailwind CSS.
            Start building by editing{' '}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono text-sm">
              app/page.tsx
            </code>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 w-full max-w-4xl">
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:border-blue-500 hover:bg-gray-100 dark:border-gray-700 dark:hover:border-blue-500 dark:hover:bg-gray-800/30"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Docs{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  →
                </span>
              </h2>
              <p className="m-0 text-sm opacity-70">
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:border-blue-500 hover:bg-gray-100 dark:border-gray-700 dark:hover:border-blue-500 dark:hover:bg-gray-800/30"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Learn{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  →
                </span>
              </h2>
              <p className="m-0 text-sm opacity-70">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://www.typescriptlang.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:border-blue-500 hover:bg-gray-100 dark:border-gray-700 dark:hover:border-blue-500 dark:hover:bg-gray-800/30"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                TypeScript{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  →
                </span>
              </h2>
              <p className="m-0 text-sm opacity-70">
                Explore TypeScript documentation and best practices.
              </p>
            </a>

            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:border-blue-500 hover:bg-gray-100 dark:border-gray-700 dark:hover:border-blue-500 dark:hover:bg-gray-800/30"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Tailwind{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  →
                </span>
              </h2>
              <p className="m-0 text-sm opacity-70">
                Browse Tailwind CSS utilities and customization options.
              </p>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
