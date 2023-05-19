import { createApp, } from 'vue'
import App from './App.vue'
import global from './components/global/index'
import VueCookies from 'vue-cookies'
import { createI18n } from 'vue-i18n';



import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.css'
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
            LegalTranslateH1: 'TRADUCCIONES Y LEGALIZACIONES',
            LegalTranslateH2: 'LEGALIZACIÓN DE DOCUMENTOS PARA EL CONSULADO DE ESPAÑA Y LOS PAÍSES SCHENGEN',
            LegalTranslateH4: 'Documentos, apostilla, traducción para ciudadanos de Ucrania',
            //

            //Main
            TextFromImage: 'Certificado de no antecedentes penales (expedido en lugar de un certificado)',
            MainDocH1: 'OFICINA DE LEGALIZACIÓN DE DOCUMENTOS',
            MainDocP: 'Prestamos servicios de obtención de copias y duplicados de documentos (certificado de no antecedentes penales, certificado de nacimiento, certificado de matrimonio, certificado de divorcio, certificado de defunción, certificado de cambio de apellido, resolución judicial, etc.) del nuevo estándar estatal de Ucrania de todas las regiones, incluidas las regiones de Donetsk y Luhansk, así como la República de Crimea.',
            MainDocAttention: 'Importante: sólo es posible obtener copias y duplicados de los documentos existentes con las firmas correspondientes,\n' +
                '                        apostillas y sellos de instituciones o estructuras estatales de Ucrania, en particular:',
            MainLink1: 'Ministerio del Interior de Ucrania' ,
            MainLink2: 'Ministerio de Justicia de Ucrania',
            MainLink3: 'Ministerio de Educación de Ucrania',
            MainCardTitle1: 'PRECIOS FAVORABLES',
            MainCardText1: 'Puede consultar los precios de nuestros servicios en la página web al elegir el servicio que necesita.\n' +
                'Le garantizamos que el precio y la calidad son adecuados. No tenemos cargos adicionales ni ocultos.',
            MainCardTitle2: 'SERVICIO RÁPIDO',
            MainCardText2: 'Al encargarnos servicios, puede estar seguro de que recibirá sus documentos lo antes posible.\n' +
                '                                Siempre garantizamos la rapidez y la calidad de nuestros servicios.\n' +
                '                                Si necesita un certificado de antecedentes penales o un certificado de matrimonio\n' +
                '                                que necesite con urgencia, cumplimentaremos este pedido en un plazo de 15 días laborables.',
            MainCardTitle3: 'ALTA CALIDAD DE LOS SERVICIOS',
            MainCardText3: 'Puede estar seguro de que no paga de más por los servicios prestados y obtiene sólo lo que necesita. Prestamos una amplia gama de servicios: desde la obtención de una copia de un certificado del Registro Civil y la apostilla de certificados de no antecedentes penales hasta la apostilla y traducción de diversos documentos: diplomas, suplementos de diplomas, documentos laborales y de otro tipo.',
            MainFinishText : 'GRACIAS A NUESTRA AMPLIA EXPERIENCIA EN TRÁMITES, LE AHORRAREMOS TIEMPO Y DINERO.',
            //
            //Finish
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
            LegalTranslateH1: 'ПЕРЕКЛАДИ ТА ЛЕГАЛІЗАЦІЯ',
            LegalTranslateH2: 'ЛЕГАЛІЗАЦІЯ ДОКУМЕНТІВ ДЛЯ КОНСУЛЬСТВА ІСПАНІЇ ТА КРАЇН ШЕНГЕНСЬКОЇ ЗОНИ',
            LegalTranslateH4: 'Документи, апостиль, переклад для громадян України',
            //
            // Main
             TextFromImage: 'ВИТЯГ про несудимість (видається замість довідки)',
             MainDocH1: 'БЮРО ЛЕГАЛІЗАЦІЇ ДОКУМЕНТІВ',
             MainDocP: 'Ми надаємо послуги з отримання копій та дублікатів документів ' +
                 '(довідка про відсутність судимості, свідоцтво про народження, свідоцтво про укладення шлюбу, ' +
                 'свідоцтво про розірвання шлюбу (розлучення), свідоцтво про смерть, свідоцтво про зміну прізвища, рішення суду та інше.)' +
                 ' нового державного зразка України з усіх областей, ' +
                 'включаючи Донецьку та Луганську області, а також Республіку Крим.',
            MainDocAttention: 'Важливо: можливе отримання копій та дублікатів тільки існуючих документів з відповідними підписами,\n' +
                '                        апостилями і гербовими печатками державних установ або структур України, зокрема:',
            MainLink1: 'МВС України' ,
            MainLink2: 'Міністерство юстиції України',
            MainLink3: 'Міністерство освіти України',
            MainCardTitle1: 'ВИГІДНІ ЦІНИ',
            MainCardText1: 'Ціни на наші послуги ви можете знайти на сторінках сайту при виборі потрібної Вам послуги.\n' +
                'Ми гарантуємо відповідність ціни і якості. В нас немає жодних додаткових або прихованих платежів.',
            MainCardTitle2: 'ОПЕРАТИВНИЙ СЕРВІС',
            MainCardText2: ' При замовленні послуг у нас, Ви можете бути впевнені, що отримаєте документи в найкоротші терміни.\n' +
                '                                Ми завжди гарантуємо швидкість і якість послуг, що надаються.\n' +
                '                                Якщо довідка про несудимість або свідоцтво про укладення шлюбу необхідна\n' +
                '                                Вам терміново, ми виконаємо це замовлення терміном до 15 робочих днів..',
            MainCardTitle3: 'ВИСОКА ЯКІСТЬ ПОСЛУГ',
            MainCardText3: 'Ви можете бути впевнені, що не переплачуєте за надані послуги і отримуєте тільки те, що Вам необхідно. Ми надаємо широкий спектр послуг: від отримання копії свідоцтва РАГС та апостiлювання довiдок про вiдсутнiсть судимостi до проставлення апостиля та перекладу різноманітних документів: диплом, додаток до диплому, трудова, та iншi документи.',
            MainFinishText : 'МАЮЧИ ВЕЛИКИЙ ДОСВІД З ОФОРМЛЕННЯ ДОКУМЕНТІВ, МИ ЗЕКОНОМИМО ВАШ ЧАС І ГРОШІ!',
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


