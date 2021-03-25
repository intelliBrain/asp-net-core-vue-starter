import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/StartLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ]
  },
  {
    path: '/runs',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Runs/Index.vue') }
    ]
  },
  {
    path: '/runs',
    component: () => import('layouts/RunEditLayout.vue'),
    children: [
      { path: 'create', component: () => import('pages/Runs/Create.vue') },
      { path: 'edit', component: () => import('pages/Runs/Edit.vue') }
    ]
  },
  {
    path: '/runs',
    component: () => import('layouts/WizardLayout.vue'),
    children: [
      { path: 'initialize', component: () => import('pages/Runs/StepInitialize.vue') },
      { path: 'overview-scan', component: () => import('pages/Runs/StepOverviewScan.vue') },
      { path: 'roi-selection', component: () => import('pages/Runs/StepRoiSelection.vue') },
      { path: 'config', component: () => import('pages/Runs/StepConfiguration.vue') },
      { path: 'run', component: () => import('pages/Runs/ExperimentRun.vue') },
      { path: 'result', component: () => import('pages/Runs/ExperimentResult.vue') }
    ]
  },
  {
    path: '/setup',
    component: () => import('layouts/SetupLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Setup/Common.vue') },
      { path: 'microscope', component: () => import('pages/Setup/Microscope.vue') },
      { path: 'tray-handler', component: () => import('pages/Setup/TrayHandler.vue') },
      { path: 'sample-preparator', component: () => import('pages/Setup/SamplePreparator.vue') },
      { path: 'incubator', component: () => import('pages/Setup/Incubator.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
