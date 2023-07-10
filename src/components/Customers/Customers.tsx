import { useEffect, useState, ChangeEvent } from 'react';
import css from './Customers.module.scss';
import sprite from '../../assets/icons/sprite.svg';

interface Customer {
  id: number;
  name: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: 'Active' | 'Inactive';
}

export const Customers: React.FC = () => {
  const customersData: Customer[] = [
    {
      id: 1,
      name: 'Jane Cooper',
      company: 'Microsoft',
      phone: '(225) 555-0118',
      email: 'jane@microsoft.com',
      country: 'United States',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Floyd Miles',
      company: 'Yahoo',
      phone: '(205) 555-0100',
      email: 'floyd@yahoo.com',
      country: 'Kiribati',
      status: 'Inactive',
    },
    {
      id: 3,
      name: 'Ronald Richards',
      company: 'Adobe',
      phone: '(302) 555-0107',
      email: 'ronald@adobe.com',
      country: 'Israel',
      status: 'Inactive',
    },
    {
      id: 4,
      name: 'Marvin McKinney',
      company: 'Tesla',
      phone: '(252) 555-0126',
      email: 'marvin@tesla.com',
      country: 'Iran',
      status: 'Active',
    },
    {
      id: 5,
      name: 'Jerome Bell',
      company: 'Google',
      phone: '(629) 555-0129',
      email: 'jerome@google.com',
      country: 'Réunion',
      status: 'Active',
    },
    {
      id: 6,
      name: 'Kathryn Murphy',
      company: 'Microsoft',
      phone: '(406) 555-0120',
      email: 'kathryn@microsoft.com',
      country: 'Curaçao',
      status: 'Active',
    },
    {
      id: 7,
      name: 'Jacob Jones',
      company: 'Yahoo',
      phone: '(208) 555-0112',
      email: 'jacob@yahoo.com',
      country: 'Brazil',
      status: 'Active',
    },
    {
      id: 8,
      name: 'Kristin Watson',
      company: 'Facebook',
      phone: '(704) 555-0127',
      email: 'kristin@facebook.com',
      country: 'Åland Islands',
      status: 'Inactive',
    },
  ];

  const [searchValue, setSearchValue] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>(customersData);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      const filteredData = customersData.filter((customer) =>
        customer.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredCustomers(filteredData);
    }, 500);

    return () => clearTimeout(delay);
  }, [searchValue, customersData]);

  return (
    <>
      <main className={css.main}>
        <h2 className={css.main__login}>Hello Evano 👋🏼,</h2>
        <section className={css.customers}>
          <div className={css.customers__header}>
            <div className={css['customers__header-info']}>
              <div className={css.customers__title}>All Customers</div>
              <div className={css.customers__subtitle}>Active Members</div>
            </div>
            <div className={css.customers__search}>
              <svg className={css['customers__search-icon']}>
                <use href={`${sprite}#search`}></use>
              </svg>
              <input type="text" placeholder="Search" onChange={handleSearchChange} />
            </div>
          </div>

          <div className={css.table}>
            <div className={css.table__inner}>
              <div className={`${css.table__header} ${css.table__row}`}>
                <div className={css['table__header-item']}>Customer Name</div>
                <div className={css['table__header-item']}>Company</div>
                <div className={css['table__header-item']}>Phone Number</div>
                <div className={css['table__header-item']}>Email</div>
                <div className={css['table__header-item']}>Country</div>
                <div className={css['table__header-item']}>Status</div>
              </div>
              <div className={css.table__customers}>
                {filteredCustomers.map((customer) => (
                  <div className={`${css.table__customer} ${css.table__row}`} key={customer.id}>
                    <div className={css.table__item}>{customer.name}</div>
                    <div className={css.table__item}>{customer.company}</div>
                    <div className={css.table__item}>{customer.phone}</div>
                    <div className={css.table__item}>{customer.email}</div>
                    <div className={css.table__item}>{customer.country}</div>
                    <div className={css.table__item}>
                      <div
                        className={`${css.table__status} ${
                          customer.status === 'Active' ? css.active : css.inactive
                        }`}
                      >
                        {customer.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={css['customers-pagination']}>
            <div className={css['customers-pagination__info']}>
              Showing data 1 to 8 of 256K entries
            </div>
            <ul className={`${css['customers-pagination__numbers']} ${css['pagination-list']}`}>
              <li className={css['pagination-list__item']}>
                <a href="#prev">&#10094;</a>
              </li>
              <li className={`${css['pagination-list__item']} ${css['pagination-item__active']}`}>
                <a href="#1" className={css.active}>
                  1
                </a>
              </li>
              <li className={css['pagination-list__item']}>
                <a href="#2">2</a>
              </li>
              <li className={css['pagination-list__item']}>
                <a href="#3">3</a>
              </li>
              <li className={css['pagination-list__item']}>
                <a href="#4">4</a>
              </li>
              <li className={css['pagination-list__dots']}>
                <a href="#...">...</a>
              </li>
              <li className={css['pagination-list__item']}>
                <a href="#40">40</a>
              </li>
              <li className={css['pagination-list__item']}>
                <a href="#next">&#10095;</a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};
