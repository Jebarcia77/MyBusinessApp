import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import billing from './billing';
import products from './products';
import customerAndSuppliersManager from './customersAndSuppliersManager';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [dashboard, billing, products, customerAndSuppliersManager,pages, utilities, other]
};

export default menuItems;
