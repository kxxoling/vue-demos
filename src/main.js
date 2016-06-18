import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Index from './views/Index'

import Editor from './components/Markdown'
import Github from './components/Github'
import ModalController from './components/ModalController'
import ElasticHeader from './components/ElasticHeader'
import TreeView from './components/TreeView'
import WidgetsView from './views/WidgetsView'
import GridTable from './views/GridTable'
import Todos from './components/Todos'
import GithubRepoExplorer from './views/GithubRepoExplorer'

Vue.debug = true
Vue.use(VueResource)
Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/': {
    name: 'index',
    component: Index
  },
  '/github/': {
    name: 'github',
    component: Github
  },
  '/explorer/': {
    name: 'explorer',
    component: GithubRepoExplorer
  },
  '/markdown/': {
    name: 'editor',
    component: Editor
  },
  '/modal/': {
    name: 'modal',
    component: ModalController
  },
  '/elastic-header/': {
    name: 'elastic-header',
    component: ElasticHeader
  },
  '/tree/': {
    name: 'tree',
    component: TreeView
  },
  '/todos/': {
    name: 'todos',
    component: Todos
  },
  '/widgets/': {
    name: 'widgets',
    component: WidgetsView
  },
  '/table/': {
    name: 'table',
    component: GridTable
  }
})

var App = require('./App.vue')

router.start(App, 'app')
