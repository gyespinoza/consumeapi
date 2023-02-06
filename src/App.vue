<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Ejemplo VueJs</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>&nbsp;
      </li>
      <li class="nav-item">
        <router-link to="/countries" class="nav-link">Countries</router-link>
      </li>
    </ul>
    </div>
  </nav>
  <router-view />
</template>


