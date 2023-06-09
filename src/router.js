import { createRouter, createWebHashHistory } from 'vue-router'
const redirects = SITE_DATA.redirectLinks.map(l=>{ // eslint-disable-line no-undef
    return {
        path: l.path,
        name: "Redirecting... - " + l.path.substring(1),
        component: () => import('./views/RedirectView.vue'),
        beforeEnter() {
            window.location.href = l.url;
        }
    }
});

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/HomeView.vue')
        },
        {
            path: '/tm',
            name: 'Trackmania Projects',
            component: () => import('./views/TrackmaniaView.vue')
        },
        {
            path: '/links',
            name: 'Links & Contact',
            component: () => import('./views/LinksView.vue')
        },
        ...redirects,
        {
            path: '/:pathMatch(.*)*',
            name: 'Not Found',
            component: () => import('./views/NotFoundView.vue')
        }
    ]
})

export default router
