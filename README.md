# Example extend Nuxt error

## Use

- Create `exception.js` in `plugins` directory // see [exception.js](./exception.js)
- Add `@/plugins/exception` into `plugins` array of `nuxt.config.js`
- Use `app.$exception` function instead of `error` function in `asyncData`

Example: `pages/index.vue`
```js
export default {
    async asyncData({ app }) {
        try {
            const asyncData = {}
            asyncData.posts = await app.$axios.$get('/posts')

            return asyncData
        } catch(e) {
            app.$exception(e)
        }
    }
}
```

More docs about [Nuxt error](https://nuxtjs.org/guide/async-data#handling-errors)