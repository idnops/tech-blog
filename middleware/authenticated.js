export default function ({ store, redirect }) {
  const user = store.state.auth.user
  if (user) {
    redirect('/')
  }
}
