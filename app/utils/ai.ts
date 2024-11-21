export async function chatWithAI(messages: Array<{role: 'user' | 'assistant' | 'system', content: string}>) {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    })

    if (!response.ok) {
      throw new Error('API request failed')
    }

    const data = await response.json()
    return data.content
  } catch (error) {
    console.error('Error calling AI API:', error)
    throw error
  }
} 