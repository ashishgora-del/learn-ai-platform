'use client'
import { useState } from 'react'

export default function Playground() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')

  const handleRun = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/api/chat/multi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ role: 'user', content: prompt }],
        modelIds: ['general-llm-a'],
        temperature: 0.7,
        max_tokens: 512
      })
    })
    const data = await res.json()
    setResult(data.results[0].text)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">AI Playground</h1>
      <textarea 
        className="w-full h-40 p-3 border rounded-lg mb-4"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={handleRun} className="px-6 py-3 bg-blue-600 text-white rounded-lg">
        Run
      </button>
      {result && <div className="mt-6 p-4 bg-white rounded-lg border">{result}</div>}
    </div>
  )
}
