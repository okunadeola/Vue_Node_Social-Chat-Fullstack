<template>
  <div class="post w-full rounded-xl shadow-md my-8 mx-0">
    <div class="postWrapper p-3">
      <div class="postTop flex items-center justify-between">
        <div class="postTopLeft flex items-center">
          <img
            class="postProfileImg w-8 h-8 rounded-full object-cover"
            src="@/assets/about.jpg"
            alt="img"
          />
          <span class="postUsername text-sm font-medium my-0 mx-3"
            >Ola Ola</span
          >
          <span class="postDate text-sm">5 mins ago</span>
        </div>
        <div class="postTopRight">
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
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </div>
      </div>

      <div class="postCenter my-5 mx-0">
        <span>Hey its my first post :)</span>
        <img
          class="postImg w-full mt-5 object-contain max-h-96"
          src="@/assets/tab-item-01.png"
          alt="img"
        />
      </div>
      <div class="postBottom flex items-center justify-between">
        <div class="postBottomLeft flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 mr-1 cursor-pointer text-green-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 mr-1 cursor-pointer text-red-200"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="postLikeCounter text-sm">32 Likes</span>
        </div>
        <div class="postBottomCenter">
          <span
            class="
              postCommentText
              cursor-pointer
              border-b-2 border-dashed
              text-sm
            "
            >9 Comments</span
          >
        </div>
        <div class="postBottomRight">
          <span class="postShare">7 Shares</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>