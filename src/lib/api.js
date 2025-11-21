const guessBackend = () => {
  const env = import.meta?.env?.VITE_BACKEND_URL
  if (env) return env
  try {
    const url = new URL(window.location.href)
    // replace frontend port 3000 with backend 8000 if present
    if (url.port === '3000') {
      url.port = '8000'
      return url.origin
    }
    // fallback to same origin (proxy) if any
    return `${url.protocol}//${url.hostname}:8000`
  } catch {
    return ''
  }
}

export const API_BASE = guessBackend()

export const apiGet = async (path) => {
  const r = await fetch(`${API_BASE}${path}`)
  return r.json()
}

export const apiPost = async (path, body) => {
  const r = await fetch(`${API_BASE}${path}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
  return r.json()
}
