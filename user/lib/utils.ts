import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to conditionally join class names with Tailwind merge support.
 * Example: cn("px-2", condition && "bg-red-500")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Capitalize the first letter of a string
 */
export function capitalize(str: string) {
  if (!str) return ""
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Format date as "DD Mon YYYY"
 * Example: 2026-04-17 → "17 Apr 2026"
 */
export function formatDate(dateString: string) {
  try {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
    return new Date(dateString).toLocaleDateString("en-GB", options)
  } catch {
    return dateString
  }
}
