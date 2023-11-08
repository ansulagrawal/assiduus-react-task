import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const sideBarList = [
  { title: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
  { title: 'Accounts', path: '/accounts', icon: 'account_balance_wallet' },
  { title: 'Payroll', path: '/payroll', icon: 'attach_money' },
  { title: 'Reports', path: '/reports', icon: 'description' },
  { title: 'Advisor', path: '/advisor', icon: 'person' },
  { title: 'Contacts', path: '/contacts', icon: 'contacts' },
];

function SideNavBar() {
  // const navigate = useNavigate();

  const { pathname } = useLocation();
  const activePath = pathname?.split('/')[1];
  console.log(activePath, 'activepath');
  return (
    <div className="py-4">
      {sideBarList.map(item => (
        <Link to={item?.path} key={item.title} className={clsx('w-full gap-3 py-4 mb-2 flex items-center pl-[30%]', {'hover:bg-green-100': `/${activePath}` !== item.path}, { 'bg-green-600 text-white': `/${activePath}` === item.path })}>
          <span className="material-symbols-outlined">{item.icon}</span>
          <p>{item.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default SideNavBar;
