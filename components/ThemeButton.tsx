'use client'
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

const ThemeButton = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) {
      return null;
    }
  
  return (
    <div
    onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >ThemeButton</div>
  )
}

export default ThemeButton