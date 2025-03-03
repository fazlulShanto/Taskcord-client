/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PlaygroundImport } from './routes/playground'
import { Route as OnboardingImport } from './routes/onboarding'
import { Route as AdminImport } from './routes/admin'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as ProjectProjectIdImport } from './routes/project/$projectId'
import { Route as AdminClockImport } from './routes/admin/clock'
import { Route as ProjectProjectIdIndexImport } from './routes/project/$projectId/index'
import { Route as ProjectProjectIdTeamSettingsImport } from './routes/project/$projectId/team-settings'
import { Route as ProjectProjectIdDashboardImport } from './routes/project/$projectId/dashboard'

// Create/Update Routes

const PlaygroundRoute = PlaygroundImport.update({
  id: '/playground',
  path: '/playground',
  getParentRoute: () => rootRoute,
} as any)

const OnboardingRoute = OnboardingImport.update({
  id: '/onboarding',
  path: '/onboarding',
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

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProjectProjectIdRoute = ProjectProjectIdImport.update({
  id: '/project/$projectId',
  path: '/project/$projectId',
  getParentRoute: () => rootRoute,
} as any)

const AdminClockRoute = AdminClockImport.update({
  id: '/clock',
  path: '/clock',
  getParentRoute: () => AdminRoute,
} as any)

const ProjectProjectIdIndexRoute = ProjectProjectIdIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => ProjectProjectIdRoute,
} as any)

const ProjectProjectIdTeamSettingsRoute =
  ProjectProjectIdTeamSettingsImport.update({
    id: '/team-settings',
    path: '/team-settings',
    getParentRoute: () => ProjectProjectIdRoute,
  } as any)

const ProjectProjectIdDashboardRoute = ProjectProjectIdDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => ProjectProjectIdRoute,
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
    '/onboarding': {
      id: '/onboarding'
      path: '/onboarding'
      fullPath: '/onboarding'
      preLoaderRoute: typeof OnboardingImport
      parentRoute: typeof rootRoute
    }
    '/playground': {
      id: '/playground'
      path: '/playground'
      fullPath: '/playground'
      preLoaderRoute: typeof PlaygroundImport
      parentRoute: typeof rootRoute
    }
    '/admin/clock': {
      id: '/admin/clock'
      path: '/clock'
      fullPath: '/admin/clock'
      preLoaderRoute: typeof AdminClockImport
      parentRoute: typeof AdminImport
    }
    '/project/$projectId': {
      id: '/project/$projectId'
      path: '/project/$projectId'
      fullPath: '/project/$projectId'
      preLoaderRoute: typeof ProjectProjectIdImport
      parentRoute: typeof rootRoute
    }
    '/project/$projectId/dashboard': {
      id: '/project/$projectId/dashboard'
      path: '/dashboard'
      fullPath: '/project/$projectId/dashboard'
      preLoaderRoute: typeof ProjectProjectIdDashboardImport
      parentRoute: typeof ProjectProjectIdImport
    }
    '/project/$projectId/team-settings': {
      id: '/project/$projectId/team-settings'
      path: '/team-settings'
      fullPath: '/project/$projectId/team-settings'
      preLoaderRoute: typeof ProjectProjectIdTeamSettingsImport
      parentRoute: typeof ProjectProjectIdImport
    }
    '/project/$projectId/': {
      id: '/project/$projectId/'
      path: '/'
      fullPath: '/project/$projectId/'
      preLoaderRoute: typeof ProjectProjectIdIndexImport
      parentRoute: typeof ProjectProjectIdImport
    }
  }
}

// Create and export the route tree

interface AdminRouteChildren {
  AdminClockRoute: typeof AdminClockRoute
}

const AdminRouteChildren: AdminRouteChildren = {
  AdminClockRoute: AdminClockRoute,
}

const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren)

interface ProjectProjectIdRouteChildren {
  ProjectProjectIdDashboardRoute: typeof ProjectProjectIdDashboardRoute
  ProjectProjectIdTeamSettingsRoute: typeof ProjectProjectIdTeamSettingsRoute
  ProjectProjectIdIndexRoute: typeof ProjectProjectIdIndexRoute
}

const ProjectProjectIdRouteChildren: ProjectProjectIdRouteChildren = {
  ProjectProjectIdDashboardRoute: ProjectProjectIdDashboardRoute,
  ProjectProjectIdTeamSettingsRoute: ProjectProjectIdTeamSettingsRoute,
  ProjectProjectIdIndexRoute: ProjectProjectIdIndexRoute,
}

const ProjectProjectIdRouteWithChildren =
  ProjectProjectIdRoute._addFileChildren(ProjectProjectIdRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/admin': typeof AdminRouteWithChildren
  '/onboarding': typeof OnboardingRoute
  '/playground': typeof PlaygroundRoute
  '/admin/clock': typeof AdminClockRoute
  '/project/$projectId': typeof ProjectProjectIdRouteWithChildren
  '/project/$projectId/dashboard': typeof ProjectProjectIdDashboardRoute
  '/project/$projectId/team-settings': typeof ProjectProjectIdTeamSettingsRoute
  '/project/$projectId/': typeof ProjectProjectIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/admin': typeof AdminRouteWithChildren
  '/onboarding': typeof OnboardingRoute
  '/playground': typeof PlaygroundRoute
  '/admin/clock': typeof AdminClockRoute
  '/project/$projectId/dashboard': typeof ProjectProjectIdDashboardRoute
  '/project/$projectId/team-settings': typeof ProjectProjectIdTeamSettingsRoute
  '/project/$projectId': typeof ProjectProjectIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/admin': typeof AdminRouteWithChildren
  '/onboarding': typeof OnboardingRoute
  '/playground': typeof PlaygroundRoute
  '/admin/clock': typeof AdminClockRoute
  '/project/$projectId': typeof ProjectProjectIdRouteWithChildren
  '/project/$projectId/dashboard': typeof ProjectProjectIdDashboardRoute
  '/project/$projectId/team-settings': typeof ProjectProjectIdTeamSettingsRoute
  '/project/$projectId/': typeof ProjectProjectIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/admin'
    | '/onboarding'
    | '/playground'
    | '/admin/clock'
    | '/project/$projectId'
    | '/project/$projectId/dashboard'
    | '/project/$projectId/team-settings'
    | '/project/$projectId/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/admin'
    | '/onboarding'
    | '/playground'
    | '/admin/clock'
    | '/project/$projectId/dashboard'
    | '/project/$projectId/team-settings'
    | '/project/$projectId'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/admin'
    | '/onboarding'
    | '/playground'
    | '/admin/clock'
    | '/project/$projectId'
    | '/project/$projectId/dashboard'
    | '/project/$projectId/team-settings'
    | '/project/$projectId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  AdminRoute: typeof AdminRouteWithChildren
  OnboardingRoute: typeof OnboardingRoute
  PlaygroundRoute: typeof PlaygroundRoute
  ProjectProjectIdRoute: typeof ProjectProjectIdRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  AdminRoute: AdminRouteWithChildren,
  OnboardingRoute: OnboardingRoute,
  PlaygroundRoute: PlaygroundRoute,
  ProjectProjectIdRoute: ProjectProjectIdRouteWithChildren,
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
        "/about",
        "/admin",
        "/onboarding",
        "/playground",
        "/project/$projectId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
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
    "/onboarding": {
      "filePath": "onboarding.tsx"
    },
    "/playground": {
      "filePath": "playground.tsx"
    },
    "/admin/clock": {
      "filePath": "admin/clock.tsx",
      "parent": "/admin"
    },
    "/project/$projectId": {
      "filePath": "project/$projectId.tsx",
      "children": [
        "/project/$projectId/dashboard",
        "/project/$projectId/team-settings",
        "/project/$projectId/"
      ]
    },
    "/project/$projectId/dashboard": {
      "filePath": "project/$projectId/dashboard.tsx",
      "parent": "/project/$projectId"
    },
    "/project/$projectId/team-settings": {
      "filePath": "project/$projectId/team-settings.tsx",
      "parent": "/project/$projectId"
    },
    "/project/$projectId/": {
      "filePath": "project/$projectId/index.tsx",
      "parent": "/project/$projectId"
    }
  }
}
ROUTE_MANIFEST_END */
