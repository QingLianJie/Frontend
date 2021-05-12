<script lang="ts">
  import {
    Collapse,
    Icon,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
  } from 'sveltestrap'

  let isOpen = false

  const handleUpdate = (event: { detail: { isOpen: boolean } }) => {
    isOpen = event.detail.isOpen
  }

  export let nav: boolean
  export let title: string

</script>

<Navbar color="transparent" light expand="md" class="p-3">
  <NavbarBrand href="/" class="px-3">{title || '清廉街'}</NavbarBrand>
  {#if nav}
    <NavbarToggler on:click={() => (isOpen = !isOpen)} class="btn-light" />
    <Collapse
      {isOpen}
      navbar
      expand="md"
      on:update={handleUpdate}
      class="my-2 my-md-0"
    >
      <Nav class="ms-auto px-3" navbar>
        <NavItem class="my-1 mx-md-1 my-md-0">
          <NavLink href="/">
            <Icon name="house-door" class="me-2" />
            主页
          </NavLink>
        </NavItem>
        <NavItem class="my-1 mx-md-1 my-md-0">
          <NavLink href="/scores">
            <Icon name="clipboard-data" class="me-2" />
            成绩
          </NavLink>
        </NavItem>
        <NavItem class="my-1 mx-md-1 my-md-0">
          <NavLink href="/timetable">
            <Icon name="columns" class="me-2" />
            课表
          </NavLink>
        </NavItem>
        <NavItem class="my-1 mx-md-1 my-md-0">
          <NavLink href="/courses">
            <Icon name="collection" class="me-2" />
            课程
          </NavLink>
        </NavItem>
        <NavItem class="my-1 mx-md-1 my-md-0">
          <NavLink href="/report">
            <Icon name="calendar2-check" class="me-2" />
            自动报备
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  {/if}
</Navbar>
