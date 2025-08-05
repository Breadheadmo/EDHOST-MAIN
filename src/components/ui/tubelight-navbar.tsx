"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: React.ElementType
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  onItemClick?: (item: NavItem) => void
  currentPath?: string
}

export function NavBar({ items, className, onItemClick, currentPath = '/' }: NavBarProps) {
  const [activeTab, setActiveTab] = useState('')
  const [, setIsMobile] = useState(false)

  useEffect(() => {
    const activeItem = items.find(item => item.url === currentPath)
    if (activeItem) {
      setActiveTab(activeItem.name)
    }
  }, [currentPath, items])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleItemClick = (item: NavItem) => {
    setActiveTab(item.name)
    if (onItemClick) {
      onItemClick(item)
    }
  }

  return (
    <div
      className={cn(
        "relative", // Changed from fixed to relative
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-transparent py-1 px-1 rounded-full">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => handleItemClick(item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300 group",
                "text-gray-600 hover:text-gray-900 hover:scale-105",
                isActive && "bg-gray-100 text-gray-900 shadow-sm",
              )}
            >
              <span className="hidden md:inline relative z-10">{item.name}</span>
              <span className="md:hidden relative z-10">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 transform -skew-x-12 rounded-full"></div>
              
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-gray-900/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-700 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-gray-700/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-gray-700/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-gray-700/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}