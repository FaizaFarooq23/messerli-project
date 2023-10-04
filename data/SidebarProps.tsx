export const SidebarProps = {
    logo: {
        image: '/images/logo.svg',
        alt: 'eazypass logo'
    },

    account: {
        type: 'Standart account',
        email: "admin@eazypass.fr",
    },
    items: [
        {
            title: 'Reporting',
            icon: '/images/sidebar/reporting.svg',
            activeIcon: '/images/sidebar/reporting-blue.svg',
            link: '/',
            links: ['/']
        },
        {
            title: 'Historique',
            icon: '/images/sidebar/historique.svg',
            activeIcon: '/images/sidebar/historique-blue.svg',
            link: '/history',
            links: ['/history']
        },

    ]
}