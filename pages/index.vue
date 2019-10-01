<i18n>
{
  "id": {
    "slide1Top": "Tergerakah hati Anda ketika melihat permasalahan di Indonesia?",
    "slide1Bottom": "Ingin berkontribusi, namun bingung dengan cara apa?",
    "slide2Top": "\"Be the change you want to see in the world\" - Mahatma Gandhi",
    "slide2Bottom": "Percayalah bahwa niat tulus pasti akan diberikan jalannya",
    "slide3Top": "Sejarah mengajarkan bahwa anak muda merupakan elemen penting dalam setiap perubahan",
    "slide3Bottom": "Saat ini, Indonesia sedang membutuhkan kita. Sudah saatnya kita satu padu untuk mendedikasikan diri berkontribusi bagi ibu pertiwi",
    "satuPadu": "Satupadu Indonesia merupakan sebuah inisiatif gerakan yang memiliki tujuan untuk dapat mengakselerasi inovasi dan kontribusi nyata dalam menciptakan perubahan dengan semangat gotong-royong bersama.",
    "sinergy": "Sinergi",
    "collaboration": "Kolaborasi",
    "inspirate": "Menginspirasi",
    "programs": "Program Kami",
    "satuLidi": "#SatupaduLiDigital",
    "satuIbu": "#SatuIbuSatuPohon",
    "satuDesa": "#SatuDesaSatuWebsite",
    "weBelieveTop": "Kami percaya, bahwa masih banyak orang yang ingin berkontribusi bagi negeri ini.",
    "weBelieveBottom": "Mari bergabung dengan #GerakanSatuPaduIndonesia dengan cara:",
    "donation": "Donasi",
    "volunteer": "Relawan",
    "collaborationPartner": "Mitra Kolaborasi"
  },
  "en": {
    "slide1Top": "Is your heart moved when you witness Indonesia's problems?",
    "slide1Bottom": "Do you want to be part of the solution, but are confused: in what way?",
    "slide2Top": "\"Be the change you want to see in the world\" - Mahatma Gandhi",
    "slide2Bottom": "Believe that sincere intentions will always find a way",
    "slide3Top": "History teaches us that the youth are always the vanguard of change",
    "slide3Bottom": "Right now, Indonesia needs us. It is time that we dedicate ourselves together to help our homeland",
    "satuPadu": "The Satupadu Indonesia movement is an initative which seeks to accelerate practical innovation and contribution, to create change in the spirit of mutual cooperation.",
    "sinergy": "Synergy",
    "collaboration": "Collaboration",
    "inspirate": "Inspire",
    "programs": "Our Programs",
    "satuLidi": "#SatupaduLiDigital",
    "satuIbu": "#SatuIbuSatuPohon",
    "satuDesa": "#SatuDesaSatuWebsite",
    "weBelieveTop": "We believe that many people want to be part of the solution to our country's.",
    "weBelieveBottom": "Let's contribute to the #GerakanSatuPaduIndonesia by:",
    "donation": "Donate",
    "volunteer": "Volunteer",
    "collaborationPartner": "Collaboration Partners"
  }
}
</i18n>

<template>
  <v-sheet flat="" tile="">
    <!-- Carousel -->
    <v-carousel id="home" cycle="">
      <v-carousel-item src="/img/slides/slide-1.jpg" alt="Satupadu Indonesia">
        <v-row
          class="fill-height white--text"
          align="end"
          justify="center"
          style="background-color: rgba(0, 0, 0, .5)"
        >
          <v-col cols="9">
            <div class="text-center" style="margin-bottom: 72px">
              <h2 class="heading">
                {{ $t('slide1Top') }}
              </h2>
              <h3 class="title">
                {{ $t('slide1Bottom') }}
              </h3>
            </div>
          </v-col>
        </v-row>
      </v-carousel-item>
      <v-carousel-item src="/img/slides/slide-2.jpg" alt="Satupadu Indonesia">
        <v-row
          class="fill-height white--text"
          align="end"
          justify="center"
          style="background-color: rgba(0, 0, 0, .5)"
        >
          <v-col cols="9">
            <div class="text-center" style="margin-bottom: 72px">
              <h2 class="heading">
                {{ $t('slide2Top') }}
              </h2>
              <h2 class="title">
                {{ $t('slide2Bottom') }}
              </h2>
            </div>
          </v-col>
        </v-row>
      </v-carousel-item>
      <v-carousel-item src="/img/slides/slide-3.jpg" alt="Satupadu Indonesia">
        <v-row
          class="fill-height white--text"
          align="end"
          justify="center"
          style="background-color: rgba(0, 0, 0, .5)"
        >
          <v-col cols="9">
            <div class="text-center" style="margin-bottom: 72px">
              <h2 class="heading">
                {{ $t('slide3Top') }}
              </h2>
              <h3 class="title">
                {{ $t('slide3Bottom') }}
              </h3>
            </div>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <!-- About -->
    <v-card id="about" tile="">
      <v-responsive :aspect-ratio="2.5">
        <v-card-text class="fill-height">
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12" md="8">
              <div class="text-center mb-5">
                <h2 class="heading">{{ $t('satuPadu') }}</h2>
              </div>
              <v-row>
                <v-col cols="12" md="4">
                  <v-card dark="" color="secondary" ripple="">
                    <v-responsive :aspect-ratio="16 / 9">
                      <v-card-text class="fill-height">
                        <v-row
                          class="fill-height"
                          align="center"
                          justify="center"
                        >
                          <div class="text-center">
                            <h3 class="headline">{{ $t('sinergy') }}</h3>
                          </div>
                        </v-row>
                      </v-card-text>
                    </v-responsive>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card dark="" color="secondary" ripple="">
                    <v-responsive :aspect-ratio="16 / 9">
                      <v-card-text class="fill-height">
                        <v-row
                          class="fill-height"
                          align="center"
                          justify="center"
                        >
                          <div class="text-center">
                            <h3 class="headline">{{ $t('collaboration') }}</h3>
                          </div>
                        </v-row>
                      </v-card-text>
                    </v-responsive>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card dark="" color="secondary" ripple="">
                    <v-responsive :aspect-ratio="16 / 9">
                      <v-card-text class="fill-height">
                        <v-row
                          class="fill-height"
                          align="center"
                          justify="center"
                        >
                          <div class="text-center">
                            <h3 class="headline">{{ $t('inspirate') }}</h3>
                          </div>
                        </v-row>
                      </v-card-text>
                    </v-responsive>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-responsive>
    </v-card>
    <!-- Our Programs -->
    <v-card id="programs" flat="" tile="" color="secondary" dark="">
      <v-responsive :aspect-ratio="2.5">
        <v-card-text class="fill-height">
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12" xs="8">
              <div class="text-center mb-5">
                <h2 class="heading">{{ $t('programs') }}</h2>
              </div>
              <v-row justify="center">
                <v-col cols="12" md="3">
                  <v-card light="" ripple="">
                    <app-img
                      src="/img/programs/satupadu-li-digital.jpg"
                      :alt="$t('satuLidi')"
                    />
                    <v-card-text>
                      <div class="text-center">
                        <h2
                          :class="
                            $vuetify.breakpoint.mdAndDown
                              ? 'subtitle-1'
                              : 'headline'
                          "
                        >
                          {{ $t('satuLidi') }}
                        </h2>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="3">
                  <v-card light="" ripple="">
                    <app-img
                      src="/img/programs/satu-ibu-satu-pohon.jpg"
                      :alt="$t('satuIbu')"
                    />
                    <v-card-text>
                      <div class="text-center">
                        <h2
                          :class="
                            $vuetify.breakpoint.mdAndDown
                              ? 'subtitle-1'
                              : 'headline'
                          "
                        >
                          {{ $t('satuIbu') }}
                        </h2>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="3">
                  <v-card light="" ripple="">
                    <app-img
                      src="/img/programs/satu-desa-satu-website.jpg"
                      :alt="$t('satuDesa')"
                    />
                    <v-card-text>
                      <div class="text-center">
                        <h2
                          :class="
                            $vuetify.breakpoint.mdAndDown
                              ? 'subtitle-1'
                              : 'headline'
                          "
                        >
                          {{ $t('satuDesa') }}
                        </h2>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-responsive>
    </v-card>
    <!-- Take Action -->
    <app-img
      :aspect-ratio="2.5"
      :contain="false"
      src="/img/bg/childs.jpg"
      alt="Anak anak"
    >
      <v-row class="fill-height" style="background-color: rgba(0, 0, 0, .5)">
        <v-col cols="12">
          <v-card id="action" flat="" tile="" color="transparent" dark="">
            <v-responsive :aspect-ratio="2.5">
              <v-card-text class="fill-height">
                <v-row class="fill-height" align="center" justify="center">
                  <v-col cols="12" md="8">
                    <div class="text-center mb-5">
                      <h2 class="heading">{{ $t('weBelieveTop') }}</h2>
                      <h2 class="heading">{{ $t('weBelieveBottom') }}</h2>
                    </div>
                    <div class="text-center">
                      <v-btn class="mx-3" large="" color="primary">
                        {{ $t('donation') }}
                      </v-btn>
                      <v-btn class="mx-3" large="" color="primary">
                        {{ $t('volunteer') }}
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-responsive>
          </v-card>
        </v-col>
      </v-row>
    </app-img>
    <!-- Collaboration Partner -->
    <v-card id="partner" flat="" tile="">
      <v-responsive :aspect-ratio="4">
        <v-card-text class="fill-height">
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12">
              <div class="text-center mb-5">
                <h2 class="heading">{{ $t('collaborationPartner') }}</h2>
              </div>
              <v-row justify="center">
                <v-col cols="12" md="2">
                  <v-tooltip bottom="">
                    <template #activator="{ on }">
                      <v-card ripple="" flat="" tile="" light="" v-on="on">
                        <app-img
                          :height="150"
                          src="/img/partners/kantor-staf-presiden.png"
                          alt="Kantor Staf Presiden"
                        />
                      </v-card>
                    </template>
                    <span>Kantor Staf Presiden</span>
                  </v-tooltip>
                </v-col>
                <v-col cols="12" md="2">
                  <v-tooltip bottom="">
                    <template #activator="{ on }">
                      <v-card ripple="" flat="" tile="" light="" v-on="on">
                        <app-img
                          :height="150"
                          src="/img/partners/google.png"
                          alt="Google"
                        />
                      </v-card>
                    </template>
                    <span>Google</span>
                  </v-tooltip>
                </v-col>
                <v-col cols="12" md="2">
                  <v-tooltip bottom="">
                    <template #activator="{ on }">
                      <v-card ripple="" flat="" tile="" light="" v-on="on">
                        <app-img
                          :height="150"
                          src="/img/partners/kitabisa.png"
                          alt="Kitabisa"
                        />
                      </v-card>
                    </template>
                    <span>Kitabisa</span>
                  </v-tooltip>
                </v-col>
                <v-col cols="12" md="2">
                  <v-tooltip bottom="">
                    <template #activator="{ on }">
                      <v-card ripple="" flat="" tile="" light="" v-on="on">
                        <app-img
                          :height="150"
                          src="/img/partners/diaspora-connect.png"
                          alt="Diaspora Connect"
                        />
                      </v-card>
                    </template>
                    <span>Diaspora Connect</span>
                  </v-tooltip>
                </v-col>
                <v-col cols="12" md="2">
                  <v-tooltip bottom="">
                    <template #activator="{ on }">
                      <v-card ripple="" flat="" tile="" light="" v-on="on">
                        <app-img
                          :height="150"
                          src="/img/partners/undp.png"
                          alt="UNDP"
                        />
                      </v-card>
                    </template>
                    <span>UNDP</span>
                  </v-tooltip>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-responsive>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
