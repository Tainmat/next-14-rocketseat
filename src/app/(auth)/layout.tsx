import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div>
      <h1>Auth</h1>
      <h1 className="text-xl font-bold">Logo do APP</h1>
      {children}
    </div>
  )
}
