export default function ({ store, route, redirect }) {
  const user = store.state.auth.user
  if (!user && route.name === 'new') {
    redirect('/auth/signin')
  } else if (user && (route.name === 'auth-signin' || route.name === 'auth-signup')) {
    redirect('/')
  }
}
