<template>
  <div>
    <form autocomplete="off">
      <input-text
        label-for="firstname"
        label="Ime"
        type="text"
        placeholder="Ime"
      />
      <input-text
        label-for="lastname"
        label="Prezime"
        type="text"
        placeholder="Prezime"
      />
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
      <input-text
        label-for="rePassword"
        label="Ponovite lozinku"
        type="password"
        placeholder="Ponovite lozinku"
      />
      <button type="submit" class="button">
        <span>Registriraj se</span>
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
