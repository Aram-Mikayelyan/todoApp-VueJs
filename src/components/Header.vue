<template>
  <div class="header">
    <nav>
      <ul>
        <router-link
          v-for="item in navigation"
          :to="{path: item.path}"
          :key="item.id"
          tag="li"
          exact
          class="nav-item"
          active-class="active"
        >
          {{ item.title }}
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    setActive(id) {
      this.navigation = this.navigation.map((nav) => {
        if (nav.id === id) return { ...nav, active: true };
        return { ...nav, active: false };
      });
    },
  },
  data() {
    return {
      navigation: [
        { id: 1, title: "Todos", active: true, path: "/", },
        { id: 2, title: "About Us", active: false, path: "/about-us", },
        { id: 3, title: "Info", active: false, path: "/info", },
      ],
    };
  },
};
</script>
  
<style scoped>
.header {
  width: 100%;
  background: #998235;
  color: #2c3e50;
  margin-bottom: 40px;
  padding: 10px 0;
}
ul {
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  justify-content: flex-start;
  list-style: none;
}
.nav-item {
  margin-right: 70px;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  font-size: 20px;
}
.active {
  color: white;
}
.active::before {
  position: absolute;
  content: "";
  bottom: -6px;
  height: 4px;
  width: 50%;
  background: white;
  border-radius: 40px;
}
</style>
