export default function ({ store, route, redirect }) {
  const user = store.state.auth.user
  if (!user) {
    redirect('/auth/signin')
  } else if (route.name === 'auth-signin' || route.name === 'auth-signup') {
    redirect('/')
  }
}
