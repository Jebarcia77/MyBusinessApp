// assets
import { IconBriefcase, IconBox } from '@tabler/icons';

// constant
const icons = { IconBriefcase, IconBox };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const products = {
    id: 'productsAndServices',
    title: 'Productos y Servicios',
    type: 'group',
    children: [
        {
            id: 'ProductList',
            title: 'Productos',
            type: 'item',
            url: '/manage/products',
            icon: icons.IconBox,
            breadcrumbs: false
        },
        {
            id: 'ServicesList',
            title: 'Servicios',
            type: 'item',
            url: '/manage/services',
            icon: icons.IconBriefcase,
            breadcrumbs: false
        }
    ]
};

export default products;
