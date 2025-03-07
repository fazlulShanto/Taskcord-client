/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PlaygroundImport } from './routes/playground'
import { Route as AdminImport } from './routes/admin'
import { Route as AboutImport } from './routes/about'
import { Route as AuthGuardImport } from './routes/_authGuard'
import { Route as IndexImport } from './routes/index'
import { Route as AdminClockImport } from './routes/admin/clock'
import { Route as AuthGuardOnboardingImport } from './routes/_authGuard.onboarding'
import { Route as AuthGuardProjectProjectIdImport } from './routes/_authGuard.project/$projectId'
import { Route as AuthGuardProjectProjectIdIndexImport } from './routes/_authGuard.project/$projectId/index'
import { Route as AuthGuardProjectProjectIdTeamSettingsImport } from './routes/_authGuard.project/$projectId/team-settings'
import { Route as AuthGuardProjectProjectIdDashboardImport } from './routes/_authGuard.project/$projectId/dashboard'

// Create/Update Routes

const PlaygroundRoute = PlaygroundImport.update({
  id: '/playground',
  path: '/playground',
  getParentRoute: () => rootRoute,
} as any)

const AdminRoute = AdminImport.update({
  id: '/admin',
  path: '/admin',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const AuthGuardRoute = AuthGuardImport.update({
  id: '/_authGuard',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AdminClockRoute = AdminClockImport.update({
  id: '/clock',
  path: '/clock',
  getParentRoute: () => AdminRoute,
} as any)

const AuthGuardOnboardingRoute = AuthGuardOnboardingImport.update({
  id: '/onboarding',
  path: '/onboarding',
  getParentRoute: () => AuthGuardRoute,
} as any)

const AuthGuardProjectProjectIdRoute = AuthGuardProjectProjectIdImport.update({
  id: '/project/$projectId',
  path: '/project/$projectId',
  getParentRoute: () => AuthGuardRoute,
} as any)

const AuthGuardProjectProjectIdIndexRoute =
  AuthGuardProjectProjectIdIndexImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => AuthGuardProjectProjectIdRoute,
  } as any)

const AuthGuardProjectProjectIdTeamSettingsRoute =
  AuthGuardProjectProjectIdTeamSettingsImport.update({
    id: '/team-settings',
    path: '/team-settings',
    getParentRoute: () => AuthGuardProjectProjectIdRoute,
  } as any)

const AuthGuardProjectProjectIdDashboardRoute =
  AuthGuardProjectProjectIdDashboardImport.update({
    id: '/dashboard',
    path: '/dashboard',
    getParentRoute: () => AuthGuardProjectProjectIdRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_authGuard': {
      id: '/_authGuard'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthGuardImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/admin': {
      id: '/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminImport
      parentRoute: typeof rootRoute
    }
    '/playground': {
      id: '/playground'
      path: '/playground'
      fullPath: '/playground'
      preLoaderRoute: typeof PlaygroundImport
      parentRoute: typeof rootRoute
    }
    '/_authGuard/onboarding': {
      id: '/_authGuard/onboarding'
      path: '/onboarding'
      fullPath: '/onboarding'
      preLoaderRoute: typeof AuthGuardOnboardingImport
      parentRoute: typeof AuthGuardImport
    }
    '/admin/clock': {
      id: '/admin/clock'
      path: '/clock'
      fullPath: '/admin/clock'
      preLoaderRoute: typeof AdminClockImport
      parentRoute: typeof AdminImport
    }
    '/_authGuard/project/$projectId': {
      id: '/_authGuard/project/$projectId'
      path: '/project/$projectId'
      fullPath: '/project/$projectId'
      preLoaderRoute: typeof AuthGuardProjectProjectIdImport
      parentRoute: typeof AuthGuardImport
    }
    '/_authGuard/project/$projectId/dashboard': {
      id: '/_authGuard/project/$projectId/dashboard'
      path: '/dashboard'
      fullPath: '/project/$projectId/dashboard'
      preLoaderRoute: typeof AuthGuardProjectProjectIdDashboardImport
      parentRoute: typeof AuthGuardProjectProjectIdImport
    }
    '/_authGuard/project/$projectId/team-settings': {
      id: '/_authGuard/project/$projectId/team-settings'
      path: '/team-settings'
      fullPath: '/project/$projectId/team-settings'
      preLoaderRoute: typeof AuthGuardProjectProjectIdTeamSettingsImport
      parentRoute: typeof AuthGuardProjectProjectIdImport
    }
    '/_authGuard/project/$projectId/': {
      id: '/_authGuard/project/$projectId/'
      path: '/'
      fullPath: '/project/$projectId/'
      preLoaderRoute: typeof AuthGuardProjectProjectIdIndexImport
      parentRoute: typeof AuthGuardProjectProjectIdImport
    }
  }
}

// Create and export the route tree

interface AuthGuardProjectProjectIdRouteChildren {
  AuthGuardProjectProjectIdDashboardRoute: typeof AuthGuardProjectProjectIdDashboardRoute
  AuthGuardProjectProjectIdTeamSettingsRoute: typeof AuthGuardProjectProjectIdTeamSettingsRoute
  AuthGuardProjectProjectIdIndexRoute: typeof AuthGuardProjectProjectIdIndexRoute
}

const AuthGuardProjectProjectIdRouteChildren: AuthGuardProjectProjectIdRouteChildren =
  {
    AuthGuardProjectProjectIdDashboardRoute:
      AuthGuardProjectProjectIdDashboardRoute,
    AuthGuardProjectProjectIdTeamSettingsRoute:
      AuthGuardProjectProjectIdTeamSettingsRoute,
    AuthGuardProjectProjectIdIndexRoute: AuthGuardProjectProjectIdIndexRoute,
  }

const AuthGuardProjectProjectIdRouteWithChildren =
  AuthGuardProjectProjectIdRoute._addFileChildren(
    AuthGuardProjectProjectIdRouteChildren,
  )

interface AuthGuardRouteChildren {
  AuthGuardOnboardingRoute: typeof AuthGuardOnboardingRoute
  AuthGuardProjectProjectIdRoute: typeof AuthGuardProjectProjectIdRouteWithChildren
}

const AuthGuardRouteChildren: AuthGuardRouteChildren = {
  AuthGuardOnboardingRoute: AuthGuardOnboardingRoute,
  AuthGuardProjectProjectIdRoute: AuthGuardProjectProjectIdRouteWithChildren,
}

const AuthGuardRouteWithChildren = AuthGuardRoute._addFileChildren(
  AuthGuardRouteChildren,
)

interface AdminRouteChildren {
  AdminClockRoute: typeof AdminClockRoute
}

const AdminRouteChildren: AdminRouteChildren = {
  AdminClockRoute: AdminClockRoute,
}

const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AuthGuardRouteWithChildren
  '/about': typeof AboutRoute
  '/admin': typeof AdminRouteWithChildren
  '/playground': typeof PlaygroundRoute
  '/onboarding': typeof AuthGuardOnboardingRoute
  '/admin/clock': typeof AdminClockRoute
  '/project/$projectId': typeof AuthGuardProjectProjectIdRouteWithChildren
  '/project/$projectId/dashboard': typeof AuthGuardProjectProjectIdDashboardRoute
  '/project/$projectId/team-settings': typeof AuthGuardProjectProjectIdTeamSettingsRoute
  '/project/$projectId/': typeof AuthGuardProjectProjectIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AuthGuardRouteWithChildren
  '/about': typeof AboutRoute
  '/admin': typeof AdminRouteWithChildren
  '/playground': typeof PlaygroundRoute
  '/onboarding': typeof AuthGuardOnboardingRoute
  '/admin/clock': typeof AdminClockRoute
  '/project/$projectId/dashboard': typeof AuthGuardProjectProjectIdDashboardRoute
  '/project/$projectId/team-settings': typeof AuthGuardProjectProjectIdTeamSettingsRoute
  '/project/$projectId': typeof AuthGuardProjectProjectIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_authGuard': typeof AuthGuardRouteWithChildren
  '/about': typeof AboutRoute
  '/admin': typeof AdminRouteWithChildren
  '/playground': typeof PlaygroundRoute
  '/_authGuard/onboarding': typeof AuthGuardOnboardingRoute
  '/admin/clock': typeof AdminClockRoute
  '/_authGuard/project/$projectId': typeof AuthGuardProjectProjectIdRouteWithChildren
  '/_authGuard/project/$projectId/dashboard': typeof AuthGuardProjectProjectIdDashboardRoute
  '/_authGuard/project/$projectId/team-settings': typeof AuthGuardProjectProjectIdTeamSettingsRoute
  '/_authGuard/project/$projectId/': typeof AuthGuardProjectProjectIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/about'
    | '/admin'
    | '/playground'
    | '/onboarding'
    | '/admin/clock'
    | '/project/$projectId'
    | '/project/$projectId/dashboard'
    | '/project/$projectId/team-settings'
    | '/project/$projectId/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/about'
    | '/admin'
    | '/playground'
    | '/onboarding'
    | '/admin/clock'
    | '/project/$projectId/dashboard'
    | '/project/$projectId/team-settings'
    | '/project/$projectId'
  id:
    | '__root__'
    | '/'
    | '/_authGuard'
    | '/about'
    | '/admin'
    | '/playground'
    | '/_authGuard/onboarding'
    | '/admin/clock'
    | '/_authGuard/project/$projectId'
    | '/_authGuard/project/$projectId/dashboard'
    | '/_authGuard/project/$projectId/team-settings'
    | '/_authGuard/project/$projectId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthGuardRoute: typeof AuthGuardRouteWithChildren
  AboutRoute: typeof AboutRoute
  AdminRoute: typeof AdminRouteWithChildren
  PlaygroundRoute: typeof PlaygroundRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthGuardRoute: AuthGuardRouteWithChildren,
  AboutRoute: AboutRoute,
  AdminRoute: AdminRouteWithChildren,
  PlaygroundRoute: PlaygroundRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authGuard",
        "/about",
        "/admin",
        "/playground"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authGuard": {
      "filePath": "_authGuard.tsx",
      "children": [
        "/_authGuard/onboarding",
        "/_authGuard/project/$projectId"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/admin": {
      "filePath": "admin.tsx",
      "children": [
        "/admin/clock"
      ]
    },
    "/playground": {
      "filePath": "playground.tsx"
    },
    "/_authGuard/onboarding": {
      "filePath": "_authGuard.onboarding.tsx",
      "parent": "/_authGuard"
    },
    "/admin/clock": {
      "filePath": "admin/clock.tsx",
      "parent": "/admin"
    },
    "/_authGuard/project/$projectId": {
      "filePath": "_authGuard.project/$projectId.tsx",
      "parent": "/_authGuard",
      "children": [
        "/_authGuard/project/$projectId/dashboard",
        "/_authGuard/project/$projectId/team-settings",
        "/_authGuard/project/$projectId/"
      ]
    },
    "/_authGuard/project/$projectId/dashboard": {
      "filePath": "_authGuard.project/$projectId/dashboard.tsx",
      "parent": "/_authGuard/project/$projectId"
    },
    "/_authGuard/project/$projectId/team-settings": {
      "filePath": "_authGuard.project/$projectId/team-settings.tsx",
      "parent": "/_authGuard/project/$projectId"
    },
    "/_authGuard/project/$projectId/": {
      "filePath": "_authGuard.project/$projectId/index.tsx",
      "parent": "/_authGuard/project/$projectId"
    }
  }
}
ROUTE_MANIFEST_END */
