<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader /> can be used as well -->
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <!-- <course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherProp }}</p>
      </template>
    </course-goals> 
    Thia is first way to do it. next version requires all tags within template apply to named slot -->

    <course-goals #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherProp }}</p>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

// can use TheHeader as well alone it will be expanded to TheHeader: TheHeader
export default {
  components: {
    'the-header': TheHeader,
    'badge-list': BadgeList,
    'user-info': UserInfo,
    'course-goals': CourseGoals
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style scoped>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>