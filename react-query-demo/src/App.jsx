import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClient, QueryClientProvider } from "react-query"
import PostsComponent from "./components/PostsComponent"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">React Query Demo</h1>
        <PostsComponent />
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
    
    </>
  )
}

export default App
