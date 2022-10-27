// assets
import { IconUsers, IconTruck } from '@tabler/icons';

// constant
const icons = { IconUsers,IconTruck };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const customerAndSuppliersManager = {
    id: 'customerAndSuppliersManager',
    title: 'Clientes y Proveedores',
    type: 'group',
    children: [
        {
            id: 'customers',
            title: 'Clientes',
            type: 'item',
            url: '/manage/customers',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'suppliers',
            title: 'Proveedores',
            type: 'item',
            url: '/manage/suppliers',
            icon: icons.IconTruck,
            breadcrumbs: false
        }
    ]
};

export default customerAndSuppliersManager;
