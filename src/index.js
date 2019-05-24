import '@/main.scss';

import Counter from '@/counter';
import VueSwal from 'vue-swal/dist/vue-swal.common';

export const install = Vue => {
  Vue.use(VueSwal);
};

export default {
  initState: () => ({}),
  Counter
};
