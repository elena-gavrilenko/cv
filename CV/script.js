const languages = {
  en: {
    name: 'Gavrilenko Elena',
    about: 'About me:',
    'about-me': `For a long time I worked as an economist. But, finding myself out
    of work, I realized that this specialty firstly: unclaimed, and
    secondly: bored. Therefore, I decided to try myself in IT.`,
    education: 'Education',
    college1:
      'Graduated from the University. F. Skaryna, specializing in mathematics.',
    college2:
      'Graduated from the Belarusian Trade and Economics University of Consumer Cooperatives with a degree in management and economics at an enterprise.',
    college3: 'IT-academy Step,specializing in Frontend.(In progress)',
    work: 'Work:',
    job1: 'LLC Baucomplekt. Production and sale of PVC windows and laminated veneer lumber. Position: Maneger of the Marketing Department.',
    job2: ' OJSC Salkomm-invest. Food trade. Position: economist.',
    job3: 'LLC Grandmotors. Sale of spare parts for trucks. Position: economist.',
    code: 'Code:',
    skills: 'Skills',
    projects: 'Projects',
    contacts: 'Contacts',
  },
  ru: {
    name: 'Гавриленко Елена',
    about: 'Обо мне:',
    'about-me': `Долгое время я работала экономистом. Но, оказавшись без работы, поняла, что эта специальность во-первых: невостребована, и во-вторых: скучная. Поэтому, я решила попробовать себя в IT.`,
    education: 'Образование',
    college1:
      'Окончила университет им. Ф.Скорины, по специальности математика.',
    college2:
      'Окончила Белорусский торгово-экономический университет Потребительской Кооперации, по специальности экономика и управление на предприятии.',
    college3: 'IT-академия Шаг, специальность Фронтенд.(В процессе)',
    work: 'Работа:',
    job1: 'ООО Баукомплект. Производство и продажа окон из ПВХ и клееного бруса. Должность: Начальник отдела маркетинга.',
    job2: 'ЗАО Салкомм-инвест. Торговля продуктами. Должность: экономист.',
    job3: 'ООО Грандмоторс. Продажа запасных частей к грузовым автомобилям. Должность: экономист.',
    code: 'Код:',
    skills: 'Навыки',
    projects: 'Проекты',
    contacts: 'Контакты',
  },
};

const btnEn = document.querySelector('.lang__en');
const btnRu = document.querySelector('.lang__ru');

function changeLang(lang) {
  const elementsToTranslate = document.querySelectorAll('[data-change]');
  const langObj = languages[lang];
  elementsToTranslate.forEach((element) => {
    const elementKey = element.dataset.change;
    if (elementKey in langObj) {
      if (element.placeholder) {
        element.placeholder = langObj[elementKey];
        element.textContent = '';
      } else {
        element.textContent = langObj[elementKey];
      }
    }
  });
}

btnEn.addEventListener('click', (event) => {
  btnEn.classList.add('changeColor');
  btnRu.classList.remove('changeColor');
  changeLang('en');
});
btnRu.addEventListener('click', (event) => {
  btnRu.classList.add('changeColor');
  btnEn.classList.remove('changeColor');
  changeLang('ru');
});
