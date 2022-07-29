import ExternalLink from 'components/common/ExternalLink'
import { ContentType } from './content-type'
import ContentTypography from './ContentTypography'

export const CAMPAIGN_QUESTIONS: ContentType[] = [
  {
    visible: true,
    header: 'Как мога да стартирам кампания?',
    content: (
      <ContentTypography>
        <ExternalLink variant="subtitle1" href={'https://podkrepi.bg/terms-of-service'}>
          {'Тук '}
        </ExternalLink>{' '}
        можете да се запознаете с Общите условия на Подкрепи.бг, а страницата за създаване на
        кампания ще намерите{' '}
        <ExternalLink variant="subtitle1" href={'/campaigns/create'}>
          {' тук. '}
        </ExternalLink>
        При още въпроси, можете да ни изпратите email на този адрес: info@podkrepi.bg
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Кой може да кандидатства в Подкрепи.бг за кампания? Какви са критериите?',
    content: (
      <ContentTypography>
        <p>
          За кампания в Подкрепи.бг може да кандидатства всяко пълнолетно физическо лице,
          пребиваващо за постоянно на територията на Република България, с чисто съдебно и данъчно
          минало, както и български неправителствени организации.{' '}
        </p>
        <p>
          Важно е да уточним, че Организаторът може да бъде лице различно от Бенефициента. Например
          - родител може да бъде Организаторът, а Бенефициентът да е детето му, внукът му, брат му,
          друг близък роднина и т.н. Възможно е и Организаторът да събира средства за пълнолетен
          Бенефициент, който е възпрепятстван сам да организира кампания поради напреднала възраст,
          тежко здравословно състояние и др.
        </p>
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Какъв тип кампании могат да се правят през Подкрепи.бг?',
    content: (
      <ContentTypography>
        Категориите кампании са следните: Рехабилитация, Лечение, Животоспасяващи кампании,
        Бедствия, Хора в нужда, Възрастни хора, Образование, Култура, Спорт, Общество, Човешки
        права, Природа, Животни, Друго (което можете да определите в свободен текст). Вече
        съществуващи кампании можете да видите{' '}
        <ExternalLink variant="subtitle1" href={'https://podkrepi.bg/campaigns'}>
          {' тук. '}
        </ExternalLink>
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Какви документи се изискват за старт на кампания в Подкрепи.бг?',
    content: (
      <ContentTypography>
        <p>
          Сдружение Подкрепи.бг си запазва правото да откаже организиране на кампания през
          платформата, в случай на съмнение в надеждността на документацията и Организатора на
          кампанията.
        </p>
        <p>
          Списък с първоначално необходимите документи можете да видите
          <ExternalLink
            variant="subtitle1"
            href={'https://docs.podkrepi.bg/general/otdeli/legal-team/dokumenti-za-nova-kampaniya'}>
            {' тук. '}
          </ExternalLink>
        </p>
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Трябва ли да имам дарителска сметка, за да мога да пусна кампания?',
    content: (
      <ContentTypography>
        Не е задължително. Екипът ни ще Ви консултира след одобрението и заедно ще решите какъв тип
        сметка ще бъде най-подходящо да откриете. Но при всички случаи ще бъде необходимо да има
        открита банкова сметка на Ваше име или на името на неправителствената организация, която
        представлявате, ако кандидатствате като ЮЛНЦ (юридическо лице с нестопанска цел).
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Какъв процент се удържа от даренията?',
    content: (
      <ContentTypography>
        Подкрепи.бг НЕ удържа комисиона или такси от събраните средства за кампаниите. Малка част от
        сумата обаче се разходва за такси на външни услуги. Такива са: PayPal, ePay, Stripe, Банков
        превод - Това са единствено такси на съответните платформи. Те са официално публикувани на
        сайтовете на съответните доставчици на услуги. Единствено тези такси отнемат от дарените
        суми. При някои кампании се налагат разходи, свързани с Организатора, когато той е
        юридическо лице с нестопанска цел (НПО). При тези случаи, това обстоятелство ще бъде ИЗРИЧНО
        ОПИСАНО в основната страница на кампанията в платформата на Подкрепи.бг.
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Какво означава “Организатор”?',
    content: (
      <ContentTypography>
        <p>
          Организатор е пълнолетно физическо или юридическо лице (неправителствена организация),
          което организира кампания в своя полза или в полза на друг/и бенефициент/и. Той отговаря
          за осигуряването на документацията по кампанията и комуникира тясно с екипа на Подкрепи.бг
          за преминаването през процеса на одобрение. По време на целия период на кампанията, той
          също отговаря и за прозрачното управление и усвояване на дарените средства по кампанията.
        </p>
        <p>
          Примери:
          <br />
          - Организатор е родителят, Бенефициент - детето
          <br />- Организатор е неправителствена организация, Бенефициенти - група от деца, които
          имат нужда от нова материална база за обучение
        </p>
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Какво означава “Бенефициент”?',
    content: (
      <ContentTypography>
        Бенефициент е човекът, който ще получи крайната помощ от кампанията (средства/ медицинска
        манипулация/ предметни дарения и т.н.).
      </ContentTypography>
    ),
  },
  {
    header: 'Колко често се превеждат получените дарения към Организацията бенефициент?',
    content: (
      <ContentTypography>
        Това зависи от специфичните обстоятелства около случая, целта на кампанията, естеството на
        нейната спешност и др. Подкрепи.бг е създадено с цел действително да “подкрепя”, затова тези
        обстоятелства се договарят лично с всеки Организатор (физическо лице или неправителствена
        организация), предвид съответните негови нужди. Най-честа периодичност на изплащане
        обикновено се планира за придружаващи лечения и рехабилитация. Едномесечни траншове
        най-често се прилагат при целогодишни кампании, в подкрепа на дейността на дадена
        неправителствена организация. Животоспасяващи манипулации, за които се събират по-високи
        суми обикновено се събират накуп и се изплащат на 1 или 2 транша. Най-често такива суми се
        съхраняват в escrow банкова сметка и сумата се изпраща от нас не към Бенефициента или
        Организатора, а директно към медицинската институция, която следва да извърши
        животоспасяващата манипулация. Разбира се, екипът на Подкрепи.бг изпитва отговорност и към
        средствата на дарителите, така че в тези договорености за изплащане се предвижда и преценка
        за превенция от финансови злоупотреби, доколкото това би могло да бъде предвидено и
        избегнато.
      </ContentTypography>
    ),
  },
  {
    header: `Трябва ли Организацията бенефициент да се отчита към Платформата на дневна/ месечна база? 
    Как става отчитането на изразходването на средствата?`,
    content: (
      <ContentTypography>
        Всяка Организация бенефициент e задължена да пуска публични отчети след всеки по-значим
        прогрес, свързан с кампанията, но не по-рядко от 1 път месечно. Отчетите включват както
        баланс от дарителската им сметка и изплатени фактури, така и снимков/ видео материал,
        удостоверяващ прогреса по дадената кампания. Това се случва чрез стандартизиран от нас
        формуляр, който можете да видите{' '}
        <ExternalLink variant="subtitle1" href={undefined}>
          {' тук. '}
        </ExternalLink>
        Дарителите по кампанията, които са регистрирани в платформата и са пожелали, получават
        известия по email за появата на всеки такъв нов отчет от страна на Организатора.
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Мога ли да имам повече от една кампания?',
    content: (
      <ContentTypography>
        Можете, да. Единственото условие е да имате една кампания, която е завършила цял успешен
        цикъл и сме се уверили в коректна отчетност на получените дарения, както и че са използвани
        по предварително заявените от Вас цели. <br />
        След като това е факт, няма да има никакви ограничения за броя кампании, с които да
        кандидатствате за одобрение в Подкрепи.бг. Бихме напомнили само, че при всяка от кампаниите
        е необходимо да отделяте време за нейното разгласяване, както и за нейната регулярна
        публична отчетност пред дарителите. Успех! Ще се радваме да Ви подкрепим колкото пъти е
        нужно!
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Подкрепи.бг прави ли проверки на кампаниите на място?',
    content: (
      <ContentTypography>
        Да, всяка кампания може да бъде посетена от представител на Подкрепи.бг. Всеки месец наши
        представители посещават част от организаторите на кампании на място и попълват{' '}
        <ExternalLink variant="subtitle1" href={undefined}>
          {' тази бланка'}
        </ExternalLink>
        , даваща информация за надеждността на Организатора/ Бенефициента, било то отделен човек или
        дадена организация. Това може да се осъществи чрез онлайн видео среща или на място. Може да
        се случи по наша преценка или при сигнал за съмнение за злоупотреба. Не по-късно от 1
        календарна седмица преди въпросното посещение, Подкрепи.бг уведомява Организатора на
        кампанията за предстоящата среща.
      </ContentTypography>
    ),
  },
  {
    header:
      'Получих email, в който се казва, че кампанията ми трябва да бъде одобрена - какво означава това?',
    content: (
      <ContentTypography>
        За Подкрепи.бг е много важно да осигурим максимална прозрачност, коректност и сигурност за
        всички потребители на платформата - и за бенефициентите, и за дарителите. Не можем да
        гарантираме 100 % сигурност, но искаме да знаем, че сме направили всичко, което зависи от
        нас, за да постигнем максимална сигурност, както, че даренията ще достигат непокътнати до
        хората, които имат нужда от тях, така и че дарителите ще посвещават своите средства на хора
        и организации с реални каузи. За тази цел всяка кампания минава през редица проверки за
        достоверност и надеждност от екипа на Подкрепи.бг и съответните експерти. Нас ни има, за да
        подкрепяме, затова Ви уверяваме, че ще получите нашето пълно съдействие за реализирането на
        кампанията Ви веднага щом се убедим, че тя е истинна и достоверна. Екипът ни скоро ще се
        свърже с Вас, за да Ви съдейства в етапите на одобрение и , надяваме се, подготовка за
        стартиране на кампанията Ви. Можете да видите основните положения в етапите на одобрение и
        подготовка за стартиране на кампания{' '}
        <ExternalLink variant="subtitle1" href={undefined}>
          {' тук.'}
        </ExternalLink>
      </ContentTypography>
    ),
  },
  {
    header: 'В какъв етап на одобрение се намира кампанията ми? С какъв статут е към момента?',
    content: (
      <ContentTypography>
        Пишете ни на: info@podkrepi.bg и ще Ви информираме при първа възможност.
      </ContentTypography>
    ),
  },
  {
    header:
      'Нашата неправителствена организация е наскоро открита и можем да представим само едногодишен отчет. Можем ли все пак да кандидатстваме за създаване на кампания?',
    content: (
      <ContentTypography>
        Можете. Условието е да ни изпратите отчет за изминалата година, както и планиран бюджет за
        предстоящата. Това не гарантира одобрение на кампанията Ви, тъй като не е единствен критерий
        за одобрение, но все пак дава възможност за допускане до кандидатстване. Надяваме се
        разбирате нашите грижа и отговорност към средствата на дарителите.{' '}
      </ContentTypography>
    ),
  },
  {
    header:
      'Опитах да попълня формата за кандидатстване, но не можах да прикача единия файл - показа ми съобщение, че документът е твърде голям. Какво да правя?',
    content: (
      <ContentTypography>
        Съветът ни е да компресирате файла (по този начин ще намалите размера му). Има много онлайн
        инструменти за тази цел, един от примерите е Small PDF. Ако не говорите английски език, Ви
        насърчаваме да помолите свой познат или близък да Ви помогне.
      </ContentTypography>
    ),
  },
  {
    header: 'Как да направя кампанията си по най-добрия начин?',
    content: (
      <ContentTypography>
        Ето някои основни насоки: Направете заглавието на кампанията ясно, стегнато и свързано пряко
        с каузата Ви Посочете как точно ще използвате средствата от кампанията Бъдете конкретни в
        описанието на кампанията и казуса или проблема, който искате да разрешите Убедете се, че
        описанието е лесно за разбиране от човек, който ще чуе за това за пръв път Изберете
        постижима сума като крайна цел. По-подробни насоки, стъпка по стъпка, можете да намерите{' '}
        <ExternalLink variant="subtitle1" href={undefined}>
          {' тук.'}
        </ExternalLink>
      </ContentTypography>
    ),
  },
  {
    header: 'Как мога да прекратя кампанията си?',
    content: (
      <ContentTypography>
        Свържете се с координатора на кампанията си или ни пишете на gshtereva@podkrepi.bg, за да Ви
        съдействаме.
      </ContentTypography>
    ),
  },
  {
    header: 'Защо кампанията ми е със статут “Успешно завършена”?',
    content: (
      <ContentTypography>
        Това означава, че финансовата цел на кампанията е постигната и средствата са събрани.
        Проверете email-а си за известия от екипа ни. В случай че не намирате email от нас,
        най-вероятно той е попаднал в спам кутията на електронната Ви поща. Свържете се с нас на
        gshtereva@podkrepi.bg, за да Ви съдействаме.
      </ContentTypography>
    ),
  },
  {
    header: 'Защо кампанията ми е със статут “Прекратена”?',
    content: (
      <ContentTypography>
        Причините може да са 2:
        <br />
        1) Организаторът на кампанията, на която Вие сте бенефициент е пожелал нейното спиране.
        Свържете се с него или ни пишете на gshtereva@podkrepi.bg
        <br />
        2) Не сте изпълнили ангажимента си за отчетност на кампанията в съответния срок. Преди
        спирането на кампанията на такова основание, сме изпратили известие до Вас на посочена
        електронна поща.
        <br />В случай че не намирате email от нас, най-вероятно той е попаднал в спам кутията на
        електронната Ви поща. Свържете се с нас на gshtereva@podkrepi.bg, за да Ви съдействаме.
      </ContentTypography>
    ),
  },
  {
    header: 'Ще бъде ли изцяло финансирана кампанията ми?',
    content: (
      <ContentTypography>
        За съжаление, Подкрепи.бг не може да гарантира достигане на цялата желана сума на всяка
        кампания, защото това зависи от волята на дарителите, както и от Вашето участие в
        разгласяването ѝ. Подкрепи.бг има маркетингов екип, който работи усилено по привличането на
        индивидуални и корпоративни дарители към платформата и конкретно към всяка кампания чрез
        ясно разписана маркетингова стратегия (можете да я видите тук (линк 1)), но последната воля
        за избор на кампания, на която да дарят средства си е на дарителите. Ако желаната сума не е
        достигната в посочения от Вас желан срок, можете:
        <br />
        1) Да се свържете с екипа ни на gshtereva@podkrepi.bg, за да удължим срока за набиране на
        средства
        <br />
        2) Да прекратите кампанията и да получите събраните до момента дарения по нея
      </ContentTypography>
    ),
  },
  {
    header: 'Какви са изискванията за рипортите/ отчетите?',
    content: (
      <ContentTypography>
        Подкрепи.бг изисква от организаторите на кампании да публикуват ежемесечни отчети, като
        условие кампанията да се задържи на сайта. Кампаниите на организаторите, които не изпълнят
        това свое задължение към Подкрепи.бг и дарителите, ще бъдат временно или окончателно
        премахнати от сайта (при набавяне на съответния отчет, кампанията ще бъде възстановена на
        сайта и отново ще може да набира средства). Целта на тези отчети е да осигурява прозрачност
        за дарителите относно разходването на средствата. Освен тази роля на отчетност, отчетите
        привличат и потребители към страницата на кампанията, т.е. - нейни потенциални дарители,
        което увеличава шансовете за набиране на повече средства за по-кратко време. Съдържанието на
        отчетите се попълва по формуляр, който можете да видите{' '}
        <ExternalLink variant="subtitle1" href={undefined}>
          {' тук.'}
        </ExternalLink>
      </ContentTypography>
    ),
  },
  {
    header: 'Какви са крайните срокове за публикуване на рипорт/ отчет?',
    content: (
      <ContentTypography>
        За безсрочните кампании Отчетите се публикуват в края на календарния месец - между 25-то и
        30-то число. Ако сме стартирали кампанията Ви след 15-то число този месец, първият Ви рипорт
        трябва да бъде публикуван в края на следващия месец. За кампаниите, които са дългосрочни и
        получават траншове на дарения всеки месец Отчетите се публикуват в края на календарния месец
        - между 25-то и 30-то число. Ако сме стартирали кампанията Ви след 15-то число този месец,
        първият Ви рипорт трябва да бъде публикуван в края на следващия месец. Публикува се и
        финален отчет до 2 месеца след края на кампанията. Той обобщава най-важните моменти от
        кампанията и показва целия отчет на разходване на средствата. За кампаниите, които събират
        дадена сума пари, която се очаква да се изплати накрая Публикува се подробен отчет за
        разходването на средствата. 3 месеца след края на кампанията се публикува информация за
        ефекта от проведената кампания и промените, до които тя е довела.
      </ContentTypography>
    ),
  },
  {
    header: 'Кой вижда рипортите/ отчетите ми?',
    content: (
      <ContentTypography>
        Отчетите се публикуват на страницата на кампанията в Подкрепи.бг и се изпращат по email на
        всички дарители по кампанията, които са дали съгласие за това.
      </ContentTypography>
    ),
  },
  {
    header: 'Как да напиша добър рипорт/ отчет?',
    content: (
      <ContentTypography>
        Добре написаните рипорти изграждат връзка на доверие между Вас и дарителите. Ето някои неща,
        които да вземете предвид при писането им:
        <br />
        1) Убедете се, че информацията, която давате, е свързана пряко и конкретно с кампанията Ви и
        нейния напредък. Важно е да не звучи общо, а да описва конкретни събития.
        <br />
        2) Съобразете текста с конкретната аудитория - потенциални дарители, които са отворили
        страницата и дарители, които вече са ви подкрепили с финанси, а вероятно и със споделяне на
        кампанията Ви сред техните кръгове от контакти.
        <br />
        3) Дарителите се ангажират най-силно с каузи, при които могат да се запознаят с лицата и
        историите на бенефициентите. (преди да публикувате такива снимки, уверете се, че разполагате
        с подписано съгласие между Подкрепи.бг и бенефициентите, които позволяват публикуването на
        техни снимки за целите на кампанията) В позицията си на организатор на кампанията можете да
        преразкажете историите на бенефициентите, но още по-добра идея е да ги помолите те самите да
        Ви изпратят по няколко думи от първо лице, които после да цитирате в рипорта си. Заедно с
        това споделете и личната си емоционална ангажираност с каузата. С позволение от дарители,
        които са се свързали лично с Вас можете да цитирате и думи за кампанията Ви, споделени от
        тях. Според опита на други дарителски платформи, рипорти, които съдържат споделяния от
        различните страни по дадена кампания (организатор, бенефициент/и, дарител/и) събират до 3
        пъти повече средства, т.е. - усилието буквално “си струва”.
        <br />
        4) Обем на съдържанието - един рипорт съдържа средно около 400 думи.
      </ContentTypography>
    ),
  },
  {
    header: 'Какво означава това, че рипортът/ отчетът ми е “отхвърлен”?',
    content: (
      <ContentTypography>
        Това означава, че има файлове, които не са били успешно прикачени, нечетими са, има
        неработещ линк, който сте посочили или има нужда от друга корекция. Ако все още не сте
        получили известие от екипа ни на електронната си поща, пишете ни на gshtereva@podkrepi.bg
      </ContentTypography>
    ),
  },
]
