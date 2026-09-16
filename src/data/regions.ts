import { RegionInfo } from '../types';

export const REGIONS: RegionInfo[] = [
  {
    id: 'kakheti',
    name: {
      ru: 'Кахетия (Алазанская долина)',
      ka: 'კახეთი (ალაზნის ველი)',
      en: 'Kakheti (Alazani Valley)'
    },
    georgianTitle: 'კახეთი',
    elevation: '350 – 750 м',
    sunDays: 280,
    climate: {
      ru: 'Теплый умеренно-сухой климат с обилием солнечных дней и мягкими бризами Кавказа',
      ka: 'თბილი, ზომიერად მშრალი ჰავა მზის უხვი ენერგიითა და კავკასიონის ნიავით',
      en: 'Warm, sunny climate with over 280 sunshine days and dry mountain winds'
    },
    keyHarvests: [
      {
        ru: 'Хурма Каралоки (Королек)',
        ka: 'ხურმა ყარალოკი',
        en: 'Karaloki Persimmon'
      },
      {
        ru: 'Белый и черный инжир',
        ka: 'თეთრი და შავი ლეღვი',
        en: 'White & Black Figs'
      },
      {
        ru: 'Абрикос и Дамасская роза',
        ka: 'გარგარი და ვარდის ფურცლები',
        en: 'Apricot & Damask Rose'
      }
    ],
    description: {
      ru: 'Главная житница фруктового богатства Грузии. Именно здесь в предгорьях Кавказского хребта хурма достигает максимальной сладости. Мы сушим ее старинным методом — подвешивая гирляндами на свежем воздухе под навесами.',
      ka: 'საქართველოს ხილის მთავარი სამშობლო. აქ ხურმა და ლეღვი აღწევს მაქსიმალურ სიტკბოს. ჩირი მზადდება ძველი ტრადიციით — მზესა და სუფთა ჰაერზე.',
      en: 'The heart of Georgian fruit heritage. Nestled under the Greater Caucasus mountains, where Karaloki persimmon and sweet figs are string-hung to dry in pristine alpine air.'
    }
  },
  {
    id: 'racha',
    name: {
      ru: 'Рача-Лечхуми',
      ka: 'რაჭა-ლეჩხუმი',
      en: 'Racha-Lechkhumi'
    },
    georgianTitle: 'რაჭა',
    elevation: '900 – 1900 м',
    sunDays: 220,
    climate: {
      ru: 'Горный хрустальный воздух, альпийские луга и нетронутые реликтовые дубово-буковые леса',
      ka: 'მთის ბროლივით სუფთა ჰაერი, ალპური მდელოები და ხელუხლებელი ტყეები',
      en: 'Crystal alpine atmosphere, pure glacial waters and untouched ancient forests'
    },
    keyHarvests: [
      {
        ru: 'Дикорастущая айва и лесные яблоки',
        ka: 'ტყის კომში და ველური ვაშლი',
        en: 'Wild Mountain Quince & Forest Apples'
      },
      {
        ru: 'Горный чабрец (кондари)',
        ka: 'მთის კონდარი',
        en: 'Wild Mountain Savory (Kondari)'
      },
      {
        ru: 'Красный высокогорный шиповник',
        ka: 'ალპური ასკილი',
        en: 'Alpine Wild Rosehip'
      }
    ],
    description: {
      ru: 'Высокогорная жемчужина Грузии, где мы собираем дикоросы для наших горных фруктовых чаев. Здесь нет промышленных производств — только первозданная природа и ледниковые реки.',
      ka: 'საქართველოს მაღალმთიანი მარგალიტი. აქ ვაგროვებთ ველურ მცენარეებსა და კენკრას ჩვენი საფირმო ჩაისთვის. სრული ეკოლოგიური სისუფთავე.',
      en: 'Pristine highland territory surrounded by glaciers. Where we wild-harvest alpine herbs, tart wild quinces, and vitamin-packed mountain rosehip for teas.'
    }
  },
  {
    id: 'kartli',
    name: {
      ru: 'Шида Картли',
      ka: 'შიდა ქართლი',
      en: 'Shida Kartli'
    },
    georgianTitle: 'ქართლი',
    elevation: '600 – 950 м',
    sunDays: 260,
    climate: {
      ru: 'Континентальный горно-долинный климат с холодными ночами и яркими теплыми днями',
      ka: 'კონტინენტური ხეობის კლიმატი, გრილი ღამეებითა და მზიანი დღეებით',
      en: 'Valley climate with crisp cool nights and intense sun exposure'
    },
    keyHarvests: [
      {
        ru: 'Знаменитые яблоки Гори',
        ka: 'გორის ვაშლი',
        en: 'Gori Mountain Apples'
      },
      {
        ru: 'Слива Венгерка и Ткемали',
        ka: 'უნგრული ქლიავი და ტყემალი',
        en: 'Hungarian Plums & Wild Tkemali'
      },
      {
        ru: 'Лесная груша Панти',
        ka: 'პანტა (ტყის მსხალი)',
        en: 'Caucasian Wild Pear (Panta)'
      }
    ],
    description: {
      ru: 'Центральный регион с многовековой культурой плодоводства. Контраст дневных и ночных температур концентрирует в яблоках и сливах насыщенные органические кислоты и тонкий десертный аромат.',
      ka: 'მეხილეობის ისტორიული კერა. დღისა და ღამის ტემპერატურის კონტრასტი ხილში უნიკალურ ბუნებრივ გემოს აყალიბებს.',
      en: 'Historic fruit capital of Georgia. The sharp diurnal temperature swings yield fruits with rich natural pectin, minerals, and deep, vibrant aromatics.'
    }
  },
  {
    id: 'svaneti',
    name: {
      ru: 'Верхняя Сванетия',
      ka: 'ზემო სვანეთი',
      en: 'Upper Svaneti'
    },
    georgianTitle: 'სვანეთი',
    elevation: '1700 – 2400 м',
    sunDays: 200,
    climate: {
      ru: 'Суровый высокогорный альпийский пояс под защитой величавых вершин Шхара и Ушба',
      ka: 'მკაცრი ალპური ზონა მყინვარების (შხარა, უშბა) ძირში',
      en: 'High-altitude subalpine & alpine belt beneath towering glacial peaks'
    },
    keyHarvests: [
      {
        ru: 'Горная дикая облепиха',
        ka: 'მთის ველური ქაცვი',
        en: 'Wild High-Altitude Sea Buckthorn'
      },
      {
        ru: 'Эндемичная дикая мята и душица',
        ka: 'სვანური პიტნა და თავშავა',
        en: 'Svaneti Endemic Mint & Oregano'
      },
      {
        ru: 'Черника с альпийских склонов',
        ka: 'ალპური მოცვი',
        en: 'Highland Wild Bilberries'
      }
    ],
    description: {
      ru: 'Край родовых каменных башен и нетронутых ледников. Растения здесь адаптировались к экстремальному ультрафиолету и аккумулируют рекордную концентрацию биофлавоноидов и эфирных масел.',
      ka: 'კოშკებისა და მყინვარების მხარე. ულტრაიისფერი სხივების წყალობით, აქაური მცენარეები ყველაზე მდიდარია ეთერზეთებითა და ვიტამინებით.',
      en: 'Land of historic stone towers and 5000m peaks. Plants here synthesize exceptional levels of essential oils, antioxidants, and restorative phytonutrients.'
    }
  }
];
