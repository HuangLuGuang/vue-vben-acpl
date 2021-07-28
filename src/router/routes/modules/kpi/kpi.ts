import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const kpi: AppRouteModule = {
  path: '/kpi',
  name: 'kpi',
  component: LAYOUT,
  redirect: '/kpi/one_cummins',
  meta: {
    orderNo: 800,
    icon: 'ion:bar-chart-outline',
    title: t('kpi.one_cummins.one_cummins'),
  },
  children: [
    {
      path: 'one_cummins',
      name: 'one_cummins',
      component: () => import('/@/views/kpi/one_cummins.vue'),
      meta: {
        title: t('kpi.one_cummins.one_cummins'),
      },
    },
  ],
};

export default kpi;
