window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    hamburger = document.querySelector('.hamburger');
    overlay = document.querySelector('.header__overlay');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('header__menu-active');
        overlay.classList.toggle('header__overlay-active');
    });

    overlay.addEventListener('click', () => {
        hamburger.classList.remove('hamburger-active');
        menu.classList.remove('header__menu-active');
        overlay.classList.remove('header__overlay-active');
    });
})



const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ua", "ru"];
const currentPathName = window.location.pathname;
let currentLang =
	localStorage.getItem("language") || checkBrowserLang() || "ua";
let currentTexts = {};

const homeTexts = {
    "about_title": {
        ua: "Еротичний масаж у Дніпрі від провідного салону релаксуючих еротичних процедур '69'",
        ru: "Эротический массаж в Днепре от ведущего салона релаксирующих эротических процедур '69'",
    },
    "home_page-title": {
		ru: "Домашняя страница",
		ua: "Homepage",
		de: "Startseite",
	},
};
const anotherTexts = {
    "another_title": {
        ua: "Еротичний масаж у Дніпрі від провідного салону релаксуючих еротичних процедур '69'",
        ru: "Эротический массаж в Днепре от ведущего салона релаксирующих эротических процедур '69'",
    },
};

function checkPagePathName() {
    switch (currentPathName) {
        case "/index.html":
            currentTexts = homeTexts; 
            break;
        case "/main.html":
            currentTexts = homeTexts; 
            break;
        case "/vacancies.html":
            currentTexts = anotherTexts; 
            break;
    
        default:
            currentText = homeTexts;
            break;
    }
}
checkPagePathName();

function changeLang() {
	for (const key in currentTexts) {
		let elem = document.querySelector(`[data-lang=${key}]`);
		if (elem) {
			elem.textContent = currentTexts[key][currentLang];
		}
	}
}
changeLang();

langButtons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		if (!event.target.classList.contains("header__btn_active")) {
			currentLang = event.target.dataset.btn;
			localStorage.setItem("language", event.target.dataset.btn);
			resetActiveClass(langButtons, "header__btn_active");
			btn.classList.add("header__btn_active");
			changeLang();
		}
	});
});

function resetActiveClass(arr, activeClass) {
	arr.forEach((elem) => {
		elem.classList.remove(activeClass);
	});
}

// Проверка активной кнопки
function checkActiveLangButton() {
	switch (currentLang) {
        case "ua":
			document
				.querySelector('[data-btn="ua"]')
				.classList.add("header__btn_active");
			break;
		case "ru":
			document
				.querySelector('[data-btn="ru"]')
				.classList.add("header__btn_active");
			break;
		// case "de":
		// 	document
		// 		.querySelector('[data-btn="de"]')
		// 		.classList.add("header__btn_active");
		// 	break;

		default:
			document
				.querySelector('[data-btn="ua"]')
				.classList.add("header__btn_active");
			break;
	}
}
checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
	const navLang = navigator.language.slice(0, 2).toLowerCase();
	const result = allLangs.some((elem) => {
		return elem === navLang;
	});
	if (result) {
		return navLang;
	}
}

console.log("navigator.language", checkBrowserLang());













// var arrLang = {
//     'ua': {
//       'about': 'Про салон',
//       'services': 'Ціни еротичного масажу',
//       'girls': 'Дівчата',
//       'interior': 'Інтер`єр',
//       'contacts': 'Контакти',
//       'vacancies': 'Вакансії',
//     },
//     'ru': {
//         'about': 'Про салон',
//         'services': 'Цены эротического массажа',
//         'girls': 'Девочки',
//         'interior': 'Интерьер',
//         'contacts': 'Контакты',
//         'vacancies': 'Вакансии',
//       },
//   }
  
//     $(function() {
//       $('.translate').click(function() {
//         var lang = $(this).attr('id');
  
//         $('.lang').each(function(index, item) {
//           $(this).text(arrLang[lang][$(this).attr('key')]);
//         });
//       });
//     });

