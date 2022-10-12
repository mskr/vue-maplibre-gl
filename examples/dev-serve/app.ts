import { createApp } from 'vue';
import RootComponent from './RootComponent.vue';
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "app.use" call
import VueMaplibreGl from '@/entry.esm';

const app = createApp(RootComponent);
app.use(VueMaplibreGl);

app.mount('#app');
