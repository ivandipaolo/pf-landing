import { cn } from "@/lib"
import { ReactNode } from "react"

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      className={cn(
        "px-9 lg:px-60 py-7 lg:py-14",
        className
      )}
    >
      {children}
    </div>
  )
}
