export const PATH = '/vacancies';
export const JOB_TYPE = ["Повна зайнятість", "Часткова зайнятість", "Інтернатура", "Фріланс"];
export const CATEGORY = ["Автоперевезення", "Будівництво", "Виробництво", "ІТ", "Краса та здоров'я",
  "Медицина", "Навчання та репетиторство", "Робочі спеціальності",
  "Сільськогосподарські роботи", "Сфера обслуговування", "Телекомунікація",
  "Управління персоналом"];

export const PAGES = {
  BROWSE_VACANCY: 'BROWSE_VACANCY',
  BROWSE_VACANCY_CHECK: 'BROWSE_VACANCY_CHECK',
  BROWSE_CATEGORIES: 'BROWSE_CATEGORIES',
  MANAGE_VACANCY: 'MANAGE_VACANCY',
  ADD_VACANCY: 'ADD_VACANCY',
  HOME_PAGE: 'HOME_PAGE',
};

export const customStyles = {
  content: {
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export const customStyles2 = {
  content: {
    padding: '15px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export const categoriesConfig = [
  {
    id: 1,
    title: 'Автоперевезення / Логістика',
    className: 'ln  ln-icon-Globe',
    displayHomePage: true
  },
  {
    id: 2,
    title: 'Будівництво',
    className: 'ln ln-icon-Worker',
    displayHomePage: true
  },
  {
    id: 3,
    title: 'Виробництво',
    className: 'ln  ln-icon-Factory',
    displayHomePage: false
  },
  {
    id: 4,
    title: 'IТ',
    className: 'ln ln-icon-Computer-2',
    displayHomePage: true
  },
  {
    id: 5,
    title: 'Краса та здоровя',
    className: 'ln ln-icon-Gemini-2',
    displayHomePage: false
  },
  {
    id: 6,
    title: 'Медицина',
    className: 'ln  ln-icon-Medical-Sign',
    displayHomePage: true
  },
  {
    id: 7,
    title: 'Навчання та репетиторство',
    className: 'ln ln-icon-Student-Female',
    displayHomePage: true
  },
  {
    id: 8,
    title: 'Робочі спеціальності',
    className: 'ln ln-icon-Gear-2',
    displayHomePage: false
  },
  {
    id: 9,
    title: 'Сільськогосподарські роботи',
    className: 'ln  ln-icon-Farmer',
    displayHomePage: false
  },
  {
    id: 10,
    title: 'Сфера обслуговування',
    className: 'ln  ln-icon-Plates',
    displayHomePage: true
  },
  {
    id: 11,
    title: 'Телекомунікація',
    className: 'ln  ln-icon-Laptop-3',
    displayHomePage: true
  },
  {
    id: 12,
    title: 'Управління персоналом',
    className: 'ln  ln-icon-People-onCloud',
    displayHomePage: true
  },
];
