<template>
  <footer class="mt-12">
    <v-row>
      <v-col
        cols="12"
        sm="6"
        class="col-item"
      >
        <h4>{{ $t('site.aboutSite.title') }}</h4>
        <p>{{ $t('site.aboutSite.content') }}</p>
      </v-col>
      <v-col
        cols="12"
        sm="3"
        class="col-item"
      >
        <h4>{{ $t('site.aboutMe.title') }}</h4>
        <p>{{ $t('site.aboutMe.content') }}</p>
      </v-col>
      <v-col
        cols="12"
        sm="3"
        class="col-item"
      >
        <h4>{{ $t('site.more.title') }}</h4>
        <p>{{ $t('site.more.content') }}</p>
      </v-col>
    </v-row>
  </footer>
</template>
