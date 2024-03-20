import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function AdminLayout({ children }: Props) {
  return (
    <div>
      <h1>Painel Admin</h1>
      {children}
    </div>
  )
}
