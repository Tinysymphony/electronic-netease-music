import RadioView from '@pages/RadioView'
export default [
  {
    path: '/',
    name: 'main',
    component: RadioView
  },
  {
    path: '*',
    redirect: '/'
  }
]
