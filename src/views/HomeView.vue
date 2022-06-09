<script>
</script>

<template>
  <main>
    <router-link to="/me">
      <div class="icon-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </div>

      <h1>
        Tables
      </h1>
    </router-link>
  </main>
</template>

<style>
body {
  background-color: rgb(245, 245, 245);
  /* background-color: blue; */
}
</style>

<style scoped>
main {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;

  height: 100%;
}

main>a {
  width: 200px;
  height: 200px;

  margin: 1em;
  padding: 1em;
  box-sizing: border-box;

  background-color: white;
  color: rgb(80, 80, 80);
  
  display: grid;
  grid-template-rows: auto 30%;
  justify-items: center;
  align-items: center;

  cursor: pointer;
  text-decoration: none;
  border-radius: 1em;
  box-shadow: 0 .3em .8em rgba(100, 100, 100, .1);

  transition: .1s;
}

main>a:hover {
  background-color: rgb(252, 252, 252);
  /* transform: scale(1.05); */
}

.icon-wrapper {
  width: 64px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>