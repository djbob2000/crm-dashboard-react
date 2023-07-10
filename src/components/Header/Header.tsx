import React from 'react';
import css from './Header.module.scss';
import sprite from '../../assets/icons/sprite.svg';
import avatar from '../../assets/images/avatar.jpg';
import avatar2x from '../../assets/images/avatar@2x.jpg';

interface NavigationItem {
  id: number;
  active: boolean;
  title: string;
  hasChildren: boolean;
  icon: string;
}

export const Header: React.FC = () => {
  const navigationData: NavigationItem[] = [
    { id: 1, active: false, title: 'Dashboard', hasChildren: false, icon: 'dashboard' },
    { id: 2, active: false, title: 'Product', hasChildren: true, icon: 'product' },
    { id: 3, active: true, title: 'Customers', hasChildren: true, icon: 'customers' },
    { id: 4, active: false, title: 'Income', hasChildren: true, icon: 'income' },
    { id: 5, active: false, title: 'Promote', hasChildren: true, icon: 'promote' },
    { id: 6, active: false, title: 'Help', hasChildren: true, icon: 'help' },
  ];

  return (
    <header className={css.header}>
      <a href="./" className={css.logo}>
        <svg className={css.logo__icon}>
          <use href={`${sprite}#logo`} />
        </svg>
        <div className={css.logo__wrap}>
          <span className={css.logo__title}>Dashboard</span>
          <span className={css.logo__version}>v.01</span>
        </div>
      </a>
      <nav className={css.header__navigation}>
        <ul className={css.navigation}>
          {navigationData.map((item) => (
            <li className={css.navigation__item} key={item.id}>
              <a href="#" className={`${item.active ? css.active : ''}`}>
                <svg className={css.navigation__icon}>
                  <use href={`${sprite}#${item.icon}`} />
                </svg>
                <span className={css.navigation__text}>{item.title}</span>

                {item.hasChildren && (
                  <svg className={css['navigation__icon-arrow']}>
                    <use href={`${sprite}#arrow-right`} />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={css['header__user-info']}>
        <img
          className={css['user-info__photo']}
          srcSet={`${avatar} 1x, ${avatar2x} 2x`}
          src={avatar}
          alt="User Photo"
        />
        <div className={css['user-info']}>
          <span className={css['user-info__login']}>Evano</span>
          <span className={css['user-info__role']}>Project Manager</span>
        </div>
      </div>
    </header>
  );
};
