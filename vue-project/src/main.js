import { createApp } from 'vue';
import App from './App.vue';
import router from '../router';
import global from './components/global';
import {createI18n} from "vue-i18n";


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
            LegalTranslateH1S: 'Nuestros servicios',
            Tabs1: 'Rellenar el formulario',
            Tabs2: 'Mapa',
            Tabs3: 'Contacto',

            //
            FormTitle: 'Rellenar el formulario',
            Name: 'Nombre',
            Surname: 'Apellidos',
            Phones: 'Su número de teléfono',
            Email: 'Email',
            Message: 'Mensaje',
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
            NameL: 'Título.',
            Describe: 'Descripción.',
            Info: 'Información.',
            //Main
            DocTitle1: 'Extracto',
            DocDescribe: 'EXTRACTO del sistema de información y análisis "Contabilización de la información sobre ' +
                'el sometimiento de una persona a responsabilidad penal y antecedentes penales"',
            DocInfo: 'Hoy en día, se expide en lugar de un "certificado de no antecedentes penales" y es un documento oficial que confirma que una persona no tiene antecedentes penales. También confirma ' +
                'que la persona no figura en la lista de personas buscadas. En Ucrania, el "extracto" sobre la ausencia de antecedentes penales lo expide el Departamento de Información y Apoyo Analítico del Ministerio del Interior".',
            DocTitle2: 'Certificado de no antecedentes penales',
            DocDescribe2: 'El certificado de ausencia de antecedentes penales es un documento que certifica que una persona no ha sido objeto de responsabilidad penal y no es buscada en Ucrania.',
            DocInfo2: 'El certificado se expide en un formulario especial, que indica su serie y número. El documento se imprime en papel normal A5 y tiene dibujos y elementos de seguridad especiales que hacen imposible falsificarlo.',
            DocTitle3: 'Certificado de',
            DocDescribeC1:'Certificado de nacimiento - un certificado de registro estatal del acto del estado civil - el hecho del nacimiento del niño',
            DocDescribeC2:'Certificado de matrimonio es un documento oficial que confirma que dos personas están casadas',
            DocDescribeC3:'Certificado de divorcio es un documento oficial expedido por la oficina del registro civil para confirmar el hecho del divorcio entre los cónyuges.',
            DocDescribeC4:'El certificado de defunción es un documento expedido como confirmación del hecho del fallecimiento de un ciudadano durante el registro estatal en la oficina del registro civil.',
            DocTitle4: 'Documentos adicionales:',
            DocDescribeD1: 'Extracto del registro estatal sobre el cambio de apellido',
            DocDescribeD2: 'Extracto del registro estatal sobre la presencia/ausencia de bienes inmuebles',
            DocDescribeD3: 'Copias de resoluciones judiciales en Ucrania',
            DocDescribeD4: 'Extracto del registro estatal sobre el cambio de apellido',
            DocDescribeD5: 'Enviamos consultas a las empresas para confirmar la experiencia laboral',
            //
            //Finish
            FooterText: 'TRADUCCIONES Y LEGALIZACIONES',
            FooterCardText: 'Encontramos un enfoque personal para cada cliente y garantizamos un resultado de alta calidad que le hará volver a nosotros una y otra vez.',
            Mail: 'POST',
            Phone: 'Números de teléfono',
            AText: '© 2023 Todos los derechos reservados:',
            //
            documentTitle: 'Título del documento',

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
            LegalTranslateH1S: 'Наші Послуги',
            Tabs1: 'Форма заповнення',
            Tabs2: 'Мапа',
            Tabs3: 'Контакт',
            FormTitle: 'Контакт з нами',
            Name: 'Ім\'я',
            Surname: 'Прізвище',
            Phones: 'Ваш телефон',
            Email: 'Пошта',
            Message: 'Повідомлення',

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
            NameL: 'Назва ',
            Describe: 'Опис ',
            Info: 'Інформація ',
            // Main
            DocTitle1: 'Витяг',
            DocDescribe: 'ВИТЯГ з інформаційно-аналітичної системи' +
                ' “Облік інформації про притягнення особи до кримінальної відповідальності та наявності судимостей”',
            DocInfo: 'На сьогоднішній день видається замість “довідки про несудимість” і є офіційним документом, який підтверджує відсутності судимості у фізичної особи. А також факт того, що фізична особа не перебуває у розшуку. В Україні “витяг” про відсутність судимості видає Управління інформаційно-аналітичного забезпечення МВС.”',
            DocTitle2: 'Довідка про відсутність судимості',
            DocDescribe2: 'Довідка про відсутність судимості – це документ, який свідчить про те, що особа не залучалося до кримінальної відповідальності і не перебуває в розшуку на території України.',
            DocInfo2: '"Довідка оформляється на спеціальному бланку, де вказується його серія та номер. Документ друкується на звичайному папері формату А5 і має спеціальні форми захисту і малюнки, які унеможливлюють підробку документа."',
            DocTitle3: 'Свідоцтво про',
            DocDescribeC1:'Свідоцтво про народження – свідоцтво про державну реєстрацію акту цивільного стану – факту народження дитини',
            DocDescribeC2:'Свідоцтво про укладення шлюбу – офіційний документ, який підтверджує, що двоє людей перебувають у шлюбі.',
            DocDescribeC3:'Свідоцтво про розлучення – офіційний документ, що видається органами реєстрації актів цивільного стану (РАЦС) на підтвердження факту розірвання шлюбу між подружжям.',
            DocDescribeC4:'Свідоцтво про смерть – це документ, що видається в якості підтвердження факту смерті громадянина при державній реєстрації в органах актів цивільного стану.',
            DocTitle4: 'Додатковi документи:',
            DocDescribeD1: 'Витяг з державного реєстру про зміну прізвища',
            DocDescribeD2: 'Виписка з державного реєстру про наявність / відсутність нерухомості',
            DocDescribeD3: 'Копії рішень судів України',
            DocDescribeD4: 'Витяг з державного реєстру про зміну прізвища',
            DocDescribeD5: 'Подаємо запити на підприємства для підтвердження стажу',


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
            //Footer
            FooterText: 'ПЕРЕКЛАДИ ТА ЛЕГАЛІЗАЦІЯS',
            FooterCardText: 'Знаходимо особистий підхід до кожного клієнта і гарантуємо якісний результат, який змусить Вас повертатися до нас знову і знову.',
            Mail: 'ПОШТА',
            Phone: 'Номера Телефонів',
            AText: '© 2023 Всі права захищені:',
            //

        }
    }
});
app.use(router);
app.use(global);
app.use(i18n);

app.mount('#app');
