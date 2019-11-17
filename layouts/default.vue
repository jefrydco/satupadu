<i18n>
{
  "id": {
    "home": "Beranda",
    "about": "Tentang",
    "programs": "Program Kami",
    "contact": "Hubungi",
    "news": "Berita",
    "language": "Bahasa",
    "indonesian": "Bahasa Indonesia",
    "english": "Bahasa Inggris",
    "copyright": "Hak Cipta"
  },
  "en": {
    "home": "Home",
    "about": "About",
    "programs": "Our Programs",
    "contact": "Contact",
    "news": "News",
    "language": "Language",
    "indonesian": "Indonesian",
    "english": "English",
    "copyright": "Copyright"
  }
}
</i18n>

<template>
  <v-app>
    <v-app-bar
      :height="88"
      dense=""
      app=""
      elevate-on-scroll=""
      hide-on-scroll=""
    >
      <v-toolbar-title>
        <h1>
          <v-card
            color="transparent"
            flat=""
            nuxt=""
            exact=""
            to="/"
            aria-label="Satu Padu Indonesia"
          >
            <app-img
              src="/img/logo/satupadu-logo-only.png"
              alt="Satu Padu Indonesia"
              max-width="40"
              contain=""
            >
              <template #placeholder="">
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate="" color="grey" />
                </v-row>
              </template>
            </app-img>
          </v-card>
        </h1>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="py-5 hidden-sm-and-down">
        <v-btn
          v-for="menu in menus"
          :key="`toolbar_${menu}`"
          text=""
          @click="$vuetify.goTo(`#${menu}`)"
        >
          {{ $t(menu) }}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-menu bottom="" offset-y="">
          <template #activator="{ on: menu }">
            <v-tooltip bottom="">
              <template #activator="{ on: tooltip }">
                <v-btn text="" v-on="{ ...menu, ...tooltip }">
                  <v-icon>mdi-translate</v-icon>
                  <v-icon right="">mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <span>{{ $t('language') }}</span>
            </v-tooltip>
          </template>
          <v-list>
            <v-list-item
              v-for="locale in locales"
              :key="locale.text"
              :to="switchLocalePath(locale.value)"
              nuxt=""
              exact=""
            >
              <v-list-item-content>
                <v-list-item-title>{{ $t(locale.text) }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-app-bar-nav-icon
        class="hidden-md-and-up mr-3"
        @click="isSidebar = !isSidebar"
      />
    </v-app-bar>
    <v-navigation-drawer v-model="isSidebar" app="" right="">
      <v-card
        color="transparent"
        flat=""
        nuxt=""
        exact=""
        to="/"
        aria-label="Satu Padu Indonesia"
      >
        <v-card-text>
          <app-img
            src="/img/logo/satupadu.png"
            alt="Satu Padu Indonesia"
            max-width="85"
            max-height="50"
          />
        </v-card-text>
      </v-card>
      <v-list-item
        v-for="menu in menus"
        :key="`sidebar_${menu}`"
        ripple=""
        @click="$vuetify.goTo(`#${menu}`)"
      >
        <v-list-item-content>
          <v-list-item-title>{{ $t(menu) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer id="contact" padless="">
      <v-row>
        <v-col cols="12" class="pa-0">
          <v-card dark="" flat="" tile="" color="secondary">
            <v-card-text>
              <v-row justify="center">
                <div class="text-center">
                  <app-img
                    src="/img/logo/satupadu-white.png"
                    alt="Satu Padu Indonesia"
                    :width="300"
                  />
                </div>
              </v-row>
            </v-card-text>
            <v-card-text>
              <div class="text-center">
                <v-btn
                  v-for="menu in menus"
                  :key="`footer_${menu}`"
                  text=""
                  rounded=""
                  class="mx-4"
                  @click="$vuetify.goTo(`#${menu}`)"
                >
                  {{ $t(menu) }}
                </v-btn>
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <div class="text-center mb-3">
                <v-tooltip bottom="">
                  <template #activator="{ on }">
                    <v-btn class="mx-4" icon="" v-on="on">
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                  </template>
                  <span>Facebook</span>
                </v-tooltip>
                <v-tooltip bottom="">
                  <template #activator="{ on }">
                    <v-btn class="mx-4" icon="" v-on="on">
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                  </template>
                  <span>Twitter</span>
                </v-tooltip>
                <v-tooltip bottom="">
                  <template #activator="{ on }">
                    <v-btn class="mx-4" icon="" v-on="on">
                      <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                  </template>
                  <span>Instagram</span>
                </v-tooltip>
              </div>
              <div class="text-center">
                {{ $t('copyright') }} &copy; {{ new Date().getFullYear() }} —
                Satu Padu Indonesia
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isSidebar: false,
      colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
      slides: [{ text: '' }],
      locales: [
        { text: 'indonesian', value: 'id' },
        { text: 'english', value: 'en' }
      ],
      menus: ['home', 'about', 'programs', 'news', 'contact']
    }
  }
}
</script>
