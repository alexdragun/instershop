<template>
  <div>
    <form autocomplete="off">
      <input-text
        label-for="email"
        label="Email"
        type="email"
        placeholder="Email"
      />
      <input-text
        label-for="password"
        label="Lozinka"
        type="password"
        placeholder="Lozinka"
      />
      <button type="submit" class="button">
        <span>Prijavi se</span>
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.button {
  margin-top: 40px;
  width: 100%;
  &:before {
    transform: rotate(30deg) translateX(-800px) translateY(200px);
  }
  &:hover {
    &:before {
      transform: translateX(0);
    }
  }
}
</style>
