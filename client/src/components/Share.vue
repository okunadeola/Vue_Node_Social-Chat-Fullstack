<template>
  <div class="shareContainer mx-0 w-full h-40 rounded-xl shadow-md">
    <div class="shareWrapper w-full p-1 md:p-3">
      <div class="shareTop flex items-center">
        <img
          class="shareProfileImg w-12 h-12 rounded-full object-cover mr-3"
          src="@/assets/about.jpg"
          alt="img"
        />
        <input
          placeholder="what's on your mind"
          class="shareInput border-none w-4/5 focus:outline-none"
          type="text"
        />
      </div>
      <hr class="m-5" />
      <div class="shareBottom flex items-center justify-between">
        <div class="shareOptions flex mr-1 md:mr-4 ml-1 md:ml-5 cursor-pointer">
          <div class="shareOption flex items-center mx-0 md:mx-2">
            <span class="shareIcon text-lg md:mr-0.5 text-pink-400">
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
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span
              class="shareOptionText text-sm font-medium invisible md:visible"
              >Photo or Video</span
            >
          </div>

          <div class="shareOption flex items-center mx-0 md:mx-2">
            <span class="shareIcon text-lg mr-0.5 text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span
              class="shareOptionText text-sm font-medium invisible md:visible"
              >Tag</span
            >
          </div>

          <div class="shareOption flex items-center mx-0 md:mx-2">
            <span class="shareIcon text-lg mr-0.5 text-green-600">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <span
              class="shareOptionText text-sm font-medium invisible md:visible"
              >Location</span
            >
          </div>

          <div class="shareOption flex items-center mx-0 md:mx-2">
            <span class="shareIcon text-lg mr-0.5 text-yellow-600">
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
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
            </span>
            <span
              class="shareOptionText text-sm font-medium invisible md:visible"
              >Feelings</span
            >
          </div>
        </div>
        <button
          class="
            border-none
            p-1
            rounded-md
            bg-green-500
            font-medium
            text-white
            mr-5
          "
        >
          Share
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>