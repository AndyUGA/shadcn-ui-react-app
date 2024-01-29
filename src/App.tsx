
import './App.css'
import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from "@/components/theme-provider"
import { Skeleton } from './components/ui/skeleton'
import { useEffect, useState } from 'react'


function App() {

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <div>
        Test
      </div>
      {loading && <Skeleton className="w-[400px] h-[20px] rounded-full" />}


    </ThemeProvider>
  )
}

export default App
