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

  return <></>;
};
