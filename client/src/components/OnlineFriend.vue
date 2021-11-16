<template>
  <div>
    <ul class="rightbarfriendList p-0 m-0 list-none">
      <li class="rightBarfriend flex items-center mb-4">
        <div class="rightbarProfileImgContainer mr-2.5 relative">
          <img
            class="w-10 h-10 rounded-full object-cover"
            src="@/assets/logo.png"
            alt="img"
          />
          <span
            class="
              rightbarOnline
              w-3
              h-3
              rounded-full
              bg-green-400
              absolute
              -top-0.5
              right-0
              border-solid border-2 border-indigo-200
            "
          ></span>
        </div>
        <span class="rightbarUsername font-medium">john Doe</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>