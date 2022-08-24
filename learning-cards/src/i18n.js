import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      ru: {
        translation: {
          hiw: {
            lang: 'Русский',
            title: 'Как это работает',
            desc1: `Выберите группу слов, например A1 adverbs. Под каждым слово вы найдете поле для ввода. Там
            вы должны написать перевод слова, который вы видите на карточке. После успешного
            перевода поле поменяет свой цвет на зеленый и будет заблокировано. Нажмите TAB чтобы перейти на следующее поле.
            Если перевести не получается, переверните карточку. Нажмите кнопку flip и вы увидете перевод. В начале
            вы можете перевести 8 слов. Чтобы разблокировать следующие 4, вам нужно перевести 4 слова из тех, что открыты.
            Изучайте слова таким образом по 30 минут в день и вы будете знать их всех через месяц`,
            desc2: `Так же вы можете сделать свою собственную группу слов. src/store/library.js
            содержит объект из них. Просто допишите туда любые слова которые вызывают у вас
            проблемы, чтобы изучать их чаще.
            Надеюсь у вас все получится. Удачи =)`,
          },
        },
      },
      en: {
        translation: {
          hiw: {
            lang: 'English',
            title: 'How it works',
            desc1: `Choose bundle of words like A1 adverbs. Under every word you will find input. There you
            should write translate of word you see on the card. After you got succes input will change
            his color to green and will be blocked. Press TAB to choose next input. If you can't
            translate word you can flip card. Press flip button and you will see translate of it. At
            the beginning you are allowed to translate 8 words. To unlock next 4 words you need to
            translate 4 words. Learn words every day for 30 minutes and you will know it all after 1
            mounth`,
            desc2: `Also you can make your own bundle of words. src/store/library.js
            contains object of it. Just add words that makes any problems for you to learn it by hard.
            I hope you will get it all. Good luck =)`,
          },
        },
      },
      uk: {
        translation: {
          hiw: {
            lang: 'Український',
            title: 'Як це працює',
            desc1: `Виберіть групу слів, наприклад A1 adverbs. Під кожним словом ви знайдете поле для введення. там
            ви повинні написати переклад слова, яке ви бачите на картці. Після успішного
            перекладу поле змінить колір на зелений і буде заблоковано. Натисніть TAB, щоб перейти до наступного поля.
            Якщо переказати не виходить, переверніть картку. Натисніть кнопку flip, і ви побачите переклад. На початку
            Ви можете перекласти 8 слів. Щоб розблокувати наступні 4, потрібно перекласти 4 слова з тих, що відкриті.
            Вивчайте слова таким чином по 30 хвилин на день і ви будете знати їх усіх за місяць`,

            desc2: `Також ви можете зробити свою власну групу слів. src/store/library.js
            містить об'єкт із них. Просто допишіть туди будь-які слова, які викликають у вас
            проблеми, щоб вивчати їх частіше.
            Сподіваюся, у вас все вийде. Удачі =)`,
          },
        },
      },
    },
  });

export default i18n;
