<i18n>
{
  "id": {
    "slide1Top": "Tergerakah hati Anda ketika melihat permasalahan di Indonesia?",
    "slide1Bottom": "Ingin berkontribusi, namun bingung dengan cara apa?",
    "slide2Top": "Sejarah mengajarkan bahwa anak muda merupakan elemen penting dalam setiap perubahan.",
    "slide2Bottom": "Saat ini Indonesia sedang membutuhkan kita. Percayalah, bahwa niat tulus pasti akan diberikan jalannya.",
    "slide3Top": "Selamat datang di Satupadu Indonesia",
    "slide3Middle": "Sebuah gerakan yang diinisiasi melalui semangat dan dedikasi tulus pada ibu pertiwi.",
    "slide3Bottom": "Kami memanggil orang-orang yang percaya terhadap kekuatan kolaborasi, untuk bersama melakukan aksi nyata berkontribusi bagi negeri.",
    "satuPadu": "Satupadu Indonesia merupakan sebuah inisiatif gerakan yang memiliki tujuan untuk dapat mengakselerasi inovasi dan kontribusi nyata dalam menciptakan perubahan dengan semangat gotong-royong bersama.",
    "satuPaduImplementation": "Dalam implementasinya, Satupadu akan mengedepankan pada misi:",
    "implementation1": "Menghadirkan solusi sekaligus mengeksekusi permasalahan yang berkembang di masyarakat.",
    "implementation2": "Berkontribusi dalam merealisasikan program-program prioritas pada pemberdayaan dan pembangunan berkelanjutan di Indonesia",
    "implementation3": "Meningkatkan partisipasi dan kesadaran masyarakat khususnya generasi muda untuk bergotong-royong melakukan perubahan bersama.",
    "satuPaduPunchline": "Melalui nilai-nilai yang terkandung dalam Satupadu, diharapkan <strong>Sinergi</strong> dan <strong>Kolaborasi</strong> yang kita kerjakan dapat <strong>Menginspirasi</strong> lebih banyak orang lagi untuk berbuat baik dan berkontribusi bagi negeri ini.",
    "sinergy": "Sinergi",
    "collaboration": "Kolaborasi",
    "inspirate": "Menginspirasi",
    "programs": "Program Kami",
    "satuLidi": "#SatupaduLiDigital",
    "satuWarnaSekolah": "#SatupaduWarnaiSekolah",
    "satuDesa": "#SatupaduTerangiDesa",
    "weBelieveTop": "Kami percaya, bahwa masih banyak orang yang ingin berkontribusi bagi negeri ini.",
    "weBelieveBottom": "Mari ikut serta berkontribusi bersama Satupadu dengan cara:",
    "donation": "Berdonasi",
    "volunteer": "Menjadi Relawan",
    "mitra": "Mitra CSR",
    "collaborationPartner": "Mitra Kolaborasi"
  },
  "en": {
    "slide1Top": "Is your heart moved when you witness Indonesia's problems?",
    "slide1Bottom": "Do you want to be part of the solution, but are confused: in what way?",
    "slide2Top": "Sejarah mengajarkan bahwa anak muda merupakan elemen penting dalam setiap perubahan.",
    "slide2Bottom": "Saat ini Indonesia sedang membutuhkan kita. Percayalah, bahwa niat tulus pasti akan diberikan jalannya.",
    "slide3Top": "Selamat datang di Satupadu Indonesia",
    "slide3Middle": "Sebuah gerakan yang diinisiasi melalui semangat dan dedikasi tulus pada ibu pertiwi.",
    "slide3Bottom": "Kami memanggil orang-orang yang percaya terhadap kekuatan kolaborasi, untuk bersama melakukan aksi nyata berkontribusi bagi negeri.",
    "satuPadu": "The Satupadu Indonesia movement is an initative which seeks to accelerate practical innovation and contribution, to create change in the spirit of mutual cooperation.",
    "satuPaduImplementation": "Dalam implementasinya, Satupadu akan mengedepankan pada misi:",
    "implementation1": "Menghadirkan solusi sekaligus mengeksekusi permasalahan yang berkembang di masyarakat.",
    "implementation2": "Berkontribusi dalam merealisasikan program-program prioritas pada pemberdayaan dan pembangunan berkelanjutan di Indonesia",
    "implementation3": "Meningkatkan partisipasi dan kesadaran masyarakat khususnya generasi muda untuk bergotong-royong melakukan perubahan bersama.",
    "satuPaduPunchline": "Melalui nilai-nilai yang terkandung dalam Satupadu, diharapkan <strong>Sinergi</strong> dan <strong>Kolaborasi</strong> yang kita kerjakan dapat <strong>Menginspirasi</strong> lebih banyak orang lagi untuk berbuat baik dan berkontribusi bagi negeri.",
    "sinergy": "Synergy",
    "collaboration": "Collaboration",
    "inspirate": "Inspire",
    "programs": "Our Programs",
    "satuLidi": "#SatupaduLiDigital",
    "satuWarnaSekolah": "#SatupaduWarnaiSekolah",
    "satuDesa": "#SatupaduTerangiDesa",
    "weBelieveTop": "We believe that many people want to be part of the solution to our country's.",
    "weBelieveBottom": "Let's contribute with Satupadu by:",
    "donation": "Donate",
    "volunteer": "Become a Volunteer",
    "mitra": "CSR Mitra",
    "collaborationPartner": "Collaboration Partners"
  }
}
</i18n>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <v-sheet flat="" tile="">
    <!-- Carousel -->
    <v-carousel id="home" cycle="" :interval="12000" progress="">
      <v-carousel-item src="/img/slides/slide-1.jpg" alt="Satupadu Indonesia">
        <v-row
          class="fill-height white--text"
          align="end"
          justify="center"
          style="background-color: rgba(0, 0, 0, .5)"
        >
          <v-col cols="9">
            <div class="text-center" style="margin-bottom: 72px">
              <h2 class="headline">
                {{ $t('slide1Top') }}
              </h2>
              <h3 class="subtitle-1">
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
              <h2 class="headline">
                {{ $t('slide2Top') }}
              </h2>
              <h3 class="subtitle-1">
                {{ $t('slide2Bottom') }}
              </h3>
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
            <div
              class="text-center"
              :style="
                $vuetify.breakpoint.mdAndDown
                  ? { marginBottom: '30px' }
                  : { marginBottom: '116px' }
              "
            >
              <h2 class="display-1">
                {{ $t('slide3Top') }}
              </h2>
            </div>
            <div class="text-center" style="margin-bottom: 72px">
              <h2 class="headline">
                {{ $t('slide3Middle') }}
              </h2>
              <h3 class="subtitle-1">
                {{ $t('slide3Bottom') }}
              </h3>
            </div>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <!-- About -->
    <v-card id="about" flat="" tile="">
      <v-responsive :aspect-ratio="2.5">
        <v-card-text class="fill-height">
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12" md="8">
              <v-row justify="center">
                <app-img
                  :height="136"
                  src="/img/logo/satupadu.png"
                  alt="Satu Padu Indonesia"
                  class="mb-5"
                />
              </v-row>
              <h2 class="text-center headline">{{ $t('satuPadu') }}</h2>
            </v-col>
          </v-row>
        </v-card-text>
      </v-responsive>
    </v-card>
    <app-img
      :aspect-ratio="2.5"
      :contain="false"
      src="/img/bg/rukasi.jpg"
      alt="Anak anak"
    >
      <v-row class="fill-height" style="background-color: rgba(0, 0, 0, .7)">
        <v-col cols="12">
          <v-card flat="" tile="" color="transparent" dark="">
            <v-responsive :aspect-ratio="2.5">
              <v-card-text class="fill-height">
                <v-row class="fill-height" align="center" justify="center">
                  <v-col cols="12" md="8">
                    <v-row>
                      <v-col cols="12">
                        <div class="text-center mb-5">
                          <h2 class="headline">
                            {{ $t('satuPaduImplementation') }}
                          </h2>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="8">
                        <ol class="title">
                          <li>{{ $t('implementation1') }}</li>
                          <li>{{ $t('implementation2') }}</li>
                          <li>{{ $t('implementation3') }}</li>
                        </ol>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-row justify="center">
                          <v-col cols="12" md="6">
                            <v-card dark="" color="secondary" ripple="">
                              <v-responsive :aspect-ratio="16 / 9">
                                <v-card-text class="fill-height">
                                  <v-row
                                    class="fill-height"
                                    align="center"
                                    justify="center"
                                  >
                                    <div class="text-center">
                                      <h3 class="subtitle-1">
                                        {{ $t('sinergy') }}
                                      </h3>
                                    </div>
                                  </v-row>
                                </v-card-text>
                              </v-responsive>
                            </v-card>
                          </v-col>
                          <v-col cols="12" md="6">
                            <v-card dark="" color="secondary" ripple="">
                              <v-responsive :aspect-ratio="16 / 9">
                                <v-card-text class="fill-height">
                                  <v-row
                                    class="fill-height"
                                    align="center"
                                    justify="center"
                                  >
                                    <div class="text-center">
                                      <h3 class="subtitle-1">
                                        {{ $t('collaboration') }}
                                      </h3>
                                    </div>
                                  </v-row>
                                </v-card-text>
                              </v-responsive>
                            </v-card>
                          </v-col>
                          <v-col cols="12" md="6">
                            <v-card dark="" color="secondary" ripple="">
                              <v-responsive :aspect-ratio="16 / 9">
                                <v-card-text class="fill-height">
                                  <v-row
                                    class="fill-height"
                                    align="center"
                                    justify="center"
                                  >
                                    <div class="text-center">
                                      <h3 class="subtitle-1">
                                        {{ $t('inspirate') }}
                                      </h3>
                                    </div>
                                  </v-row>
                                </v-card-text>
                              </v-responsive>
                            </v-card>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <div class="text-center">
                          <h3
                            class="headline"
                            v-html="$t('satuPaduPunchline')"
                          ></h3>
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-responsive>
          </v-card>
        </v-col>
      </v-row>
    </app-img>
    <!-- Our Programs -->
    <v-card id="programs" flat="" tile="" color="secondary" dark="">
      <v-responsive :aspect-ratio="2.5">
        <v-card-text class="fill-height">
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12" xs="8">
              <div class="text-center mb-5">
                <h2 class="headline">{{ $t('programs') }}</h2>
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
                      src="/img/programs/satupadu-warnai-sekolah.jpg"
                      :alt="$t('satuWarnaSekolah')"
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
                          {{ $t('satuWarnaSekolah') }}
                        </h2>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="3">
                  <v-card light="" ripple="">
                    <app-img
                      src="/img/programs/satupadu-terangi-desa.jpg"
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
                      <h2 class="headline">{{ $t('weBelieveTop') }}</h2>
                      <h2 class="headline">{{ $t('weBelieveBottom') }}</h2>
                    </div>
                    <div class="text-center">
                      <v-btn class="mx-3" large="" color="primary">
                        {{ $t('donation') }}
                      </v-btn>
                      <v-btn class="mx-3" large="" color="primary">
                        {{ $t('volunteer') }}
                      </v-btn>
                      <v-btn class="mx-3" large="" color="primary">
                        {{ $t('mitra') }}
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
                <h2 class="headline">{{ $t('collaborationPartner') }}</h2>
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
