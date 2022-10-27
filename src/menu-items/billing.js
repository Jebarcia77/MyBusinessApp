// assets
import { IconReceipt } from '@tabler/icons';

// constant
const icons = { IconReceipt };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const billing = {
    id: 'billing',
    title: 'Emitir comprobante',
    type: 'group',
    children: [
        {
            id: 'Factura',
            title: 'Factura',
            type: 'item',
            url: '/comprobantes/factura',
            icon: icons.IconReceipt,
            breadcrumbs: false
        }
    ]
};

export default billing;
