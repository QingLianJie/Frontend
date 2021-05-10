<script lang="ts">
  import 'bootstrap/dist/css/bootstrap.min.css'
  import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
  } from 'sveltestrap'

  let isOpen = false

  function handleUpdate(event: { detail: { isOpen: boolean } }) {
    isOpen = event.detail.isOpen
  }
</script>

<Navbar color="light" light expand="md" class="px-4">
  <NavbarBrand href="/">Qinglianjie</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ml-auto" navbar>
      <NavItem>
        <NavLink href="/">主页</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/scores">成绩</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>

<slot />
