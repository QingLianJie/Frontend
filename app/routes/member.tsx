import type { ActionFunction } from 'remix'
import { Outlet } from 'remix'

export const action: ActionFunction = async ({ request }) => {
  return null
}

export default function MemberLayout() {
  return <Outlet />
}
