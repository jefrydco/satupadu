export const types = {
  SET_POSTS: 'SET_POSTS'
}

export const state = () => ({
  posts: []
})

export const mutations = {
  [types.SET_POSTS](state, posts) {
    state.posts = posts
  }
}

export const actions = {
  async getPosts({ commit }) {
    try {
      const posts = await this.$http.$get(
        'wp-json/wp/v2/posts?_embed&per_page=8'
      )
      commit(types.SET_POSTS, posts)
    } catch (error) {
      console.log(error)
    }
  }
}
