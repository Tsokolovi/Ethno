import { Product } from '../types';
import { ASSETS } from './assets';

export const PRODUCTS: Product[] = [
  {
    id: 'ethno-karaloki-persimmon',
    name: {
      ka: 'ყარალოკი — ჩირი მთის ხურმისგან',
      ru: 'Каралоки — горная вяленая хурма',
      en: 'Karaloki — Mountain Sun-Dried Persimmon'
    },
    georgianName: 'კარალოკი (ხურმის ჩირი)',
    category: 'dried_fruits',
    price: 18.5,
    weight: '250 გ',
    image: ASSETS.driedFruits,
    badge: {
      ka: 'ქართული საგანძური',
      ru: 'Гордость Грузии',
      en: 'Georgian Heritage'
    },
    region: {
      ka: 'ალაზნის ველი, კახეთი',
      ru: 'Алазанская долина, Кахетия',
      en: 'Alazani Valley, Kakheti'
    },
    elevation: '480 - 650 მ',
    description: {
      ka: 'ტრადიციული მეთოდით, კახეთის სუფთა მთის ქარზე გამოყვანილი ყარალოკი. შიგნით ნაზი და მარმელადისებრია, გარედან ბუნებრივი ფრუქტოზის მსუბუქი თეთრი ნაფიფქით.',
      ru: 'Легендарная грузинская хурма «каралоки», высушенная традиционным методом на шпагате под сухим горным ветром Кахетии. Покрыта естественным белым налетом природной фруктозы, имеет тающую мармеладную текстуру внутри.',
      en: 'Famous Georgian mountain persimmon dried using antique string-hanging methods in Kakheti mountain breeze. Naturally develops an organic white fructose frost with a rich honey-caramel center.'
    },
    ingredients: {
      ka: '100% რჩეული ქართული ხურმა ყარალოკი. შაქრის, გოგირდის (SO2) და კონსერვანტების გარეშე.',
      ru: '100% отборная грузинская хурма каралоки. Без сахара, без диоксида серы (SO2), без красителей.',
      en: '100% natural Georgian Karaloki persimmons. Zero added sugar, zero sulfur dioxide (SO2), zero additives.'
    },
    flavorNotes: {
      ka: ['თაფლი', 'კარამელი', 'მთის ლეღვი', 'ყვავილოვანი ნექტარი'],
      ru: ['Мёд', 'Карамель', 'Горный инжир', 'Цветочный нектар'],
      en: ['Honey', 'Caramel', 'Mountain Fig', 'Floral Nectar']
    },
    ecoTags: ['100% ქართული', 'მზის ენერგიით შრობა', 'შაქრის გარეშე', 'SO2-ის გარეშე'],
    harvestSeason: 'ოქტომბერი — ნოემბერი',
    nutritionalInfo: {
      calories: 274,
      sugarAdded: '0 გ (მხოლოდ ბუნებრივი ფრუქტოზა)',
      naturalCarbs: '68 გ',
      fiber: '7.8 გ'
    }
  },
  {
    id: 'ethno-mountain-figs',
    name: {
      ka: 'კახური თეთრი ლეღვის ჩირი',
      ru: 'Вяленый белый инжир из Кахетии',
      en: 'Kakheti Sun-Dried White Figs'
    },
    georgianName: 'ლეღვის ჩირი (თეთრი ლეღვი)',
    category: 'dried_fruits',
    price: 16.0,
    weight: '250 გ',
    image: ASSETS.mountainFigs,
    badge: {
      ka: 'შეზღუდული მოსავალი',
      ru: 'Ограниченный сбор',
      en: 'Limited Harvest'
    },
    region: {
      ka: 'გომბორის მთისწინეთი, კახეთი',
      ru: 'Предгорья Гомборского хребта, Кахетия',
      en: 'Gombori Foothills, Kakheti'
    },
    elevation: '520 მ',
    description: {
      ka: 'ადგილობრივი თეთრი ლეღვი, გამომშრალი წიფლის ხის ეკოლოგიურ თაროებზე მზის ქვეშ. ინარჩუნებს წვნიან რბილობს და ბუნებრივ არომატს.',
      ru: 'Сладкие плотные плоды автохтонного белого инжира. Сушатся на открытых решетках из горного бука под щедрым грузинским солнцем. Сохраняют сочную упругую мякоть и хрустящие семена.',
      en: 'Autochthonous white figs slow-dried on native beechwood racks under abundant Georgian sunlight. Chewy, soft, and richly fragrant.'
    },
    ingredients: {
      ka: '100% მწიფე ქართული თეთრი ლეღვი. დანამატების გარეშე.',
      ru: '100% спелый грузинский белый инжир. Без обработки паром и без консервантов.',
      en: '100% ripe Georgian mountain figs. Free from syrup and chemical glazes.'
    },
    flavorNotes: {
      ka: ['ლეღვის მურაბა', 'კაკალი', 'ბადაგი', 'სურნელოვანი სანელებლები'],
      ru: ['Инжирное варенье', 'Грецкий орех', 'Патока', 'Пряности'],
      en: ['Fig Jam', 'Walnut', 'Molasses', 'Warm Spices']
    },
    ecoTags: ['ორგანული', 'წიფლის ხის თაროებზე შრობა', 'დანამატების გარეშე'],
    harvestSeason: 'აგვისტო — სექტემბერი',
    nutritionalInfo: {
      calories: 249,
      sugarAdded: '0 გ',
      naturalCarbs: '63 გ',
      fiber: '9.8 გ'
    }
  },
  {
    id: 'ethno-wild-plum-tkemali',
    name: {
      ka: 'მზის ველური ქლიავის და ტყემლის ჩირი',
      ru: 'Вяленый дикий ткемали и слива венгерка',
      en: 'Wild Mountain Plum & Tkemali Dried Fruit'
    },
    georgianName: 'ველური ქლიავისა და ტყემლის ჩირი',
    category: 'dried_fruits',
    price: 14.5,
    weight: '200 გ',
    image: ASSETS.sunPlums,
    region: {
      ka: 'შიდა ქართლი, მტკვრის ხეობა',
      ru: 'Шида Картли, сады долины Мтквари',
      en: 'Shida Kartli, Mtkvari Valley'
    },
    elevation: '720 მ',
    description: {
      ka: 'მთის ქლიავისა და ველური ტყემლის ჰარმონიული ნაზავი სასიამოვნო მომჟავო-ტკბილი გემოთი. იდეალურია ყველთან, ჩაისთან და როგორც ჯანსაღი წასახემსებელი.',
      ru: 'Кисло-сладкий дуэт горной сливы венгерки и дикорастущего красного ткемали. Необыкновенный взрыв вкуса с легкой фруктовой кислинкой, идеален к сырам, мясным плато и чаю.',
      en: 'Tart-sweet dried wild plums harvested from pristine highland orchards. High in natural anthocyanins and organic minerals.'
    },
    ingredients: {
      ka: '100% ქართული მთის ქლიავი კურკის გარეშე, ველური ტყემალი.',
      ru: '100% грузинская горная слива без косточки, дикий ткемали.',
      en: '100% pitted Georgian mountain plums and wild tkemali.'
    },
    flavorNotes: {
      ka: ['წვნიანი სიმჟავე', 'მუქი ქლიავი', 'ალუბლის კურკა', 'ბალზამიკი'],
      ru: ['Сочная кислинка', 'Темная слива', 'Вишневая косточка', 'Бальзамик'],
      en: ['Juicy Tartness', 'Dark Plum', 'Cherry Stone', 'Balsamic']
    },
    ecoTags: ['100% ნატურალური', 'ხელით რჩეული', 'ანტიოქსიდანტებით მდიდარი'],
    harvestSeason: 'სექტემბერი',
    nutritionalInfo: {
      calories: 240,
      sugarAdded: '0 გ',
      naturalCarbs: '61 გ',
      fiber: '7.1 გ'
    }
  },
  {
    id: 'ethno-quince-wild-apple',
    name: {
      ka: 'მთის კომშისა და ველური ვაშლის ხრაშუნა ჩირი',
      ru: 'Чипсы из горной айвы и лесного яблока',
      en: 'Highland Quince & Forest Wild Apple Crisps'
    },
    georgianName: 'მთის კომში და ტყის ვაშლი',
    category: 'dried_fruits',
    price: 13.0,
    weight: '150 გ',
    image: ASSETS.wildApplesQuince,
    region: {
      ka: 'რაჭის და ბორჯომის ტყეები',
      ru: 'Леса Рачи и Боржоми',
      en: 'Highland Forests of Racha & Borjomi'
    },
    elevation: '1100 - 1400 მ',
    description: {
      ka: 'ნაზად გამომშრალი მთის სურნელოვანი კომში და ტყის ვაშლი, დაბალ ტემპერატურაზე დამუშავებული C ვიტამინისა და არომატის შესანარჩუნებლად.',
      ru: 'Тончайшие хрустящие ломтики терпкой горной айвы и дикого кавказского яблока. Бережная дегидратация при 38°C бережет витамин C и неповторимый цветочный аромат айвового сада.',
      en: 'Crisp golden slices of Caucasian mountain quince and wild endemic forest apples. Dehydrated at 38°C to lock in vitamin C and intoxicating floral aromatics.'
    },
    ingredients: {
      ka: '100% ველური ვაშლი და კომში საქართველოს მთებიდან.',
      ru: '100% дикорастущие яблоки и айва из горных лесов Грузии.',
      en: '100% wild Georgian mountain apples and fragrant quince.'
    },
    flavorNotes: {
      ka: ['მუსკატური კომში', 'ტყის ვაშლი', 'ნაზი სიმკვრივე', 'ყვავილის თაფლი'],
      ru: ['Мускатная айва', 'Лесное яблоко', 'Тонкая терпкость', 'Цветочный мед'],
      en: ['Muscat Quince', 'Forest Apple', 'Delicate Tartness', 'Flower Honey']
    },
    ecoTags: ['კავკასიის ველური ბუნება', 'ეკო-შრობა < 40°C', 'ვიტამინი C'],
    harvestSeason: 'სექტემბერი — ოქტომბერი',
    nutritionalInfo: {
      calories: 232,
      sugarAdded: '0 გ',
      naturalCarbs: '58 გ',
      fiber: '8.4 გ'
    }
  },
  // FRUIT TEAS
  {
    id: 'ethno-tea-racha-mountain',
    name: {
      ka: 'ჩაი „მთის რაჭა“ — კომში, ასკილი, პიტნა და კონდარი',
      ru: 'Чай «Горная Рача» (Айва, Шиповник, Дикая мята и Кондари)',
      en: 'Mountain Racha Artisan Fruit Tea'
    },
    georgianName: '„მთის რაჭა“ — ხილ-კენკროვანი ჩაი',
    category: 'fruit_teas',
    price: 19.0,
    weight: '120 გ',
    image: ASSETS.fruitTea,
    badge: {
      ka: 'რჩეული',
      ru: 'Бестселлер',
      en: 'Signature Blend'
    },
    region: {
      ka: 'მაღალმთიანი რაჭა-ლეჩხუმი',
      ru: 'Высокогорная Рача-Лечхуми',
      en: 'Highlands of Racha-Lechkhumi'
    },
    elevation: '1350 - 1800 მ',
    description: {
      ka: 'უნიკალური მთის ნაზავი: გამომშრალი კომში, ველური ასკილის კენკრა, ვაშლის ნაჭრები, მთის კონდარი და პიტნა. ქმნის ლალისფერ ნაყენს ალპური მდელოების სურნელით.',
      ru: 'Флагманский горный купаж на базе вяленой кавказской айвы, ягод дикого шиповника, яблочных ломтиков, горного чабреца (кондари) и высокогорной мяты. Настой глубокого янтарно-рубинового оттенка с согревающим ароматом грузинских альпийских лугов.',
      en: 'Signature fruit and herbal infusion based on sun-dried Georgian quince, wild rosehips, sweet apple crisps, mountain savory (kondari), and alpine mint.'
    },
    ingredients: {
      ka: 'გამომშრალი კომში, ასკილი, ვაშლი, მთის კონდარი, ალპური პიტნა. 100% ქართული.',
      ru: 'Вяленая горная айва, плоды дикого шиповника, сушеное яблоко, горный чабрец (кондари), дикая альпийская мята. 100% грузинский сбор.',
      en: 'Dried wild quince, mountain rosehip, wild apple, alpine wild mint, Georgian savory (kondari).'
    },
    flavorNotes: {
      ka: ['თაფლოვანი კომში', 'ასკილის სიმჟავე', 'სურნელოვანი კონდარი', 'მთის პიტნა'],
      ru: ['Медовая айва', 'Шиповник с кислинкой', 'Пряный кондари', 'Морозная мята'],
      en: ['Honey Quince', 'Tart Rosehip', 'Spicy Savory', 'Crisp Mint']
    },
    ecoTags: ['კავკასიის ველური ბუნება', 'უკოფეინო', 'არომატიზატორების გარეშე', '100% ბიო'],
    harvestSeason: 'ივლისი — ოქტომბერი',
    brewingGuide: {
      temp: '90 - 95 °C',
      time: '6 - 8 წუთი',
      ratio: '2 ჩ/კ 350 მლ წყაროს წყალზე'
    }
  },
  {
    id: 'ethno-tea-alazani-evening',
    name: {
      ka: 'ჩაი „ალაზნის საღამო“ — ხურმის ჩირი, კოწახური და ვარდის ფურცლები',
      ru: 'Чай «Алазанский вечер» (Вяленая хурма, Барбарис и Роза)',
      en: 'Alazani Evening Tea (Dried Persimmon, Barberry & Mountain Rose)'
    },
    georgianName: '„ალაზნის საღამო“ — ხილის ჩაი',
    category: 'fruit_teas',
    price: 21.0,
    weight: '120 გ',
    image: ASSETS.alazaniEveningTea,
    region: {
      ka: 'ალაზნის ველი და ლაგოდეხის მთისწინეთი',
      ru: 'Алазанская долина и предгорья Лагодехи',
      en: 'Alazani Valley & Lagodekhi Foothills'
    },
    elevation: '450 - 800 მ',
    description: {
      ka: 'დახვეწილი ხილის ჩაი ყარალოკის ტკბილი ნოტებით, მთის კოწახურის სიმჟავით და ვარდის სათუთი არომატით. საღამოს მყუდრო განტვირთვისთვის.',
      ru: 'Бархатистый, согревающий авторский чай. Сладкие карамельные ноты вяленой хурмы каралоки сбалансированы яркой ягодной кислинкой дикого горного барбариса и тонкими эфирными маслами кахетинской дамасской розы.',
      en: 'Velvety, soothing fruit infusion combining candied natural Karaloki persimmon chunks, tart Caucasian mountain barberries, and wild rose petals.'
    },
    ingredients: {
      ka: 'ყარალოკის ნაჭრები, მთის კოწახური, ვარდის ფურცლები, ველური ბალი.',
      ru: 'Кусочки вяленой хурмы каралоки, сушеный горный барбарис, лепестки садовой розы, вяленая лесная вишня.',
      en: 'Sun-dried Karaloki persimmon cubes, wild mountain barberries, dried rose petals, dried sour cherries.'
    },
    flavorNotes: {
      ka: ['კარამელური ყარალოკი', 'მთის კოწახური', 'ვარდის ბაღი', 'ნაზი გემო'],
      ru: ['Карамельная хурма', 'Красный барбарис', 'Розовый сад', 'Мягкое послевкусие'],
      en: ['Caramel Persimmon', 'Red Barberry', 'Rose Garden', 'Smooth Finish']
    },
    ecoTags: ['რელაქსაცია', 'ბუნებრივი ეთერზეთები', 'ხელით კრეფა'],
    harvestSeason: 'აგვისტო — ოქტომბერი',
    brewingGuide: {
      temp: '88 - 92 °C',
      time: '7 - 9 წუთი',
      ratio: '1.5 ს/კ 400 მლ-ზე'
    }
  },
  {
    id: 'ethno-tea-svaneti-alpine',
    name: {
      ka: 'ჩაი „სვანური ნაზავი“ — ქაცვი, მოცვი და თავშავა',
      ru: 'Чай «Сванский эдельвейс» (Облепиха, Черника и Дикая душица)',
      en: 'Svaneti Alpine Heights Tea (Sea Buckthorn, Bilberry & Oregano)'
    },
    georgianName: '„სვანეთის ველური ნაკრები“',
    category: 'fruit_teas',
    price: 22.5,
    weight: '110 გ',
    image: ASSETS.svanetiHerbal,
    badge: {
      ka: 'სვანური ენდემი',
      ru: 'Эндемик Сванетии',
      en: 'Svaneti Alpine'
    },
    region: {
      ka: 'ზემო სვანეთი (მესტია, უშგული)',
      ru: 'Верхняя Сванетия (Местия, Ушгули)',
      en: 'Upper Svaneti (Mestia, Ushguli)'
    },
    elevation: '1800 - 2200 მ',
    description: {
      ka: 'სვანეთის ალპური ზონის უნიკალური იმუნური ჩაი: ველური ქაცვი, მთის მოცვი და მთის თავშავა. მდიდარია ბუნებრივი ვიტამინებით.',
      ru: 'Высокогорный иммунный купаж из сушеных дикорастущих ягод кавказской облепихи, горной черники, лесных сушеных яблок и сванской дикой душицы. Богат природными фитонцидами и витаминами.',
      en: 'High-altitude immune booster crafted from sun-dried Caucasian sea buckthorn berries, wild bilberries, mountain apples, and aromatic Svaneti oregano.'
    },
    ingredients: {
      ka: 'ველური ქაცვი, მთის მოცვი, ვაშლი, თავშავა, ბალბა.',
      ru: 'Сушеная дикая облепиха, сушеная черника, горное яблоко, сванская дикая душица, мелисса.',
      en: 'Dried wild sea buckthorn, mountain bilberry, dried apple, wild Caucasian oregano, lemon balm.'
    },
    flavorNotes: {
      ka: ['მზიანი ქაცვი', 'მთის მოცვი', 'სურნელოვანი ბალახები', 'ცოცხალი სიგრილე'],
      ru: ['Солнечная облепиха', 'Черничная глубина', 'Пряные травы', 'Бодрящая свежесть'],
      en: ['Sun Buckthorn', 'Deep Bilberry', 'Wild Herbs', 'Mountain Refreshment']
    },
    ecoTags: ['ალპური კრეფა >1800მ', 'იმუნიტეტი', 'კავკასიური სუპერფუდი'],
    harvestSeason: 'ივლისი — აგვისტო',
    brewingGuide: {
      temp: '95 °C',
      time: '5 - 7 წუთი',
      ratio: '2 ჩ/კ 300 მლ-ზე'
    }
  },
  // GIFT SETS
  {
    id: 'ethno-box-terroir-grand',
    name: {
      ka: 'სასაჩუქრე ნაკრები „ეთნო — საქართველოს გული“',
      ru: 'Подарочный бокс «ეთნო — Сердце Грузии»',
      en: 'Gift Box "Ethno — Heart of Georgia"'
    },
    georgianName: '„ეთნო — საქართველოს გული“',
    category: 'gift_sets',
    price: 68.0,
    weight: '850 გ',
    image: ASSETS.giftBoxCraft,
    badge: {
      ka: 'პრემიუმ შეფუთვა',
      ru: 'Премиум эко-бокс',
      en: 'Artisan Wooden Box'
    },
    region: {
      ka: 'სრული საქართველო',
      ru: 'Вся Грузия (Кахетия, Рача, Картли, Сванетия)',
      en: 'All-Georgia Terroir Collection'
    },
    elevation: '480 - 2200 მ',
    description: {
      ka: 'პრემიუმ სასაჩუქრე ყუთი: 3 სახეობის რჩეული ქართული ჩირი, 2 მთის ხილის ჩაი და ხელნაკეთი თიხის ფიალა.',
      ru: 'Подарочная коллекция в фирменном коробе из натурального перерабатываемого дерева и льна: 3 вида эталонных сухофруктов (Каралоки, Белый инжир, Дикая слива) + 2 авторских горных фруктовых чая + глиняная пиала ручной работы от грузинских гончаров.',
      en: 'Curated premium eco-friendly gift box featuring 3 champion dried fruits (Karaloki, White Fig, Wild Plum), 2 mountain fruit teas, and a handcrafted Georgian clay tea bowl.'
    },
    ingredients: {
      ka: 'ეთნოს რჩეული ჩირებისა და ჩაის ნაკრები ეკოლოგიურ შეფუთვაში.',
      ru: 'Полный ассортимент отборных сухофруктов и чаев ეთნო в индивидуальных крафт-пакетах с замком ziplock.',
      en: 'Complete collection of Ethno dried fruits and teas in biodegradable craft packaging with clay cup.'
    },
    flavorNotes: {
      ka: ['თაფლი', 'ლეღვი', 'კომში', 'კონდარი', 'ქაცვი'],
      ru: ['Мёд', 'Инжир', 'Айва', 'Чабрец', 'Облепиха'],
      en: ['Honey', 'Fig', 'Quince', 'Savory', 'Buckthorn']
    },
    ecoTags: ['ხისა და სელის ეკო-შეფუთვა', 'საჩუქარი შინაარსით', 'პირდაპირი იმპორტი'],
    harvestSeason: '2026 წლის სეზონური ტირაჟი',
    nutritionalInfo: {
      calories: 255,
      sugarAdded: '0 გ',
      naturalCarbs: '64 გ',
      fiber: '8.2 გ'
    }
  }
];
