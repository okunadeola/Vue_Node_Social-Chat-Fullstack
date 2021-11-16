<template>
  <div
    class="
      topbarContainer
      md:bg-blue-500
      sm:bg-red-500
      bg-yellow-500
      items-center
      flex
      w-full
      sticky
      top-0
    "
  >
    <div class="topbarLeft flex-1">
      <span
        class="
          logo
          md:text-2xl
          md:ml-5
          ml-0
          font-bold
          text-white
          cursor-pointer
          text-center
          sm:text-left
        "
        >RealSocial</span
      >
    </div>
    <div class="topbarCenter flex-1 invisible md:visible">
      <div
        class="searchBar w-full h-7 bg-white rounded-3xl flex items-center pl-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 cursor-pointer text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search fro friend post"
          class="searchInput border-none w-4/5 focus:outline-none"
        />
      </div>
    </div>
    <div class="topbarRight flex-1 flex items-center justify-around text-white">
      <div class="topbarLinks flex">
        <div class="topbarLink mr-2 text-xs cursor-pointer">Hompage</div>
        <div class="topbarLink mr-2 text-xs cursor-pointer">TimeLine</div>
      </div>
      <div class="topbarIcons flex">
        <div class="topbarIconItem mr-4 cursor-pointer relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span
            class="
              topbarBadge
              w-4
              h-4
              bg-gray-900
              rounded-full
              text-white
              absolute
              top
              flex
              justify-center
              items-center
              text-xs
            "
            style="top: -5px; right: -5px"
            >2</span
          >
        </div>
        <div class="topbarIconItem mr-4 cursor-pointer relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span
            class="
              topbarBadge
              w-4
              h-4
              bg-gray-900
              rounded-full
              text-white
              absolute
              top
              flex
              text-xs
              justify-center
              items-center
            "
            style="top: -5px; right: -5px"
            >3</span
          >
        </div>
        <div class="topbarIconItem mr-4 cursor-pointer relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span
            class="
              topbarBadge
              w-4
              h-4
              bg-gray-900
              rounded-full
              text-white
              absolute
              text-xs
              top
              justify-center
              flex
              items-center
            "
            style="top: -5px; right: -5px"
            >4</span
          >
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
