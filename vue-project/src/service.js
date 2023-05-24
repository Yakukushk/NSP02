import { createApp, } from 'vue'
import App from '@/components/Service.vue'
import global from '@/components/global'
import VueCookies from 'vue-cookies'
import { createI18n } from 'vue-i18n';


import 'bootstrap/dist/css/bootstrap.min.css'
// import './assets/main.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'






const app = createApp(App);
const i18n = createI18n({
    locale: 'UA', // Set the default locale to Spanish

    messages: {
        ES: {
            // Header
            NameofCompany: 'Empresa',
            OurService: 'Nuestros servicios',
            Contact: 'Contacto',
            Document: 'Documento',
            LegalTranslateH1S: 'Nuestros servicios',

            //
             // Main
            MainListText1: 'Ofrecemos',
            // MainListText1
            list_item_1:'Traducción de documentos al español y a otros idiomas',
            list_item_2:'Cumplimentación de impresos de solicitud',
            list_item_3:'Legalización de documentos en la Embajada de España para la obtención de visados para contratos de trabajo, reagrupación familiar, estudios, etc',
            list_item_4:'Apostillado en el Ministerio de Justicia de Ucrania',
            list_item_5:'Apostillado en el Ministerio de Educación y Ciencia de Ucrania',
            list_item_6:'Apostillado en el Ministerio de Asuntos Exteriores de Ucrania',
            list_item_7:'Obtención de certificados de no antecedentes penales en el Ministerio del Interior de Ucrania',
            list_item_8:'Certificación de certificados médicos en el Ministerio de Sanidad de Ucrania',
            list_item_9:'Preparación y legalización de documentos para todos los países',
            //
            MainListText2: ' Los documentos de Ucrania pueden solicitarse a distancia',
            // MainListText2
            AccordingBody: 'Para los ciudadanos ucranianos que residen permanentemente en el extranjero, no siempre es sencillo y rápido solicitar diversos documentos a su patria.\n' +
                '\n' +
                '                    Y hay situaciones más que suficientes en la vida de un inmigrante que le obligan a presentar un determinado certificado o título.\n' +
                '\n' +
                '                    ¿Qué debe hacerse en este caso, especialmente para las personas que valoran su trabajo o su valioso tiempo personal? ¿Qué deben hacer quienes no pueden desplazarse personalmente y ocuparse del papeleo, esperando durante semanas los resultados, sentados en colas en las instituciones estatales?\n' +
                '\n' +
                '                    ¡Se pueden solicitar documentos a Ucrania a distancia!',
            //
            MainListText3: 'Ofrecemos servicios de obtención de documentos para ciudadanos de Ucrania y de países europeos.',
             //MainListText3
            list_item3_1: 'Solicitar cualquier documento de origen ucraniano (y no sólo),',
            list_item3_2: 'Preparación de documentos para su presentación a instituciones oficiales de países extranjeros',
            list_item3_3: 'Solicitar documentos del Registro Civil del nuevo modelo - certificados de nacimiento, matrimonio, divorcio, extractos sobre el cambio de apellido prematrimonial y materno de una persona soltera, etc.',
            list_item3_4: 'Obtención de duplicados de documentos (certificados de nacimiento / matrimonio / defunción) + APOSTILLADOS',
            list_item3_5: 'Presentación de un certificado de aptitud policial para los ciudadanos de Ucrania + APOSTIL',
            list_item3_6: 'Expedición de certificados de registro de residencia + APOSTOL',
            list_item3_7: 'Declaraciones de estado civil',
            list_item3_8: 'Apostilla y doble apostilla',
            list_item3_9: 'Apostillado de documentos educativos',
            list_item3_10: 'Organización de traducciones por traductores jurados (incluidos los traductores JURADO), certificación de documentos con el sello de una agencia de traducción, certificación notarial',
            list_item3_11: 'Seguro acreditado para viajeros en el extranjero',

            //
            //

            //Footer
            FooterText: 'TRADUCCIONES Y LEGALIZACIONES',
            FooterCardText: 'Encontramos un enfoque personal para cada cliente y garantizamos un resultado de alta calidad que le hará volver a nosotros una y otra vez.',
            Mail: 'POST',
            Phone: 'Números de teléfono',
            AText: '© 2023 Todos los derechos reservados:',
            //
            documentTitle: 'Título del documento',
            description: 'Descripción',
            importantNote: 'Nota importante',
            prices: 'Precios',
            quickService: 'Servicio rápido',
            highQuality: 'Alta calidad',
            greatExperience: 'Gran experiencia',
            saveTimeAndMoney: '¡Ahorre tiempo y dinero!',
            obtainCopiesAndDuplicates: 'Obtenga copias y duplicados de documentos',
            mvsLink: 'Enlace al Ministerio del Interior de Ucrania',
            justiceLink: 'Enlace al Ministerio de Justicia de Ucrania',
            educationLink: 'Enlace al Ministerio de Educación de Ucrania'
        },
        UA: {
            // Header
            NameofCompany: 'Назва Компанії',
            OurService: 'Наші послуги',
            Contact: 'Контакт',
            Document: 'Документи',
            LegalTranslateH1S: 'Наші Послуги',
            MainListText1: 'Ми надаєм',
            //MainListText1
            list_item_1:'Переклади документів на іспанську мову та інші (більше 30 мов)',
            list_item_2:'Заповнення анкет',
            list_item_3:'Легалізація документів у посольстві Іспанії для оформлення віз за робочим контрактом, по возз\'єднанню родини, на навчання та ін.',
            list_item_4:'Проставлення апостиля у Міністерстві юстиції України',
            list_item_5:'Проставлення апостиля у Міністерстві освіти і науки України',
            list_item_6:'Проставлення апостиля у Міністерстві закордонних справ України',
            list_item_7:'Отримання довідок про несудимість у Міністерстві внутрішніх справ України',
            list_item_8:'Засвідчення медичних довідок у Міністерстві охорони здоров\'я України',
            list_item_9:'Оформлення і легалізація документів для всіх країн',

            //
            MainListText2: ' Витребування документів з України можна здійснити віддалено',
            // MainListText2
            AccordingBody: '  Для громадян України, які постійно проживають за кордоном, витребувати різні документи зі своєї батьківщини не завжди видається простою і швидкою справою.\n' +
                '\n' +
                '                    А ситуацій, що зобов\'язують пред\'явити ту чи іншу довідку, або сертифікат, в житті іммігранта більш ніж достатньо.\n' +
                '\n' +
                '                    Як же бути в такому випадку, особливо людям, хто дорожить своєю роботою або безцінним особистим часом? Що робити тим, хто не може особисто виїхати і зайнятися оформленням документів, чекаючи тижнями результатів, сидячи в чергах у державних закладах?\n' +
                '\n' +
                '                    Витребування документів з України можна здійснити віддалено!',
            //
            MainListText3: 'Надаємо послуги з отримання документів для громадян України та країн Європи!',
             //MainListText3
            list_item3_1: 'Витребування будь-яких документів українського походження (і не тільки),',
            list_item3_2: 'Підготовка документів для надання в офіційні установи іноземних держав',
            list_item3_3: 'Витребування рагсівських документів нового зразка - свідоцтв про народження, шлюб, розлучення, витягів про зміну дошлюбного прізвища і матері одиночки і т.д., + АПОСТИЛЬ',
            list_item3_4: 'Отримання дублікатів документів (свідоцтво про народження / про шлюб / смерті) + АПОСТИЛЬ',
            list_item3_5: 'Виготовлення для громадян України довідки про несудимість + АПОСТИЛЬ',
            list_item3_6: 'Виготовлення довідок про реєстрацію місця проживання + АПОСТИЛЬ',
            list_item3_7: 'Заяви про сімейний стан',
            list_item3_8: 'Проставлення апостиля, подвійного апостиля',
            list_item3_9: 'Проставлення АПОСТИЛЯ на документах про освіту',
            list_item3_10: 'Організація перекладів присяжними перекладачами (в тому числі перекладачем JURADO), завірення документів печаткою бюро перекладів, нотаріальне завірення',
            list_item3_11: 'АКРЕДИТОВАНЕ СТРАХУВАННЯ виїзджаючих за кордон',
            //
            //
            // Main

            //
            //Footer
            FooterText: 'ПЕРЕКЛАДИ ТА ЛЕГАЛІЗАЦІЯS',
            FooterCardText: 'Знаходимо особистий підхід до кожного клієнта і гарантуємо якісний результат, який змусить Вас повертатися до нас знову і знову.',
            Mail: 'ПОШТА',
            Phone: 'Номера Телефонів',
            AText: '© 2023 Всі права захищені:',
            //
            documentTitle: 'Документи',
            description: '',
            importantNote: '',
            prices: '',
            quickService: '',
            highQuality: '',
            greatExperience: '',
            saveTimeAndMoney: '',
            obtainCopiesAndDuplicates: '',
            mvsLink: '',
            justiceLink: '',
            educationLink: ''
        }
    }
});
app.use(VueCookies)


app.use(global);
app.use(i18n);
app.mount('#app')
