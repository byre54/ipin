<template lang="pug">
div
  Disclosure.bg-white(as="nav" v-slot="{ open }")
    div(class='sm:px-6 lg:px-8 max-w-7xl.mx-auto.px-5' )
      .flex.items-center.justify-between.h-19
        .flex.items-center
          .flex-shrink-1#logo
            img(src="/ipinv.png" alt="Workflow")
          div#menunavtengah(class="md:block hidden")
            .ml-10.flex.items-baseline.space-x-4
              template(v-for="(item, itemIdx) in navigation" :key="item")
                template(v-if="(itemIdx === 0)")
                  // Current: "bg-gray text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"
                  router-link(to="/promo")
                    .bg-gray-900.text-white.px-3.py-2.rounded-md.text-lg.font-large {{ item.title }}
                a(v-else="" href="invoice" class="text-gray-300 px-3 py-2 rounded-md text-lg font-large hover:bg-gray-700 hover:text-white") {{ item.title }}
        div#connectright(class="hidden md:block")
          div(class="md:ml-6 ml-4 flex items-center")
            a(href="#" class="text-gray-300 px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white border-2") connect
            // Profile dropdown
            Menu.ml-3.relative.hidden(as="div")
              div
                MenuButton(class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white")
                  span.sr-only Open user menu
                  img.h-8.w-8.rounded-full(
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="")
              transition(
                enter-active-class="transition ease-out duration-100" 
                enter-from-class="transform opacity-0 scale-95" 
                enter-to-class="transform opacity-100 scale-100" 
                leave-active-class="transition ease-in duration-75" 
                leave-from-class="transform opacity-100 scale-100" 
                leave-to-class="transform opacity-0 scale-95"
                )
                MenuItems(class="focus:outline-none origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5")
                  MenuItem(v-for="item in uprofile" :key="item" v-slot="{ active }")
                    a(href="{{item.link}}" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']") {{ item }}
        div(class="-mr-2 flex md:hidden")
          // Mobile menu button
          DisclosureButton(
            class="hover:text-white hover:bg-gray-700 bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            )
            span.sr-only Open main menu
            MenuIcon.block.h-6.w-6(v-if="!open" aria-hidden="true")
            XIcon.block.h-6.w-6(v-else="" aria-hidden="true")
    DisclosurePanel(class="md:hidden")
      div(class="sm:px-3 px-2 pt-2 pb-3 space-y-1")
        template(v-for="(item, itemIdx) in navigation" :key="item")
          template(v-if="(itemIdx === 0)")
            // Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"
            a.bg-gray-900.text-white.block.px-3.py-2.rounded-md.text-base.font-medium(href="{{item.link}}") {{ item.title }}
          a(v-else="" href="{{item.link}}" class="hover:bg-gray-700 hover:text-white text-gray-300 block px-3 py-2 rounded-md text-base font-medium") {{ item.title }}
      .pt-4.pb-3.border-t.border-gray-700
        .flex.items-center.px-5
          .flex-shrink-0
            img.h-10.w-10.rounded-full(src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="")
          .ml-3
            .text-base.font-medium.leading-none.text-white Tom Cook
            .text-sm.font-medium.leading-none.text-gray-400 tom@example.com
          button(class="hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400")
            span.sr-only View notifications
            BellIcon.h-6.w-6(aria-hidden="true")
        .mt-3.px-2.space-y-1
          a(v-for="item in uprofile" :key="item" href="#" class="hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium text-gray-400") {{ item }}
  header.bg-white
    div(class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8")
  main
    div(class="sm:px-6 lg:px-8 max-w-7xl mx-auto py-6")
      // Replace with your content
      div(class="sm:px-0 px-4 py-6")
        .border-0.border-dashed.border-gray-200.rounded-lg.h-96
          router-view
      // /End replace
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
// import ModalAlt from '@/components/ModalAlt.vue' 
const navigation = [{title :'Dashboard', link:'/how'},{title:'Invoices', link:'/mint'}]
const uprofile = ['Mint', 'Settings', 'Sign out']
// import { Core } from '@self.id/core'

// connect to a known URL
// const core = new Core({ ceramic: 'testnet-clay' })
// const profile = await core.get('basicProfile', id)
export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      navigation,
      uprofile,
      // profile,
    }
    
  },
}
</script>