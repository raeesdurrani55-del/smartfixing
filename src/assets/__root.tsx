import { createRootRoute, Outlet, ScrollRestoration } from '@tanstack/react-router'
import { ReactNode } from 'react'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  )
}
